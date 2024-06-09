package com.mtcompany.zjadlempl.controller;


import com.mtcompany.zjadlempl.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users/")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;


//    @GetMapping
//    public List<UserEntity> getAllUsers(){
//
//        //return userRespository.findAll();
//    }
//
//    @PostMapping
//    public UserEntity createUser(@RequestBody UserEntity user) {
//        return userRespository.save(user);
//    }
}
