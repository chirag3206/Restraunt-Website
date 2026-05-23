// confirmation.js

/*document.addEventListener('DOMContentLoaded', function () {
    const orderNumber = localStorage.getItem('orderNumber');
    const dinein = localStorage.getItem('dinein') === 'true'; // Check if it's a dine-in order
    const orderTime = localStorage.getItem('orderTime');
    
    // Generate a table number between 1 and 60 if it's a dine-in order
    let tableNumber = null;
    if (dinein) {
        tableNumber = Math.floor(Math.random() * 60) + 1; // Random number between 1 and 60
        localStorage.setItem('tableNumber', tableNumber); // Save the table number to localStorage
    }

    // Display order number and order time
    document.getElementById('order-number').textContent = orderNumber;
    document.getElementById('order-time').textContent = orderTime;

    // Display table number if it's a dine-in order
    if (dinein) {
        document.getElementById('table-number-info').style.display = 'block';
        document.getElementById('table-number').textContent = tableNumber;
    } else {
        // Hide table number if it's not dine-in
        document.getElementById('table-number-info').style.display = 'none';
    }
});
*/
// confirmation.js

function loadOrderDetails() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const orderNumber = localStorage.getItem('orderNumber') || generateOrderNumber();
    const orderTime = new Date().toLocaleTimeString();
    const paymentMethod = localStorage.getItem('paymentMethod') || "Not specified";
    const subtotal = parseFloat(localStorage.getItem('subtotal')) || 0;
    const tax = parseFloat(localStorage.getItem('tax')) || 0;
    const total = parseFloat(localStorage.getItem('total')) || 0;

    document.getElementById('order-number').textContent = orderNumber;
    document.getElementById('order-time').textContent = orderTime;

    const orderSummaryContainer = document.querySelector('.order-summary');
    for (let itemName in cart) {
        const item = cart[itemName];
        orderSummaryContainer.innerHTML += `<p>${item.name} x ${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}</p>`;
    }

    orderSummaryContainer.innerHTML += `
        <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
        <p>Tax (18%): ₹${tax.toFixed(2)}</p>
        <p>Total: ₹${total.toFixed(2)}</p>
        <p>Payment Method: ${paymentMethod}</p>
    `;

    clearOrderData();
}

function generateOrderNumber() {
    const number = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem('orderNumber', number);
    return number;
}

function clearOrderData() {
    ['cart', 'subtotal', 'tax', 'total', 'paymentMethod', 'orderNumber'].forEach(item => localStorage.removeItem(item));
}

document.addEventListener('DOMContentLoaded', loadOrderDetails);
