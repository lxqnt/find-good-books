# The Good Booklist

This is a simple project exploring client side api calls with Vue JS. In this webapp, I am using the google books API to request search query information. This was an opportunity to review Vue JS, api integrations, unit testing in vue, better use of computed properties and basic server deployment. The project is live at https://the-good-booklist.herokuapp.com.

## Basic Project setup

```
yarn install
```

- Compiles and hot-reloads for development

```
yarn run serve
```

- Compiles and minifies for production

```
yarn run build
```

- Run your tests

```
yarn run test:unit
```

## Tools I Worked With

- Axios and API Calls

- Google Books API

- Client Side API Calls

- VueJS Front End

- Routing with Vue Router

- testing with a chai / mocha framework


## Work in Progress

- Vue Router 
I've improved the routing and changed the basic structure of the app to allow for page refresh and back and forth movement. Any component that displays data is wrapped by a page view component that requests that data from the google API. The paramaters are passed as part of the url allowing a user can send a specific url and still see the data results. Still some more details to look int. 
  - Currently 404 errors are not being handled seperately and link back to the home page.
- Error Handling

I've added some error handling and am displaying some basic guidence to the user as well. Specifically, I am checking for empty query inputs, waiting for results, and checking if individual results aren't being returned. For example, if no author, then the author field is left blank.
  - Still in progress: 404 errors are not being handled seperately and link back to the home page.
  
- Server side API calls and OAuth
  - Although the documentation indicated that an api access token was required to use the API, I didn't have an issue using it without one. I would want to look into this more and potentially move my API calls to the express server side. This would also better obfuscate the credentials.
  - The API also has oAuth requirements for personal data - which could be an additional feature to explore.
- Design / UI
  - In my simple design, I did aim to responsive for mobile, but overall there is alot that can be done to better design the site.
  - I also want to explore more how to do animations and transitions better in VueJS and more generally.
- Opportunties for testing
  - I've added a number of unit tests specifically to check the data manipulation happening with the computed properties in my app. An additional benefit of this is that it pushed me to seperate my components that display data from my components that request from an api end point. It allows for easier time writing tests and error handling. 
  - During develepment I used a json file with data from the api to develop the basic frame work. Using this data as a proxy for testing helped with unit testing.
