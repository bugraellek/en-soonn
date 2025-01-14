const productForm = document.getElementById('productForm');
const addToCartBtn = document.getElementById('addToCartBtn');
const cart = document.getElementById('cart');
const message = document.getElementById('message');

addToCartBtn.addEventListener('click', () => {
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;

    if(productName==='' || productQuantity ===''){
        message.textContent = 'Lütfen gerekli alanı doldurunuz.';
        message.className='error';
    }
    else{
        const listItem = document.createElement('li');
        listItem.textContent = productName + ' ' + productQuantity;
        cart.appendChild(listItem);

        message.textContent = 'Ürün sepete eklendi';
        message.className = 'success';
        productForm.reset();
    }
});