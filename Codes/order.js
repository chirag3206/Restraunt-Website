/*// Fetch the JSON data from the menuData.json file
fetch('menuData.json')
  .then(response => response.json())
  .then(data => {
    // Store the menu data
    const menuData = data.menu;

    // Function to display menu items based on selected category
    function displayItemsByCategory(category) {
      const menuContainer = document.getElementById('menuContainer'); // Reference to menu section
      menuContainer.innerHTML = ''; // Clear existing content

      const selectedCategory = menuData.find(cat => cat.category === category);

      if (selectedCategory) {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = selectedCategory.category;
        menuContainer.appendChild(categoryTitle);

        selectedCategory.items.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.classList.add('menu-item');

          menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-details">
              <h3>${item.name}</h3>
              <p class="rating">${item.rating} (${item.votes} votes)</p>
              <p class="price">₹${item.price}</p>
              <p class="description">${item.description}</p>
              <div class="item-quantity">
                <button onclick="updateCartItem('${item.name}', ${item.price}, -1, '${item.image}')">-</button>
                <span id="${item.name}-qty">0</span>
                <button onclick="updateCartItem('${item.name}', ${item.price}, 1, '${item.image}')">+</button>
              </div>
            </div>
          `;
          menuContainer.appendChild(menuItem);
        });
      }
    }

    // Initial display (for the first category)
    displayItemsByCategory('Breakfast Special');

    // Sidebar category click event listener
    document.querySelectorAll('.sidebar li').forEach(li => {
      li.addEventListener('click', () => {
        document.querySelectorAll('.sidebar li').forEach(el => el.classList.remove('active'));
        li.classList.add('active');
        displayItemsByCategory(li.textContent.trim());
      });
    });

    // Search functionality
    document.getElementById('search-bar').addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const menuContainer = document.getElementById('menuContainer');
      menuContainer.innerHTML = ''; // Clear current items

      menuData.forEach(category => {
        category.items
          .filter(item => item.name.toLowerCase().includes(query))
          .forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p class="rating">${item.rating} (${item.votes} votes)</p>
                <p class="price">₹${item.price}</p>
                <p class="description">${item.description}</p>
                <div class="item-quantity">
                  <button onclick="updateCartItem('${item.name}', ${item.price}, -1, '${item.image}')">-</button>
                  <span id="${item.name}-qty">0</span>
                  <button onclick="updateCartItem('${item.name}', ${item.price}, 1, '${item.image}')">+</button>
                </div>
              </div>
            `;
            menuContainer.appendChild(menuItem);
          });
      });
    });
  })
  .catch(error => {
    console.error("Error loading menu data:", error);
  });

// Function to update the cart (example)
function updateCartItem(itemName, price, change, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  if (!cart[itemName]) {
    cart[itemName] = { name: itemName, price: price, quantity: 0, image: image };
  }
  cart[itemName].quantity += change;

  if (cart[itemName].quantity <= 0) {
    delete cart[itemName];
  }

  console.log('Updated cart:', cart);
  document.getElementById(`${itemName}-qty`).textContent = cart[itemName]?.quantity || 0;
  localStorage.setItem('cart', JSON.stringify(cart));
}

*/


/*
const menuData = {
  "menu": [
      {
          "category": "Breakfast Special",
          "items": [
              { "name": "Choley Bhature", "price": 200, "rating": "★★★★★", "votes": 90, "description": "A spicy, tangy combination of chickpeas and deep-fried bread.", "image": "IMAGES/CholeBhature.jpg" },
              { "name": "Puri Sabji With Halwa", "price": 155, "rating": "★★★★★", "votes": 80, "description": "Fluffy puris served with savory potato sabji and sweet halwa.", "image": "puri-sabji.jpg" }
              // Additional items can go here
          ]
      }
  ]
};

let cart = JSON.parse(localStorage.getItem('cart')) || {};

function updateCartItem(itemName, price, change) {
  if (!cart[itemName]) {
      cart[itemName] = { price: price, quantity: 0 };
  }
  cart[itemName].quantity += change;

  if (cart[itemName].quantity <= 0) {
      delete cart[itemName];
  }

  document.getElementById(`${itemName}-qty`).textContent = cart[itemName]?.quantity || 0;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function displayItemsByCategory(category) {
  const menuContainer = document.querySelector('.menu-section');
  menuContainer.innerHTML = '';

  const selectedCategory = menuData.menu.find(cat => cat.category === category);

  if (selectedCategory) {
      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = selectedCategory.category;
      menuContainer.appendChild(categoryTitle);

      selectedCategory.items.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.classList.add('menu-item');

          menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div class="menu-item-details">
                  <h3>${item.name}</h3>
                  <p class="rating">${item.rating} ${item.votes} votes</p>
                  <p class="price">₹${item.price}</p>
                  <p class="description">${item.description}</p>
                  <div class="item-quantity">
                      <button onclick="updateCartItem('${item.name}', ${item.price}, -1)">-</button>
                      <span id="${item.name}-qty">${cart[item.name]?.quantity || 0}</span>
                      <button onclick="updateCartItem('${item.name}', ${item.price}, 1)">+</button>
                  </div>
              </div>
          `;
          menuContainer.appendChild(menuItem);
      });
  }
}

document.querySelectorAll('.sidebar li').forEach(li => {
  li.addEventListener('click', () => {
      document.querySelectorAll('.sidebar li').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      displayItemsByCategory(li.textContent.trim());
  });
});

displayItemsByCategory("Breakfast Special");*/

// Fetch the JSON data from the menuData.json file
fetch('menuData.json')
  .then(response => response.json())
  .then(data => {
    // Store the menu data
    const menuData = data.menu;

    // Function to display menu items based on selected category
    function displayItemsByCategory(category) {
      const menuContainer = document.getElementById('menuContainer'); // Reference to menu section
      menuContainer.innerHTML = ''; // Clear existing content

      const selectedCategory = menuData.find(cat => cat.category === category);

      if (selectedCategory) {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = selectedCategory.category;
        menuContainer.appendChild(categoryTitle);

        selectedCategory.items.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.classList.add('menu-item');

          menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-details">
              <h3>${item.name}</h3>
              <p class="rating">${item.rating} (${item.votes} votes)</p>
              <p class="price">₹${item.price}</p>
              <p class="description">${item.description}</p>
              <div class="item-quantity">
                <button onclick="updateCartItem('${item.name}', ${item.price}, -1, '${item.image}')">-</button>
                <span id="${item.name}-qty">0</span>
                <button onclick="updateCartItem('${item.name}', ${item.price}, 1, '${item.image}')">+</button>
              </div>
            </div>
          `;
          menuContainer.appendChild(menuItem);
        });
      }
    }

    // Initial display (for the first category)
    displayItemsByCategory('Breakfast Special');

    // Sidebar category click event listener
    document.querySelectorAll('.sidebar li').forEach(li => {
      li.addEventListener('click', () => {
        document.querySelectorAll('.sidebar li').forEach(el => el.classList.remove('active'));
        li.classList.add('active');
        displayItemsByCategory(li.textContent.trim());
      });
    });

    // Search functionality
    document.getElementById('search-bar').addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const menuContainer = document.getElementById('menuContainer');
      menuContainer.innerHTML = ''; // Clear current items

      menuData.forEach(category => {
        category.items
          .filter(item => item.name.toLowerCase().includes(query))
          .forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div class="menu-item-details">
                <h3>${item.name}</h3>
                <p class="rating">${item.rating} (${item.votes} votes)</p>
                <p class="price">₹${item.price}</p>
                <p class="description">${item.description}</p>
                <div class="item-quantity">
                  <button onclick="updateCartItem('${item.name}', ${item.price}, -1, '${item.image}')">-</button>
                  <span id="${item.name}-qty">0</span>
                  <button onclick="updateCartItem('${item.name}', ${item.price}, 1, '${item.image}')">+</button>
                </div>
              </div>
            `;
            menuContainer.appendChild(menuItem);
          });
      });
    });
  })
  .catch(error => {
    console.error("Error loading menu data:", error);
  });

// Function to update the cart
function updateCartItem(itemName, price, change, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  
  if (!cart[itemName]) {
    cart[itemName] = { name: itemName, price: price, quantity: 0, image: image };
  }
  
  cart[itemName].quantity += change;

  if (cart[itemName].quantity <= 0) {
    delete cart[itemName];
  }

  // Update quantity display on the order page
  document.getElementById(`${itemName}-qty`).textContent = cart[itemName]?.quantity || 0;

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

