document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
    getProductDetails(productId);
  } else {
    displayErrorMessage("Engin vara fundin");
  }
});

function getProductDetails(productId) {
  const apiUrl = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products/';

  fetch(apiUrl + productId)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(product => {
      console.log('Product Details:', product);
      displayProductDetails(product);
    })
    .catch(error => {
      console.error('Error fetching product details:', error);
      displayErrorMessage("Error fetching product details");
    });
}

function displayProductDetails(product) {
  // Get the container where product details will be displayed
  const productDetailsContainer = document.getElementById('vorusida');

  // Clear previous content
  productDetailsContainer.innerHTML = '';

  // Create HTML elements to display product details
  const titleElement = document.createElement('h2');
  titleElement.textContent = product.title;

  const priceElement = document.createElement('p');
  priceElement.textContent = `Verð: ${product.price} kr.-`;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = product.description;

  const imageElement = document.createElement('img');
  imageElement.src = product.image;

  // Create a parent container for the left and right columns
  const columnsContainer = document.createElement('div');
  columnsContainer.style.display = 'flex';

  // Create left and right columns
  const leftColumn = document.createElement('div');
  const rightColumn = document.createElement('div');

  // Append elements to the left column
  leftColumn.appendChild(titleElement);
  leftColumn.appendChild(descriptionElement);

  // Append elements to the right column
  rightColumn.appendChild(imageElement);
  rightColumn.appendChild(priceElement);

  // Append left and right columns to the parent container
  columnsContainer.appendChild(leftColumn);
  columnsContainer.appendChild(rightColumn);

  // Append the columns container to the product details container
  productDetailsContainer.appendChild(columnsContainer);

  // Fetch and display related products
  getRelatedProducts(product.category_id, product.id, productDetailsContainer);
}

function getRelatedProducts(categoryId, currentProductId, productDetailsContainer) {
  const apiUrl = `https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=3&category=${categoryId}&exclude=${currentProductId}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(products => {
      console.log('Related Products:', products);
      displayRelatedProducts(products, productDetailsContainer);
    })
    .catch(error => {
      console.error('Error fetching related products:', error);
    });
}

function displayRelatedProducts(products, productDetailsContainer) {
  // Create a container for related products
  const relatedProductsContainer = document.createElement('div');
  relatedProductsContainer.classList.add('related-products-container');

  // Create a title for related products
  const relatedProductsTitle = document.createElement('h3');
  relatedProductsTitle.textContent = 'Tengdar vörur';

  // Append the title to the container
  relatedProductsContainer.appendChild(relatedProductsTitle);

  // Iterate through related products and display them
  products.forEach(product => {
    const relatedProductBox = document.createElement('div');
    relatedProductBox.classList.add('related-product-box');

    const relatedProductTitle = document.createElement('h4');
    relatedProductTitle.textContent = product.title;

    const relatedProductImage = document.createElement('img');
    relatedProductImage.src = product.image;

    relatedProductBox.appendChild(relatedProductTitle);
    relatedProductBox.appendChild(relatedProductImage);

    relatedProductsContainer.appendChild(relatedProductBox);
  });

  // Append the related products container after the columns container
  productDetailsContainer.appendChild(relatedProductsContainer);
}

function displayErrorMessage(message) {
  // Display an error message on the page
  const productDetailsContainer = document.getElementById('vorusida');
  productDetailsContainer.innerHTML = `<p>${message}</p>`;
}
