var cartItems = [];


var totalPrice = 0;


function addToCart(name, price) {


  var existingItem = null;

  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === name) {
      existingItem = cartItems[i];
    }
  }

  if (existingItem) {
    
    existingItem.quantity = existingItem.quantity + 1;
  } else {
    
    var newItem = {
      name: name,
      price: price,
      quantity: 1
    };
    cartItems.push(newItem);
  }

  
  totalPrice = totalPrice + price;

  
  renderCart();
}



function removeItem(name, price) {

  
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === name) {

      if (cartItems[i].quantity > 1) {
        
        cartItems[i].quantity = cartItems[i].quantity - 1;
      } else {
        
        cartItems.splice(i, 1);
      }

      
      totalPrice = totalPrice - price;
      break;
    }
  }

  
  renderCart();
}



function clearCart() {
  cartItems = [];
  totalPrice = 0;
  renderCart();
}



function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Thank you for shopping at JustinApparel! 🎉\nYour order has been placed.");
  clearCart();
}



function renderCart() {

  
  var cartList = document.getElementById("cart-list");
  var emptyMsg = document.getElementById("empty-msg");
  var totalPriceDisplay = document.getElementById("total-price");

  
  cartList.innerHTML = "";

  
  if (cartItems.length === 0) {
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
  }

  
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    
    var listItem = document.createElement("li");

    
    listItem.innerHTML =
      "<span>" + item.name + " x" + item.quantity + "</span>" +
      "<span>₱" + (item.price * item.quantity) + "</span>" +
      "<button onclick=\"removeItem('" + item.name + "', " + item.price + ")\">Remove</button>";

    
    cartList.appendChild(listItem);
  }


  totalPriceDisplay.textContent = "₱" + totalPrice;
}
