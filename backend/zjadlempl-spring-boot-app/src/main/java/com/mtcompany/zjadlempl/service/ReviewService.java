package com.mtcompany.zjadlempl.service;

import com.mtcompany.zjadlempl.dto.Review.ReviewRequestDto;
import com.mtcompany.zjadlempl.dto.Review.ReviewResponseDto;
import org.springframework.data.domain.Page;

import java.util.Map;

public interface ReviewService {
    Page<ReviewResponseDto> getFeedReviews(int pageSize, int pageNumber);

    Map<String, String> createReview(ReviewRequestDto reviewRequestDto);
}
