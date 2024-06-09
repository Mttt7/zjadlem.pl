package com.mtcompany.zjadlempl.dto.Review;


import jakarta.validation.constraints.*;
import lombok.Data;
import org.hibernate.validator.constraints.URL;


@Data
public class ReviewRequestDto {

    @NotBlank(message = "Title is required")
    @Size(min = 5, max = 100, message = "Title must be between 5 and 100 characters")
    private String title;

    @NotNull(message = "Rating is required")
    @DecimalMin("1.0")
    @DecimalMax("10.0")
    private Double rating;

    @NotBlank(message = "Comment is required")
    @Size(min = 10, max = 500, message = "Comment must be between 10 and 500 characters")
    private String comment;

    @NotBlank(message = "City is required")
    @Size(min = 3, max = 50, message = "City must be between 3 and 50 characters")
    private String city;

    @URL(message = "Invalid URL format")
    private String imageUrl;

    @URL(message = "Invalid URL format")
    private String googleMapsUrl;

}
