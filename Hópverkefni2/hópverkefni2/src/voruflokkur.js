class Flokkur {
  constructor() {
    this.apiUrl = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products';
  }

  async getProductsByCategory(categoryId) {
    try {
      const response = await fetch(`${this.apiUrl}?categories/${categoryId}/products`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data.items;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      return [];
    }
  }

  displayProductsByCategory(categoryId) {
    this.getProductsByCategory(categoryId).then(productsArray => {
      this.renderProducts(productsArray);
    });
  }

  renderProducts(products) {
    const container = document.getElementById('products-by-category-container');
    container.innerHTML = '';

    products.forEach(product => {
      const box = document.createElement('div');
      box.classList.add('box');

      const image = document.createElement('img');
      image.style.maxWidth = '300px';
      image.style.maxHeight = '150px';
      image.src = product.image;
      image.alt = product.title;

      const title = document.createElement('h3');
      title.textContent = product.title;

      const price = document.createElement('p');
      price.textContent = `Verð: ${product.price} kr.-`;
      price.style.display = 'block';

      box.appendChild(title);
      box.appendChild(image);
      box.appendChild(price);

      container.appendChild(box);
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const flokkur = new Flokkur();

  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('category_id');

  if (categoryId) {
    flokkur.displayProductsByCategory(categoryId);
  } else {
    console.error('Category ID is missing.');
  }
});
