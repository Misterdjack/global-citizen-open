# Global Citizen

Learn and engage in the issues that affect your community and planet!

This mobile application started as the US Patriot App but will be configured as an open source boilerplate that can be forked for individual countries.  Pull Requests are welcome and encouraged to simplify this repository into a global template.  

It will hook into respective countries non-partisan APIs to find their political representatives and the issues that are of interest to the user. The design and layout and future direction is up to you, as long as it is open-source.  The goal of the US Patriot App is to gamify the political process by visualizing the relationships between representatives, the laws that they are voting on, campaign contributions and so on.  

Of course, it depends on the country and if they have an API for representatives and bills, but scrapers can be built in the future.

#Set Up

1) Make a config.js file at root. Sign up and export the following API keys:
googleKey, androidClientId, googlePlacesKey, prorepublicaKey, opensecretsKey, sentryUrl

eg. export const googleKey = "your-key-here";

2) Configure app.json according to Expo docs if you want to build a native binary aka "standalone app"

# Documentation and Resources

## Expo Docs
- https://docs.expo.io

## React Native Docs
- https://facebook.github.io/react-native/docs/getting-started.html

## Tutorials and Guides
- http://www.reactnativeexpress.com
- http://www.awesome-react-native.com/

## React Native Packages and Frameworks
- https://native.directory/

## API Endpoints for US Patriot App
- https://developers.google.com/civic-information/docs/v2/representatives/representativeInfoByAddress

- http://docs.openstates.org/en/latest/api/

- https://projects.propublica.org/api-docs/congress-api/endpoints/

## "This project is licensed under the terms of the MIT license."
