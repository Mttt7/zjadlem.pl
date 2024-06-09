package com.mtcompany.zjadlempl.dto;

import com.mtcompany.zjadlempl.model.Role;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserResponseDto {
    private String id;
    private String username;
    private String email;

    private List<Role> roles;
}