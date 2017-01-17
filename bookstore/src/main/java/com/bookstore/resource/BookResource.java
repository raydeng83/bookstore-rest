package com.bookstore.resource;

import com.bookstore.domain.Book;
import com.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;

/**
 * Created by z00382545 on 1/16/17.
 */

@RestController
@RequestMapping("/book")
public class BookResource {
    private String imageName;

    @Autowired
    private BookService bookService;

    @RequestMapping(value = "/add/image", method = RequestMethod.POST)
    public ResponseEntity upload(HttpServletResponse response, HttpServletRequest request) {
        try {
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = multipartFile.getOriginalFilename();
            imageName = fileName;

            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream =
                    new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/book/" + fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload Failed!", HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Book addBookPost(@RequestBody Book book) {
        return bookService.save(book);
    }



}
