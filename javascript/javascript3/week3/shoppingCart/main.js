const addBtn = document.querySelector('button.addBtn');
const searchBtn = document.querySelector('button.searchBtn');
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }    
  } 
  let products = []
  class ShoppingCart {
    constructor(products) {
      this.products = products;
    }
  
    addProduct(product) {
      // Implement functionality here
      this.products.push(product);
    }
  
    removeProduct(product) {
      // Implement functionality here
      const removeIndex = this.products.indexOf(product);
      this.products.splice(removeIndex, 1);
    }
  
    searchProduct(productName) {
      // Implement functionality here
      return this.products.filter((product) => {
        return product.name === productName.name;
      })
    }  
    getTotal() {
      // Implement functionality here
      let total = 0;
    for (let product of this.products) {
      const priceProduct = parseInt(product.price);
      total += priceProduct;
    }
    return total;
    }    
    renderProducts() {
      
      creatUlShippingCart(shoppingCart.products);
      /*function createList(parent, data) {
        const list = document.createElement("li");
        list.innerHTML = data;
        parent.appendChild(list);
        return list;
      }
  
      const productsList = document.querySelector("ul.productsList");
      this.products.forEach(product => {
        productsList.appendChild(createList(productsList, product.name));
      });*/
    }
  
    getUser() {
      // Implement functionality here
      return fetch(`https://jsonplaceholder.typicode.com/users/1`)
      .then(response => response.json())
    }
  } 
   
  const flatscreen = new Product("flat-screen", 5000);
  const flatscreen2 = new Product("flat-screen2", 5000);
  const hpLaptop = new Product("hp-Laptop", 4000);
  
  const shoppingCart = new ShoppingCart([]);
  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(flatscreen2); 
  shoppingCart.addProduct(hpLaptop);
  console.log(shoppingCart.products); 
   
  shoppingCart.renderProducts();
  addBtn.addEventListener('click', addProduct);
  searchBtn.addEventListener('click', addShoppingCart);
  function addProduct(){
    const inputProduct = document.querySelector('input#product');
    if(inputProduct.innerHTML = ''){
      alert("Please fill all three input")
    }
  }
  function addShoppingCart(product){
    const ul = document.querySelector("section.cart > ul");    
        const li = document.createElement("li");
        li.appendChild(creatListsInsideUl(product)) ;
        ul.appendChild(li);
    
  }
  function creatUlShippingCart(productList){
    const ul = document.querySelector("section.cart > ul");
    for (const product of productList)  {
        const li = document.createElement("li");
        li.innerHTML = product.name               
        ul.appendChild(li);
    }
};