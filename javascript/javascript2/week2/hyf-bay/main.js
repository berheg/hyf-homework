console.log('Script loaded');

const products = getAvailableProducts();
//forming element with the className
function creatElementWithClassName(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = text;
    return element;
};

// creat list inside ul
function creatListsInsideUl(product) {
    const ul = document.createElement("ul");
        ul.appendChild(creatElementWithClassName('li', 'name', product.name)); 
        ul.appendChild(creatElementWithClassName('li', 'price', product.price));
        ul.appendChild(creatElementWithClassName('li', 'rating', product.rating));
        ul.appendChild(creatUlShipping(product.shipsTo));
     return ul ;     
};
// creat a ul for shipTo and creat lists shipsTo
function creatUlShipping(shipsTo) {
    const ul = document.createElement("ul");
        for (const item of shipsTo ){
            ul.appendChild(creatElementWithClassName('li', ' ', item));    
        }
    return ul;    
};
function creatUlShippingCart(productList){
    const ul = document.querySelector("section.cart > ul");
    for (const product of productList)  {
        const li = document.createElement("li");
        li.appendChild(creatListsInsideUl(product)) ;
        ul.appendChild(li);
    }
};

// creat list of product object with attributies name, price, rating and shipsTo and renders 
function renderProducts (productList){
    
    productList.sort();
    let total = 0;
    const ul = document.querySelector("section.products > ul");
    const span = document.createElement('span.total'); 
    for (const product of productList)  {       
        
        const li = document.createElement("li");       
        
        li.appendChild(creatListsInsideUl(product)) ; 
        const btn = document.createElement('button');
        const cancelBtn = document.createElement('button')
        
        span.innerHTML = total;   
        ul.appendChild(li);
        ul.appendChild(btn);
        
        btn.innerHTML = 'Add to Cart'; 
        cancelBtn.innerHTML = 'Delet'
        const cart = document.querySelector('section.cart > ul');
        const listCart = document.createElement('li');
        const divCart = document.querySelector('div.total')
        btn.addEventListener('click',function(){
            
            clearList(listCart);
            total += product.price;
            listCart.innerHTML = `
                <li>
                    <div class="name">${product.name}</div>
                    <div class="price">${product.price}</div>
                </li>
            `;
            listCart.appendChild(cancelBtn);
            span.innerHTML = total;
            divCart.appendChild(span);
            cart.appendChild(listCart);         
                          
        });
        cancelBtn.addEventListener('click',function(e){
            total -= product.price; 
            span.innerHTML = total;           
            clearList(listCart);
            this.remove(li.childNodes);
            this.remove(ul.childNodes);
        })          
        
    }
};
function clearList(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
const availableProducts = getAvailableProducts();  
const input = document.querySelector('input');
//const shipToDiv = document.querySelector('.country > div');
//const shipToSelect = document.querySelector('.shipsTo > select');
const sortOption = {
    Name: 'name',
    Expensive: 'expensive',
    Cheap: 'cheap'
};
input.addEventListener('input',function(){  
    const productsToRender = availableProducts.filter(product =>{
                productName =  product.name.toLowerCase();
                inptutValue =  input.value.toLowerCase();     
                return productName ===inptutValue;       
            //if(shipToSelect.value === product.shipsTo.c )        
    });        
renderProducts(productsToRender);
});
renderProducts(products);