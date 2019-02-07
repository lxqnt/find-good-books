import axios from "axios";

export const getter = {
  getBooks: queryparams => {
    const query = encodeURIComponent(queryparams);
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    axios({
      async: true,
      url: apiURL,
      method: "GET",
      headers: {
        //  Test if authorization needed Authorization: `Bearer ${this.oAuthToken}`,
      }
    }).then(response => {
      let searchResults = response.data;
      console.log(response); //TODO: clean up console.logs and add response code check
      return searchResults;
    });
  }
};
