package com.mtcompany.zjadlempl.mapper;

import com.mtcompany.zjadlempl.dto.UserResponseDto;
import com.mtcompany.zjadlempl.model.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserMapper {
    public static UserResponseDto mapToUserResponseDto(UserEntity userEntity){
        return UserResponseDto.builder()
                .id(userEntity.getId())
                .username(userEntity.getUsername())
                .email(userEntity.getEmail())
                .roles(userEntity.getRoles())
                .build();
    }
}
