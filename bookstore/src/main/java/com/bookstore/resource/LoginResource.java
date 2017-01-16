package com.bookstore.resource;

import com.bookstore.domain.User;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.Date;
import java.util.Map;

/**
 * Created by z00382545 on 1/15/17.
 */
@RestController
public class LoginResource {
    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public String login(
            @RequestParam(value="error", required = false) String error
    ) {
        if (error != null) {
            return "login failed.";
        }

        return "login success";
    }

    @RequestMapping(value="login", method = RequestMethod.POST)
    public String loginPost(@RequestBody Map<String, String> json) throws
            ServletException {
        if(json.get("username") == null || json.get("password") ==null) {
            throw new ServletException("Please fill in username and password");
        }

        String username = json.get("username");
        String password = json.get("password");

        User user= userService.findByUsername(username);
        if (user==null) {
            throw new ServletException("User name not found.");
        }

        String pwd = user.getPassword();

        if(!password.equals(pwd)) {
            throw new ServletException("Invalid login. Please check your name and password");
        }

        return "login success";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User registerUser(@RequestBody User user) {
        return userService.save(user);
    }


}
