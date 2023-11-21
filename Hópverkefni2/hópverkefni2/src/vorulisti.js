class Vorulisti {
  async getAllProducts() {
    try {
      const response = await fetch('https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/products?limit=100');
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

    // Group products by category
    const productsByCategory = {};
    products.forEach(product => {
      const category = product.category_title;
      if (!productsByCategory[category]) {
        productsByCategory[category] = [];
      }
      productsByCategory[category].push(product);
    });

    // Render products
    for (const category in productsByCategory) {
      const productsInCategory = productsByCategory[category];

      // Create a box for the category
      const categoryBox = document.createElement('div');
      categoryBox.classList.add('category-box');

      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category;

      categoryBox.appendChild(categoryTitle);

      // Create boxes for three products in the same category
      const productBoxes = document.createElement('div');
      productBoxes.classList.add('product-boxes');

      productsInCategory.slice(0, 3).forEach(product => {
        const box = document.createElement('div');
        box.classList.add('box');

        const image = document.createElement('img');
        image.style.width = '150px'; // Set the desired width
        image.style.height = '75px'; // Set the desired height
        image.src = product.image;
        image.alt = product.title;

        const title = document.createElement('h3');
        title.textContent = product.title;

        const price = document.createElement('p');
        price.textContent = `Verð: ${product.price} kr.-`;
        price.style.display = 'block';

        // Add click event to open product details page
        box.addEventListener('click', () => {
          window.location.href = `vorusida.html?id=${product.id}`;
        });

        box.appendChild(title);
        box.appendChild(image);
        box.appendChild(price);

        productBoxes.appendChild(box);
      });

      categoryBox.appendChild(productBoxes);
      container.appendChild(categoryBox);
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const vorulisti = new Vorulisti();
  vorulisti.displayAllProducts();
});
