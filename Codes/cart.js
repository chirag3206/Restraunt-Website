// Retrieve cart from localStorage or initialize it if empty
/*let cart = JSON.parse(localStorage.getItem('cart')) || {};

// Helper function to format currency (₹)
function formatCurrency(amount) {
    return `₹${amount.toFixed(2)}`;
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    // Check if cart is empty
    if (Object.keys(cart).length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Iterate through cart items and display them
    let subtotal = 0;
    for (let itemName in cart) {
        const item = cart[itemName];
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" width="50" height="50">
            </div>
            <div>${item.name}</div>
            <div>₹${item.price}</div>
            <div>
                <button onclick="updateCartItem('${itemName}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartItem('${itemName}', 1)">+</button>
            </div>
            <div>₹${item.price * item.quantity}</div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
        subtotal += item.price * item.quantity;
    }

    // Update subtotal and total
    const tax = subtotal * 0.18; // 18% tax
    const total = subtotal + tax;

    document.querySelector('.summary p span').textContent = formatCurrency(subtotal);
    document.querySelector('.summary p:nth-of-type(2) span').textContent = formatCurrency(tax);
    document.querySelector('.summary h3 span').textContent = formatCurrency(total);
}
/*function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    // Check if cart is empty
    if (Object.keys(cart).length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Iterate through cart items and display them
    let subtotal = 0;
    for (let itemName in cart) {
        const item = cart[itemName];
        
        // Ensure that item properties are defined
        if (!item.name || !item.image) {
            console.error(`Item data is missing for: ${itemName}`);
            continue; // Skip items with missing data
        }

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" width="50" height="50">
            </div>
            <div>${item.name}</div>
            <div>₹${item.price}</div>
            <div>
                <button onclick="updateCartItem('${itemName}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartItem('${itemName}', 1)">+</button>
            </div>
            <div>₹${item.price * item.quantity}</div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
        subtotal += item.price * item.quantity;
    }

    // Update subtotal and total
    const tax = subtotal * 0.18; // 18% tax
    const total = subtotal + tax;

    document.querySelector('.summary p span').textContent = formatCurrency(subtotal);
    document.querySelector('.summary p:nth-of-type(2) span').textContent = formatCurrency(tax);
    document.querySelector('.summary h3 span').textContent = formatCurrency(total);
}
*/

// Function to update cart item quantity
/*function updateCartItem(itemName, change) {
    if (!cart[itemName]) {
        return;
    }

    cart[itemName].quantity += change;

    if (cart[itemName].quantity <= 0) {
        delete cart[itemName]; // Remove item if quantity is 0
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    displayCartItems(); // Re-render cart items
}

// Function to show payment options
function showPaymentOptions() {
    // Ensure the user has entered a valid address
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact-number').value;
    const address = document.getElementById('address').value;

    if (!name || !contact || !address) {
        alert('Please fill in your name, contact number, and address!');
        return;
    }

    // Show the payment options section
    document.getElementById('payment-options').style.display = 'block';
}

// Function to handle the order placement with selected payment method
function placeOrder(paymentMethod) {
    // Get delivery details
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact-number').value;
    const address = document.getElementById('address').value;

    // Simulate placing the order (you can replace this with actual backend code)
    alert(`Order placed successfully!\nName: ${name}\nContact: ${contact}\nAddress: ${address}\nPayment Method: ${paymentMethod}`);

    // Clear the cart after successful order
    localStorage.removeItem('cart');
    cart = {}; // Reset cart object
    displayCartItems(); // Re-render cart (now empty)
}

// Initial load: Display cart items
displayCartItems();
*/
let cart = JSON.parse(localStorage.getItem('cart')) || {};

// Helper function to format currency (₹)
function formatCurrency(amount) {
    return `₹${amount.toFixed(2)}`;
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    // Check if cart is empty
    if (Object.keys(cart).length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Iterate through cart items and display them
    let subtotal = 0;
    for (let itemName in cart) {
        const item = cart[itemName];
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" width="50" height="50">
            </div>
            <div>${item.name}</div>
            <div>₹${item.price}</div>
            <div>
                <button onclick="updateCartItem('${itemName}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartItem('${itemName}', 1)">+</button>
            </div>
            <div>₹${item.price * item.quantity}</div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
        subtotal += item.price * item.quantity;
    }

    // Update subtotal and total
    const tax = subtotal * 0.18; // 18% tax
    const total = subtotal + tax;

    document.querySelector('.summary p span').textContent = formatCurrency(subtotal);
    document.querySelector('.summary p:nth-of-type(2) span').textContent = formatCurrency(tax);
    document.querySelector('.summary h3 span').textContent = formatCurrency(total);
}

function updateCartItem(itemName, change) {
    if (!cart[itemName]) {
        return;
    }

    cart[itemName].quantity += change;

    if (cart[itemName].quantity <= 0) {
        delete cart[itemName]; // Remove item if quantity is 0
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    displayCartItems(); // Re-render cart items
}

// Function to show payment options
function showPaymentOptions() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact-number').value;
    const address = document.getElementById('address').value;

    if (!name || !contact || !address) {
        alert('Please fill in your name, contact number, and address!');
        return;
    }

    document.getElementById('payment-options').style.display = 'block';
}

// Function to handle the order placement with selected payment method
function placeOrder(paymentMethod) {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact-number').value;
    const address = document.getElementById('address').value;

    alert(`Order placed successfully!\nName: ${name}\nContact: ${contact}\nAddress: ${address}\nPayment Method: ${paymentMethod}`);

    localStorage.removeItem('cart');
    cart = {}; // Reset cart object
    displayCartItems(); // Re-render cart (now empty)
    document.getElementById('payment-options').style.display = 'none';
}

// Initial load: Display cart items
displayCartItems();

