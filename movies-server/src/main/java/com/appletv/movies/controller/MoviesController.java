package com.appletv.movies.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import com.appletv.movies.model.MoviesResponseJson;

@Controller
public class MoviesController {
    
    
    @RequestMapping("/movies.tvml")
    String movies(Model model) {
	RestTemplate restTemplate = new RestTemplate();
	addContentTypeForItunes(restTemplate);
	 
	MoviesResponseJson response = restTemplate.
		getForObject("https://itunes.apple.com/search?media=movie&term=MattDamon&limit=10", MoviesResponseJson.class);
	model.addAttribute("response", response);
	
	return "movies";
    }

    
    /** 
     * The <a href="https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html">iTunes Search API</a>
     * response has content-type 'text/javascript' - WTF.  Updating the message converter to allow this non-standard content-type.
     * @param restTemplate
     */
    private void addContentTypeForItunes(RestTemplate restTemplate) {
	MappingJackson2HttpMessageConverter jsonMessageConverter = new MappingJackson2HttpMessageConverter();
	List<MediaType> supportedMediaTypes = new ArrayList<MediaType>();
	supportedMediaTypes.add(new MediaType("text", "javascript"));
	jsonMessageConverter.setSupportedMediaTypes(supportedMediaTypes);
	List<HttpMessageConverter<?>> messageConverterList = restTemplate.getMessageConverters();
	messageConverterList.add(jsonMessageConverter);
	restTemplate.setMessageConverters(messageConverterList);
    }
    
}