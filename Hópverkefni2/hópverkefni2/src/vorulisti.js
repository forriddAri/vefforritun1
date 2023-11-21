class Vorulisti {
    async getAllProducts() {
      try {
        const response = await fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.items;
      } catch (error) {
        console.error('Error fetching products:', error);
        return [];
      }
    }
  
    displayAllProducts() {
      this.getAllProducts().then(productsArray => {
        this.renderProducts(productsArray);
      });
    }

  
    renderProducts(products) {
      const container = document.getElementById('all-products-container');
  
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
  
        const category = document.createElement('p');
        category.textContent = product.category_title;
        category.style.display = 'block';
  
        box.appendChild(title);
        box.appendChild(image);
        box.appendChild(price);
        box.appendChild(category);
  
        container.appendChild(box);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const vorulisti = new Vorulisti();
    vorulisti.displayAllProducts();
  });