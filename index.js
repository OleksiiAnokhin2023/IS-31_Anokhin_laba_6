
function createProduct(obj, callback){
const Product = {
    ...obj,
    id:Date.now().toString()
};
    callback(Product);
}

function logProduct(product){
    console.log("Product created:", product);
} 
function logTotalPrice(product) {
    console.log(product.price*product.quantity)
}


function decreaseQuantity(id ){
let quantity  = document.getElementById(id);
if(quantity.value>0)
  quantity.value = parseInt(quantity.value)-1;
}
function increaseQuantity(id ){
    let quantity  = document.getElementById(id);
    quantity.value = parseInt(quantity.value)+1;
    }

function CreateObject(name,quantity, price){
return {
    name: name,
    quantity: quantity,
    price: price
};
}


function addToCart(num) {
    const quantity = parseInt(document.getElementById('quantity' + num).value);
    const name = document.getElementById('name' + num).textContent;
    const price = parseFloat(document.getElementById('price' + num).textContent);

    const productObject = CreateObject(name, quantity, price);
    
    createProduct(productObject, (product)=> {
        logProduct(product);
        logTotalPrice(product);
    });
    alert("product added");
}
