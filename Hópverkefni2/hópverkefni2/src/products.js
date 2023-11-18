class Products {
  constructor() {
    this.apiUrl = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/';
  }

  async getAllProducts() {
    try {
      const response = await fetch(this.apiUrl + "products");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Products:', data);
      return data.items;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  displayProducts(products) {
    const container = document.querySelector(".nyjar-vorur");

    // Limit the displayed products to 6
    const productsToDisplay = products.slice(0, 6);

    productsToDisplay.forEach(product => {
      const box = document.createElement("div");
      box.classList.add("box");

      const image = document.createElement("img");
      image.style.maxWidth = '300px';
      image.style.maxWidth = '150px';

      image.src = product.image;
      image.alt = product.title;

      const title = document.createElement("h3");
      title.textContent = product.title;

      const price = document.createElement("p");
      price.textContent = `Price: $${product.price}`;

      //const description = document.createElement("p");
      //description.textContent = product.description;

     

      box.appendChild(title);
      box.appendChild(price);
      //box.appendChild(description);
      box.appendChild(image);

      container.appendChild(box);
    });
  }
}