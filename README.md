# TVMLMovies
The source code companion to my presentaion on [Apple TV Developer Kit](http://bit.ly/apple-tv)

## Requirements 
Xcode 7.1 or later

## Installation
To run the example from the Apple TV simulator and a local server with JavaScript TVML templates perform the following steps:
- In Terminal: cd TVMLMovies/movies-server/src/main/resources/public
- In Terminal start a local web server via: python -m SimpleHTTPServer 9001
- In Xcode open and run TVMLMovies/movies-server/MovieFinder.xcodeproj

Alternatively, to run the example from the Apple TV simulator and a local server with Spring Boot server-side driven TVML templates perform the following steps:
-Import TVMLMovies/movies-server as a Spring Boot project
-Update application.js (TVMLMovies/movies-server/src/main/resources/public/js/application.js) to load the movies.tvml server-side driven template instead of the JavaScript driven Movies.tvml.js template.
- In Xcode open TVMLMovies/movies-server/MovieFinder.xcodeproj.  Verify your running Spring Boot port matches the port specified in AppDelegate.swift.  Run the app!
