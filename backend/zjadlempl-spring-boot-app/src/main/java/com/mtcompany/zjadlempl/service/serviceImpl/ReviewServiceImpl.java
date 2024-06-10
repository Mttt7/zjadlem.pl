package com.mtcompany.zjadlempl.service.serviceImpl;

import com.mtcompany.zjadlempl.dto.Review.ReviewRequestDto;
import com.mtcompany.zjadlempl.dto.Review.ReviewResponseDto;
import com.mtcompany.zjadlempl.mapper.ReviewMapper;
import com.mtcompany.zjadlempl.model.Review;
import com.mtcompany.zjadlempl.model.UserEntity;
import com.mtcompany.zjadlempl.repository.ReviewRepository;
import com.mtcompany.zjadlempl.service.AuthService;
import com.mtcompany.zjadlempl.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final ReviewMapper reviewMapper;
    private final AuthService authService;

    @Override
    public Page<ReviewResponseDto> getFeedReviews(int pageSize, int pageNumber) {
        Sort sort = Sort.by("createdAt").descending();


        Page<Review> reviewsPage = reviewRepository.findAll(PageRequest.of(pageNumber,pageSize,sort));


        return new PageImpl<>(
                reviewsPage
                        .stream()
                        .map(reviewMapper::mapToReviewResponseDto).collect(Collectors.toList()),
                PageRequest.of(pageNumber,pageSize), reviewsPage.getTotalElements()
        );

    }

    @Override
    public Map<String, String> createReview(ReviewRequestDto reviewRequestDto) {
        try {
            UserEntity user = authService.getLoggedUser();
            Review review = reviewMapper.mapToReview(reviewRequestDto);
            review.setAuthorId(user.getId());
            review.setCreatedAt(new Date());
            reviewRepository.save(review);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Review created successfully");
            return response;
        } catch (Exception e) {

            Map<String, String> response = new HashMap<>();
            response.put("error", "Failed to create review due to an error.");
            return response;
        }
    }
}
