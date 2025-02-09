let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    // Add the item and its price to the cart
    cart.push({ item: item, price: price });
    totalPrice += price;
    
    // Display an alert when an item is added to the cart
    alert(`${item} added to cart!`);
    
    // Update the cart display
    updateCart();
}

function updateCart() {
    // Get the cart item list element and total price element
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear the current cart display
    cartItemsList.innerHTML = '';
    
    // Add each item in the cart to the list
    cart.forEach(cartItem => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cartItem.item} - Rs ${cartItem.price}`;
        cartItemsList.appendChild(listItem);
    });
    
    // Update the total price
    totalPriceElement.textContent = totalPrice;
}

function placeOrder() {
    // Check if the cart is empty
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some items to your cart.');
        return;
    }

    // Normally, we would send this data to a backend server to process the order
    alert(`Order placed! Total: Rs ${totalPrice}`);
    
    // Reset the cart after placing the order
    cart = [];
    totalPrice = 0;
    
    // Update the cart display to reflect the empty cart
    updateCart();
}

document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const table = document.getElementById("table").value;

    // Check if all form fields are filled out
    if (!name || !email || !phone || !date || !time || !guests || !table) {
        alert("Please fill out all fields.");
        return;
    }

    // Prepare the reservation confirmation message with the total price
    const confirmationMessage = `
        <strong>Name:</strong> ${name}<br>
        <strong>Phone:</strong> ${phone}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Date:</strong> ${date}<br>
        <strong>Reservation Time:</strong> ${time}<br>
        <strong>Number of People:</strong> ${guests}<br>
        <strong>Table:</strong> ${table}<br>
        <strong>Total Price:</strong> Rs ${totalPrice}
    `;

    // Display the confirmation message
    document.getElementById("reservation-details").innerHTML = confirmationMessage;
    document.getElementById("confirmation-message").classList.remove("hidden");

    // Optionally, reset the form after submission
    document.getElementById("reservation-form").reset();

    // Hide the confirmation message after a few seconds (Optional)
    setTimeout(function() {
        document.getElementById("confirmation-message").classList.add("hidden");
    }, 5000); // Hides the message after 5 seconds

    // Reset the cart and total price after displaying the confirmation
    cart = [];
    totalPrice = 0;
});
