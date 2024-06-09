package com.mtcompany.zjadlempl.repository;

import com.mtcompany.zjadlempl.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReviewRepository extends MongoRepository<Review,String> {

}
