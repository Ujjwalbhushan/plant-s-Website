// Add event listeners to the "Add to Cart" buttons
var addToCartButtons = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Initialize cart items and total price
var cartItems = [];
var totalPrice = 0;

// Function to handle adding a product to the cart
function addToCart(event) {
  var product = event.target.parentElement;
  var title = product.querySelector('h3').textContent;
  var price = parseFloat(product.querySelector('p').textContent.slice(1));
  
  // Create a new cart item object
  var cartItem = {
    title: title,
    price: price
  };
  
  // Add the item to the cart
  cartItems.push(cartItem);

  // Update the total price
  totalPrice += price;

   // Update the cart count
   var cartCountElement = document.getElementById('cart-count');
   cartCountElement.textContent = cartItems.length;

  // Update the cart display
  displayCart();
}

// Function to display the cart
function displayCart() {
    var cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
  
    for (var i = 0; i < cartItems.length; i++) {
      var cartItem = cartItems[i];
  
      var li = document.createElement('li');
      li.textContent = cartItem.title + ' - $' + cartItem.price.toFixed(2);
      cartItemsList.appendChild(li);
    }
  
    var totalElement = document.getElementById('total');
    totalElement.textContent = 'Total: $' + totalPrice.toFixed(2);
  }
  

  var cartButton = document.getElementById('cart-button');
var cart = document.getElementById('cart');


var cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartItems.length;

cartButton.addEventListener('click', function() {
  cart.classList.toggle('hidden');
});
