const fetch = require('node-fetch');

const url = 'https://www.w3schools.com/jquery/ajax_get.asp';

function getHTML() {
  return fetch(`${url}`)
    .then(response => response.text());
}

getHTML().then(
  body => {
    console.log(body);
  }
);
