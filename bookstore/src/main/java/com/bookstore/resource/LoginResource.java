package com.bookstore.resource;

import com.bookstore.domain.User;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.Date;
import java.util.Map;

/**
 * Created by z00382545 on 1/15/17.
 */
@RestController
public class LoginResource {
    @Autowired
    private UserService userService;

//    @RequestMapping("/login")
//    public ResponseEntity login(
//            @RequestParam(value="error", required = false) String error
//    ) {
//        if (error != null) {
//            return new ResponseEntity("Login failed.",HttpStatus.BAD_REQUEST);
//        }
//
//        return new ResponseEntity("Login success.",HttpStatus.OK);
//    }

    @RequestMapping("/")
    public ResponseEntity logout(
            @RequestParam("logout") String logout
    ){
        return new ResponseEntity("Logout success.",HttpStatus.OK);
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

    @RequestMapping(value = "/user/logout", method = RequestMethod.POST)
    public String logout() {
        SecurityContextHolder.clearContext();

        return "logout success.";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User registerUser(@RequestBody User user) {
        return userService.save(user);
    }


    @RequestMapping("/test")
    public String test() {
        return "test";
    }

    @RequestMapping("/checkSession")
    public String checkSession() {
        return "Session Active";
    }

    @RequestMapping("/token")
    @ResponseBody
    public Map<String,String> token(HttpSession session) {
        return Collections.singletonMap("token", session.getId());
    }
}
