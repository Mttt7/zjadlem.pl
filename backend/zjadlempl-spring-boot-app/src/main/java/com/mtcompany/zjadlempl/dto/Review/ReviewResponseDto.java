package com.mtcompany.zjadlempl.dto.Review;


import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class ReviewResponseDto {

    private String id;

    private String title;

    private Double rating;

    private String city;

    private String comment;

    private String imageUrl;

    private String authorId;

    private String authorUsername;

    private Long likes;

    private Long supports;

    private String googleMapsUrl;

    private Date createdAt;

    private Date updatedAt;
}
