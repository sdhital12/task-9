import { useEffect, useState } from "react";
// api.js

const endpointWithError = 'https://jsonplaceholder.typicode.com/nonexistent'; // Modify the URL to a non-existent endpoint

// Make the API request and handle the promise
fetch(endpointWithError)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(data => {
    // Handle the data here
    console.log(data);
  })
  .catch(error => {
    // Handle the rejected promise here
    console.error('Error:', error);
    displayErrorMessage('unable  to fetch data from the API.');
  });

// Function to display the error message in the console and on the webpage
function displayErrorMessage(message) {
  console.error(message);

  // Create a new paragraph element to display the error message on the webpage
  const errorMessageElement = document.createElement('p');
  errorMessageElement.textContent = message;
  errorMessageElement.style.color = 'red';

  // Append the error message to the document body
  document.body.appendChild(errorMessageElement);
}
export  default  displayErrorMessage 