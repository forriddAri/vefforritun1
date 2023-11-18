
document.addEventListener("DOMContentLoaded", function(){
  loadScript("src/categories.js", categoriesSetup);
  loadScript("src/products.js", productsSetup);
});


var categoriesSetup = function(){
  let categories = new Categories();
  categories.getAllCategories();
}

var productsSetup = function(){
  let products = new Products();
  products.getAllProducts().then(productsArray => {
    products.displayProducts(productsArray);
  })
}

function loadScript(url, callback) {
  var head = document.head;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
}