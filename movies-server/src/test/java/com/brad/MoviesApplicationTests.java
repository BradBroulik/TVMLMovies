package com.brad;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;

import com.appletv.movies.MoviesApplication;

import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MoviesApplication.class)
@WebAppConfiguration
public class MoviesApplicationTests {

	@Test
	public void contextLoads() {
	}

}
