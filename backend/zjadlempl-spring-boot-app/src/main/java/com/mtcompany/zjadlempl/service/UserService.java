package com.mtcompany.zjadlempl.service;

import com.mtcompany.zjadlempl.model.UserEntity;

public interface UserService {


    Boolean checkEmailAvailability(String email);

    UserEntity findUserByEmail(String email);

    UserEntity findUserById(String id);
}
