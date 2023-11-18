
document.addEventListener("DOMContentLoaded", function(){
  loadScript("src/categories.js", function() {
    categoriesSetup();
  });

  
  loadScript("src/products.js", productsSetup);
});

var categoriesSetup = function(){
  let categories = new Categories();
  categories.getAllCategories();
}

var productsSetup = function(){
  console.log('productsHere');
}

function loadScript(url, callback) {
  var head = document.head;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  
  script.onload = callback;
  head.appendChild(script);
}