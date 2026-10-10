const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Leather Backpack",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Portable Speaker",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80"
  }
];

let cart = [];

const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");
const cartPanel = document.getElementById("cartPanel");

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-meta">
              <span class="price">$${product.price.toFixed(2)}</span>
              <button class="add-btn" data-id="${product.id}">Add</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function addToCart(productId) {
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...selectedProduct, quantity: 1 });
  }

  updateCart();
  cartPanel.classList.add("open");
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = cart.length
    ? cart
        .map(
          (item) => `
            <div class="cart-item">
              <div class="cart-item-info">
                <span class="item-name">${item.name}</span>
                <span>${item.quantity} x $${item.price.toFixed(2)}</span>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
              </div>
            </div>
          `
        )
        .join("")
    : "<p style='color:#6b7280;'>Your cart is empty.</p>";

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = count;
  totalPrice.textContent = `$${total.toFixed(2)}`;

  document.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      addToCart(Number(event.target.dataset.id));
    });
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      removeFromCart(Number(event.target.dataset.id));
    });
  });
}

document.addEventListener("click", (event) => {
  if (event.target.matches(".add-btn")) {
    addToCart(Number(event.target.dataset.id));
  }

  if (event.target.matches(".remove-btn")) {
    removeFromCart(Number(event.target.dataset.id));
  }

  if (event.target.id === "closeCart") {
    cartPanel.classList.remove("open");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
updateCart();