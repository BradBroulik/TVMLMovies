package com.appletv.movies.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MoviesResponseJson {

    private int resultCount;
    private List<MovieJson> results;
    
    
    public void setResultCount(int resultCount) {
	this.resultCount = resultCount;
    }
    	
    public int getResultCount() {
	return this.resultCount;
    }
    
    public void setResults(List<MovieJson> results) {
	this.results = results;
    }
    
    public List<MovieJson> getResults() {
	return results;
    }

    
}