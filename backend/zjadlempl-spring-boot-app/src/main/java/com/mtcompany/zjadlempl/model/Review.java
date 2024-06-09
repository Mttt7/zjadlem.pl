package com.mtcompany.zjadlempl.model;


import lombok.Data;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
public class Review {

    @Id
    private String id;

    private String title;

    private Double rating;

    private String comment;

    private String city;

    private String imageUrl;

    private String authorId;

    private Long likes;

    private Long supports;

    private String googleMapsUrl;

    @CreatedDate
    private Date createdAt;

    @LastModifiedBy
    private Date updatedAt;
}
