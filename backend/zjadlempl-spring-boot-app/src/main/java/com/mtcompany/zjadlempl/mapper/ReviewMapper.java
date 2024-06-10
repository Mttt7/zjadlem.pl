package com.mtcompany.zjadlempl.mapper;


import com.mtcompany.zjadlempl.dto.Review.ReviewRequestDto;
import com.mtcompany.zjadlempl.dto.Review.ReviewResponseDto;
import com.mtcompany.zjadlempl.model.Review;
import com.mtcompany.zjadlempl.model.UserEntity;
import com.mtcompany.zjadlempl.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewMapper {

private final UserRepository userRepository;

    public ReviewResponseDto mapToReviewResponseDto(Review review){


        UserEntity user = userRepository.findById(review.getAuthorId()).orElseThrow(
                ()->new RuntimeException("User not found")
        );




        return ReviewResponseDto
                .builder()
                .id(review.getId())
                .googleMapsUrl(review.getGoogleMapsUrl())
                .title(review.getTitle())
                .city(review.getCity())
                .rating(review.getRating())
                .authorId(review.getAuthorId())
                .authorUsername(user.getUsername())
                .comment(review.getComment())
                .likes(review.getLikes())
                .supports(review.getSupports())
                .createdAt(review.getCreatedAt())
                .updatedAt(review.getUpdatedAt())
                .imageUrl(review.getImageUrl())
                .build();
    }


    public Review mapToReview(ReviewRequestDto dto) {
        Review review = new Review();
        review.setTitle(dto.getTitle());
        review.setRating(dto.getRating());
        review.setComment(dto.getComment());
        review.setCity(dto.getCity());
        review.setImageUrl(dto.getImageUrl());
        review.setGoogleMapsUrl(dto.getGoogleMapsUrl());

        return review;
    }

}
