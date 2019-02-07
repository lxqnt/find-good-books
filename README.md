# The Good Booklist

This is a simple project exploring client side api calls with Vue JS. In this webapp, I am using the google books API to request search query information. This was an opportunity to review Vue JS, api integrations, and basic server deployment. The project is live at https://the-good-booklist.herokuapp.com.

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

## Things to work on

- Vue Router
  I hadn't worked with the vue router previously, but getting it set was relativly quick. However, there were a few things to improve upon.
  - Currently 404 errors are not being handled seperately and link back to the home page.
  - I decided to pass in props for the book detail through routing. However this means that all the data is lost on page refresh. Alternative may have been to pass in just the book ID and do a new get request on the indivual page.
  - I did not route a seperate path for the search results page, meaning that data is also lost on page refresh and that one can't provide a link to a search query.
- Error Handling
  - I did not add error handling to my query results yet. Two quick additions would be to add a case for when no results are returned on a query and check for cases when there is no query inputed.
- Server side API calls and OAuth
  - Although the documentation indicated that an api access token was required to use the API, I didn't have an issue using it without one. I would want to look into this more and potentially move my API calls to the express server side. This would also better obfuscate the credentials.
  - The API also has oAuth requirements for personal data - which could be an additional feature to explore.
- Design / UI
  - In my simple design, I did aim to responsive for mobile, but overall there is alot that can be done to better design the site.
  - I also want to explore more how to do animations and transitions better in VueJS and more generally.
- Opportunties for testing
  - During develepment I used a json file with data from the api to develop the basic frame work. Using this data as a proxy for testing might make snapshot testing and even unit testing easier to do. In the past I had tried to write test for apps that use an API, but always ran into the issue of the async data calls.
