package com.mtcompany.zjadlempl.dto;

import lombok.Data;

@Data
public class RegisterDto {
    private String email;
    private String password;
    private String passwordRepeated;
    private String username;
}
