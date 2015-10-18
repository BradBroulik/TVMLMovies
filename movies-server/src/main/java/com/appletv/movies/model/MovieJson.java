package com.appletv.movies.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MovieJson {

    public String trackName;
    public String primaryGenreName;
    public String previewUrl;
    private String artworkUrl100;
    
    public void setArtworkUrl100(String artworkUrl100) {
	// iTunes largest image size is 100X100.  Dynamically update image URL to be 400X400
	this.artworkUrl100 = artworkUrl100.replace("100x100", "400x400");
    }
    
    public String getArtworkUrl100() {
	return artworkUrl100;
    }
    
}