console.log('Script loaded');

console.log(getAvailableProducts());
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

// creat list of product object with attributies name, price, rating and shipsTo and renders 
function renderProducts (productList){
    const ul = document.querySelector("section.products > ul");
    for (const product of productList)  {
        const li = document.createElement("li");
        li.appendChild(creatListsInsideUl(product)) ;
        ul.appendChild(li);
    }
};
const input = document.querySelector('input');
const availableProducts = getAvailableProducts();
input.addEventListener('keyup',function(){    
    const productsToRender = availableProducts.filter(function(product){
        if(input.value === product.name)
        return true;
    }  );
    //`${input.value}`
    renderProducts(productsToRender);
});
