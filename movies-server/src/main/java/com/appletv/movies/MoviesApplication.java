package com.appletv.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@SpringBootApplication
//@EnableWebMvc
public class MoviesApplication { //extends WebMvcConfigurerAdapter {

    public static void main(String[] args) {
        SpringApplication.run(MoviesApplication.class, args);
    }

//    @Bean
//    public ViewResolver getViewResolver() {
//        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
////        resolver.setPrefix("/resources/templates/"); FAIL
////        resolver.setPrefix("/"); FAIL
////        resolver.setPrefix("/public/templates/"); FAIL
////        resolver.setPrefix("/resources/public/templates/"); FAIL
////        resolver.setPrefix("/resources/public/templates/");
//        resolver.setSuffix(".tvml");
//        return resolver;
//    }
//    
//    @Override
//    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
//        configurer.enable();
//    } 

}