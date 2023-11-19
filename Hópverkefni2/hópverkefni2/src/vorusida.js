document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if(productId){
        getProductDetails(productId);
    } else{
        displayErrorMessage("Engin vara fundin");
    }
});

function getProductDetails(productId) {
    const apiUrl = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/';
  
    fetch(apiUrl + productId)
      .then(response => response.json())
      .then(product => {
        console.log('Product Details:', product);
        displayProductDetails(product);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        displayErrorMessage("Error fetching product details");
      });
  }

function displayProductDetails(product){
    // Get the container where product details will be displayed
    const productDetailsContainer = document.getElementById('product-details');

    

    // Create HTML elements to display product details
    const titleElement = document.createElement('h2');
    titleElement.textContent = product.title;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: ${product.price}`;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;

    const imageElement = document.createElement('img');
    imageElement.src = product.imageElement;

    // Append elements to the container
    productDetailsContainer.appendChild(titleElement);
    productDetailsContainer.appendChild(imageElement);
    productDetailsContainer.appendChild(priceElement);
    productDetailsContainer.appendChild(descriptionElement);
    
}
function displayErrorMessage(message) {
    // Display an error message on the page
    const productDetailsContainer = document.getElementById('product-details');
    productDetailsContainer.innerHTML = `<p>${message}</p>`;
}