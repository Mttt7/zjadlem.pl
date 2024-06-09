package com.mtcompany.zjadlempl.repository;

import com.mtcompany.zjadlempl.model.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface UserRepository extends MongoRepository<UserEntity,String> {

    @Query("{ 'email' : ?0 }")
    Optional<UserEntity> findByEmail(String email);


    Optional<UserEntity> findById(String id);

    boolean existsByEmail(String email);
}
