package shop.butcher.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import shop.butcher.backend.dto.response.MessageResponse;
import shop.butcher.backend.entity.Role;
import shop.butcher.backend.entity.User;
import shop.butcher.backend.enums.RoleEnum;
import shop.butcher.backend.repository.CategoryRepository;
import shop.butcher.backend.repository.ProductRepository;
import shop.butcher.backend.repository.RoleRepository;
import shop.butcher.backend.repository.UserRepository;

import java.util.HashSet;
import java.util.Set;


public class MigrateController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    PasswordEncoder encoder;


    @PostMapping("/")
    public ResponseEntity<?> initDataBase() {
        Role roleAdmin = new Role(RoleEnum.ROLE_ADMIN);
        Role roleUser = new Role(RoleEnum.ROLE_USER);
        roleRepository.save(roleAdmin);
        roleRepository.save(roleUser);
        User userAdmin = new User("admin", "admin@butcher.shop", encoder.encode("admin"));
        User userUser = new User("user", "user@butcher.shop", encoder.encode("user"));
        Set<Role> roles = new HashSet<>();
        Set<Role> roles1 = new HashSet<>();
        roles.add(roleAdmin);
        roles1.add(roleUser);
        userAdmin.setRoles(roles);
        userUser.setRoles(roles1);
        userRepository.save(userAdmin);
        userRepository.save(userUser);
        return ResponseEntity.ok(new MessageResponse("Order created successfully!"));
    }
}
