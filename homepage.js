document.addEventListener("DOMContentLoaded", () => {
  // Example: Load product cards dynamically

  const productContainer = document.getElementById("products");
  products.forEach((product) => {
    const productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      </div>`;
    productContainer.innerHTML += productCard;
  });
});

const productGrid = document.querySelector('.product-grid');

function scrollLeft() {
    productGrid.scrollBy({
        top: 0,
        left : -200, // Adjust the value to change the scroll distance
        behavior: 'smooth'
    });
}

function scrollRight() {
    productGrid.scrollBy({
        top: 0,
        left: 200, // Adjust the value to change the scroll distance
        behavior: 'smooth'
    });

}
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-100%";
  } else {
    sidebar.style.left = "0px";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.addEventListener('click', toggleSidebar);
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');
  
  buttons.forEach(button => {
      button.addEventListener('click', (event) => {
          const productId = event.target.dataset.productId;
          addToCart(productId);
      });
  });
});

function checkProduct(productName, productPrice) {
  // Set the product details in the modal
  document.getElementById('modal-title').innerText = productName;
  document.getElementById('modal-description').innerText = `Price: ${productPrice}`;
  
  // Show the modal
  document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
  // Hide the modal
  document.getElementById('product-modal').style.display = 'none';
} 

let totalPrice = 0;

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = parseFloat(button.getAttribute('data-product-price'));

            addToCart(productId, productName, productPrice);
        });
    });
});

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    totalPrice += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}

// Initialize an empty cart
let cart = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear the current cart items
    cartItemsContainer.innerHTML = '';
    
    // Calculate total price
    let totalPrice = 0;

    // Loop through the cart and display items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price;
    });

    // Update total price display
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to handle adding items to the cart
function addToCart(id, name, price) {
  // Logic to add the product to the cart
  const cartItem = { id, name, price };
  // Assuming cart is an array
  cart.push(cartItem);
  updateCartUI(); // Function to update the cart display
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
      const productId = this.dataset.productId; // Assuming data attribute for product ID
      const productName = this.dataset.productName; // Assuming data attribute for product name
      const productPrice = this.dataset.productPrice; // Assuming data attribute for product price
      addToCart(productId, productName, productPrice);
  });
});


document.getElementById('registration-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/submit_registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.text();
            alert(result); // Show success message
            // Optionally redirect to another page
            // window.location.href = '/login';
        } else {
            const error = await response.text();
            alert('Error: ' + error); // Show error message
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
});
