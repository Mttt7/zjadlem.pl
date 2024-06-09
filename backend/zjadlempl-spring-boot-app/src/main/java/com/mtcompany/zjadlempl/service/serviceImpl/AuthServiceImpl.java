package com.mtcompany.zjadlempl.service.serviceImpl;

import com.mtcompany.zjadlempl.model.UserEntity;
import com.mtcompany.zjadlempl.repository.RoleRepository;
import com.mtcompany.zjadlempl.repository.UserRepository;
import com.mtcompany.zjadlempl.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    @Override
    public UserEntity getLoggedUser() {
        String username =
                SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(username).orElseThrow(
                ()-> new UsernameNotFoundException("User not found"));

    }


}