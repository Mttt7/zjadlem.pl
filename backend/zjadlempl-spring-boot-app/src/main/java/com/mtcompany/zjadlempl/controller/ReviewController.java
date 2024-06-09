package com.mtcompany.zjadlempl.controller;


import com.mtcompany.zjadlempl.dto.Review.ReviewRequestDto;
import com.mtcompany.zjadlempl.dto.Review.ReviewResponseDto;
import com.mtcompany.zjadlempl.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews/")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;


    @GetMapping("/")
    public ResponseEntity<Page<ReviewResponseDto>> getFeedReviews(@RequestParam int pageSize, @RequestParam int pageNumber){
        Page<ReviewResponseDto> res = reviewService.getFeedReviews(pageSize, pageNumber);

        return ResponseEntity.status(HttpStatus.OK).body(res);
    }

    @PostMapping("/")
    public ResponseEntity<Map<String,String>> createReview(@RequestBody  @Valid ReviewRequestDto reviewRequestDto){
        Map<String,String> res = reviewService.createReview(reviewRequestDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(res);
    }

}
