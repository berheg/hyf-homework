console.log('Script loaded');

console.log(getAvailableProducts());
const products = getAvailableProducts();
console.log(products) 
function renderProducts(products){
    const ul = document.querySelector("section.products > ul");
    
    for( let product of products){
        const listName = document.createElement('li');
        listName.innerHTML = product.name + '|';
        const listPrice = document.createElement('li');
        listPrice.innerHTML = product.price + '|';
        const listRating = document.createElement('li');
        listRating.innerHTML = product.rating + '|'; 
        ul.appendChild(listName); 
        ul.appendChild(listPrice); 
        ul.appendChild(listRating); 
        listShipsTo = document.createElement('li');
        listShipsTo.innerHTML = product.shipsTo;     
        //const ul = document.('ul')       
        ul.appendChild(listShipsTo);
    };
};
/*function createList(parent) {
    const ul = document.createElement('ul')
    const keys = Object.keys(parent);
    for (const key of keys) {
        const li = document.createElement('li');
        if(Array.isArray(parent[key])){
            li.appendChild(createList(parent[key]));
        } else {
            li.innerHTML = parent[key];
            li.setAttribute('class', key)
        }
        ul.appendChild(li);

    }
    return ul;
}*/
    renderProducts(products);