const axios = require('axios')

module.exports = {
    getQuery: function (query) {
        const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
        axios({
            async: true,
            url: apiURL,
            method: "GET"
        }).then(response => {
            let searchResults = response.data;
            return searchResults
        });
    },
    getBookID: function (bookID) {
        const id = encodeURIComponent(bookID);
        const apiURL = `https://www.googleapis.com/books/v1/volumes/${id}`;
        axios({
            async: true,
            url: apiURL,
            method: "GET"
        }).then(response => {
            let searchResults = response.data;
            return searchResults
        });
    }
}