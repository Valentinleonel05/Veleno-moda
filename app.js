// ==========================================
// VELENO MODA - Application JavaScript
// ==========================================

const products = [
  // REMERAS
  {
    id: 1, name: "Remera Oversize Negra", category: "remeras", price: 12999, salePrice: 9099, onSale: true,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Negro", hex: "#1a1a1a" }, { name: "Gris Oscuro", hex: "#3d3d3d" }, { name: "Blanco", hex: "#ffffff" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Remera oversize de algodón premium con corte relajado. Ideal para un look streetwear sofisticado. Tela suave al tacto con acabado de primera calidad."
  },
  {
    id: 2, name: "Remera Basic Blanca", category: "remeras", price: 8999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Blanco", hex: "#ffffff" }, { name: "Negro", hex: "#1a1a1a" }, { name: "Gris", hex: "#888888" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "La remera esencial que no puede faltar en tu guardarropa. Corte clásico, algodón 100% peinado."
  },
  {
    id: 3, name: "Remera Estampada Urban", category: "remeras", price: 14999, salePrice: 10499, onSale: true,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Multicolor", hex: "#c0392b" }, { name: "Negro", hex: "#1a1a1a" }],
    sizes: ["S", "M", "L", "XL"],
    description: "Remera con estampado exclusivo de diseño urbano. Tejido de alta calidad con estampa de larga duración."
  },
  {
    id: 4, name: "Remera Manga Larga Essential", category: "remeras", price: 11999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Bordo", hex: "#800020" }, { name: "Negro", hex: "#1a1a1a" }, { name: "Blanco", hex: "#ffffff" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Remera manga larga de corte regular. Perfecta para entretiempo. Algodón jersey suave con puños elásticos."
  },
  // PANTALONES
  {
    id: 5, name: "Jean Slim Fit Negro", category: "pantalones", price: 24999, salePrice: 17499, onSale: true,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Negro", hex: "#1a1a1a" }, { name: "Gris Oscuro", hex: "#333333" }],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Jean slim fit premium con elastano para mayor comodidad. Denim de alta calidad con lavado negro intenso."
  },
  {
    id: 6, name: "Jean Recto Celeste", category: "pantalones", price: 22999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Celeste", hex: "#87ceeb" }, { name: "Azul Medio", hex: "#4169e1" }],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Jean de corte recto clásico con lavado celeste. Denim robusto con ligero desgaste para un look casual perfecto."
  },
  {
    id: 7, name: "Pantalón Cargo Beige", category: "pantalones", price: 27999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Beige", hex: "#c8b88a" }, { name: "Verde Militar", hex: "#4b5320" }, { name: "Negro", hex: "#1a1a1a" }],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Pantalón cargo con bolsillos laterales funcionales. Tela resistente de algodón canvas."
  },
  // PANTALONES BAGGY
  {
    id: 8, name: "Baggy Jean Lavado", category: "baggy", price: 29999, salePrice: 20999, onSale: true,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Celeste Lavado", hex: "#a4c8e1" }, { name: "Azul Medio", hex: "#4169e1" }],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Jean baggy con lavado vintage. Corte amplio y caída relajada. El ícono del streetwear contemporáneo."
  },
  {
    id: 9, name: "Baggy Negro Streetwear", category: "baggy", price: 31999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Negro", hex: "#1a1a1a" }, { name: "Gris Carbón", hex: "#36454f" }],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Pantalón baggy negro con presillas reforzadas y bolsillos profundos. Denim grueso con caída perfecta."
  },
  {
    id: 10, name: "Baggy Cargo Militar", category: "baggy", price: 33999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Verde Militar", hex: "#4b5320" }, { name: "Beige", hex: "#c8b88a" }, { name: "Negro", hex: "#1a1a1a" }],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Baggy cargo con múltiples bolsillos funcionales. Estilo militar moderno con corte extra amplio."
  },
  // BUZOS & HOODIES
  {
    id: 11, name: "Hoodie Oversize Negro", category: "buzos", price: 34999, salePrice: 24499, onSale: true,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Negro", hex: "#1a1a1a" }, { name: "Gris Melange", hex: "#888888" }, { name: "Blanco", hex: "#f5f5f5" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Hoodie oversize de algodón frisado premium. Capucha forrada, bolsillo canguro y puños acanalados."
  },
  {
    id: 12, name: "Buzo Crewneck Gris", category: "buzos", price: 28999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Gris Melange", hex: "#888888" }, { name: "Negro", hex: "#1a1a1a" }, { name: "Crema", hex: "#f5f0e1" }],
    sizes: ["S", "M", "L", "XL"],
    description: "Buzo crewneck de algodón frisado. Corte regular con cuello redondo acanalado. Versátil y cómodo."
  },
  {
    id: 13, name: "Hoodie Zip-Up Crema", category: "buzos", price: 36999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Crema", hex: "#f5f0e1" }, { name: "Negro", hex: "#1a1a1a" }, { name: "Gris", hex: "#888888" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Hoodie con cierre completo y doble bolsillo frontal. Algodón frisado de gramaje pesado."
  },
  // CAMPERAS
  {
    id: 14, name: "Campera Bomber Negra", category: "camperas", price: 49999, salePrice: 34999, onSale: true,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Negro", hex: "#1a1a1a" }, { name: "Verde Militar", hex: "#4b5320" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Campera bomber clásica con forro satinado. Puños y cintura elastizados. Un ícono del estilo urbano."
  },
  {
    id: 15, name: "Campera Denim Vintage", category: "camperas", price: 44999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Azul Vintage", hex: "#5b7fa5" }, { name: "Negro", hex: "#1a1a1a" }],
    sizes: ["S", "M", "L", "XL"],
    description: "Campera de jean con lavado vintage. Botones metálicos originales y bolsillos con solapa."
  },
  {
    id: 16, name: "Puffer Jacket Gris", category: "camperas", price: 54999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Gris", hex: "#888888" }, { name: "Negro", hex: "#1a1a1a" }, { name: "Beige", hex: "#c8b88a" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Campera puffer con relleno sintético de alta densidad. Capucha desmontable y cierre resistente al viento."
  },
  // ZAPATILLAS
  {
    id: 17, name: "Sneakers Urban White", category: "zapatillas", price: 59999, salePrice: 41999, onSale: true,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Blanco", hex: "#ffffff" }, { name: "Negro", hex: "#1a1a1a" }],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    description: "Zapatillas urbanas de cuero sintético premium. Suela vulcanizada para mayor durabilidad."
  },
  {
    id: 18, name: "Boots Street Black", category: "zapatillas", price: 64999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Rojo/Negro", hex: "#c0392b" }, { name: "Negro", hex: "#1a1a1a" }],
    sizes: ["39", "40", "41", "42", "43", "44"],
    description: "Zapatillas deportivas de caña baja con diseño aerodinámico. Suela con tecnología de amortiguación."
  },
  {
    id: 19, name: "Running Gris/Negro", category: "zapatillas", price: 54999, salePrice: null, onSale: false,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&auto=format",
    colors: [{ name: "Gris/Negro", hex: "#555555" }, { name: "Blanco/Gris", hex: "#dddddd" }],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    description: "Zapatillas de running con tecnología de amortiguación avanzada. Upper de mesh transpirable."
  }
];

const categoryNames = {
  remeras: "Remeras",
  pantalones: "Pantalones",
  baggy: "Pantalones Baggy",
  buzos: "Buzos & Hoodies",
  camperas: "Camperas",
  zapatillas: "Zapatillas"
};

const categoryPages = {
  remeras: "remeras.html",
  pantalones: "pantalones.html",
  baggy: "baggy.html",
  buzos: "buzos.html",
  camperas: "camperas.html",
  zapatillas: "zapatillas.html"
};

// ==========================================
// CART MANAGEMENT
// ==========================================
function getCart() {
  return JSON.parse(localStorage.getItem("veleno_cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("veleno_cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, color, size, quantity = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.productId === productId && item.color === color && item.size === size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, color, size, quantity });
  }
  saveCart(cart);
  showNotification("Producto agregado al carrito");
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateQuantity(index, newQty) {
  const cart = getCart();
  if (newQty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = newQty;
  }
  saveCart(cart);
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return total;
    const price = product.onSale && product.salePrice ? product.salePrice : product.price;
    return total + price * item.quantity;
  }, 0);
}

function getCartCount() {
  return getCart().reduce((count, item) => count + item.quantity, 0);
}

function clearCart() {
  localStorage.removeItem("veleno_cart");
  updateCartBadge();
}

// ==========================================
// UI HELPERS
// ==========================================
function formatPrice(price) {
  return "$" + price.toLocaleString("es-AR");
}

function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-count");
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  });
}

function showNotification(message) {
  const existing = document.querySelector(".notification");
  if (existing) existing.remove();

  const notif = document.createElement("div");
  notif.className = "notification";
  notif.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  document.body.appendChild(notif);
  requestAnimationFrame(() => notif.classList.add("show"));
  setTimeout(() => {
    notif.classList.remove("show");
    setTimeout(() => notif.remove(), 300);
  }, 2500);
}

function createProductCard(product) {
  const price = product.onSale && product.salePrice ? product.salePrice : product.price;
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <a href="producto.html?id=${product.id}" class="product-card-link">
      <div class="product-card-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
             onerror="this.style.display='none'; this.parentElement.classList.add('img-fallback');">
        ${product.onSale ? '<span class="sale-badge">-30%</span>' : ''}
        <div class="product-card-overlay">
          <span>Ver Producto</span>
        </div>
      </div>
      <div class="product-card-info">
        <h3 class="product-card-name">${product.name}</h3>
        <div class="product-card-price">
          ${product.onSale ? `<span class="price-old">${formatPrice(product.price)}</span>` : ''}
          <span class="price-current ${product.onSale ? 'price-sale' : ''}">${formatPrice(price)}</span>
        </div>
        <div class="product-card-colors">
          ${product.colors.map(c => `<span class="color-dot" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
        </div>
      </div>
    </a>
  `;
  return card;
}

// ==========================================
// PAGE RENDERERS
// ==========================================
function renderHomePage() {
  // Render sale products only
  const saleGrid = document.querySelector(".sale-products-grid");
  if (saleGrid) {
    const saleProducts = products.filter(p => p.onSale);
    saleProducts.forEach(p => saleGrid.appendChild(createProductCard(p)));
  }
}

function renderCatalogPage() {
  const category = document.body.dataset.category;
  if (!category) return;

  const grid = document.querySelector(".catalog-grid");
  if (grid) {
    const catProducts = products.filter(p => p.category === category);
    catProducts.forEach(p => grid.appendChild(createProductCard(p)));
  }
}

function renderProductPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.querySelector(".product-detail").innerHTML = '<div class="error-msg"><h2>Producto no encontrado</h2><a href="index.html" class="btn-primary">Volver al inicio</a></div>';
    return;
  }

  const price = product.onSale && product.salePrice ? product.salePrice : product.price;

  document.title = `${product.name} | Veleno Moda`;

  // Breadcrumb
  const breadcrumb = document.querySelector(".breadcrumb");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Inicio</a>
      <span>/</span>
      <a href="${categoryPages[product.category]}">${categoryNames[product.category]}</a>
      <span>/</span>
      <span class="current">${product.name}</span>
    `;
  }

  // Main image
  const mainImg = document.getElementById("mainProductImg");
  if (mainImg) {
    mainImg.src = product.image.replace("w=400&h=500", "w=600&h=750");
    mainImg.alt = product.name;
  }

  // Product info
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productDesc").textContent = product.description;

  const priceEl = document.getElementById("productPrice");
  if (priceEl) {
    priceEl.innerHTML = product.onSale
      ? `<span class="detail-price-old">${formatPrice(product.price)}</span> <span class="detail-price-current sale">${formatPrice(price)}</span>`
      : `<span class="detail-price-current">${formatPrice(price)}</span>`;
  }

  // Colors
  const colorsEl = document.getElementById("productColors");
  if (colorsEl) {
    colorsEl.innerHTML = product.colors.map((c, i) =>
      `<button class="color-option ${i === 0 ? 'active' : ''}" data-color="${c.name}" style="background:${c.hex}" title="${c.name}"></button>`
    ).join('');

    colorsEl.querySelectorAll(".color-option").forEach(btn => {
      btn.addEventListener("click", () => {
        colorsEl.querySelectorAll(".color-option").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  // Sizes
  const sizesEl = document.getElementById("productSizes");
  if (sizesEl) {
    sizesEl.innerHTML = product.sizes.map((s, i) =>
      `<button class="size-option ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</button>`
    ).join('');

    sizesEl.querySelectorAll(".size-option").forEach(btn => {
      btn.addEventListener("click", () => {
        sizesEl.querySelectorAll(".size-option").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  // Add to cart
  const addBtn = document.getElementById("addToCartBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const color = colorsEl.querySelector(".color-option.active")?.dataset.color || product.colors[0].name;
      const size = sizesEl.querySelector(".size-option.active")?.dataset.size || product.sizes[0];
      const qty = parseInt(document.getElementById("productQty")?.value || 1);
      addToCart(product.id, color, size, qty);
    });
  }

  // Quantity buttons
  const qtyInput = document.getElementById("productQty");
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");
  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener("click", () => {
      const val = parseInt(qtyInput.value);
      if (val > 1) qtyInput.value = val - 1;
    });
    qtyPlus.addEventListener("click", () => {
      const val = parseInt(qtyInput.value);
      if (val < 10) qtyInput.value = val + 1;
    });
  }

  // Related products
  const relatedGrid = document.querySelector(".related-grid");
  if (relatedGrid) {
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    related.forEach(p => relatedGrid.appendChild(createProductCard(p)));
  }
}

function renderCartPage() {
  const cart = getCart();
  const cartItems = document.getElementById("cartItems");
  const cartSummary = document.getElementById("cartSummary");
  const emptyCart = document.getElementById("emptyCart");

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.style.display = "none";
    if (cartSummary) cartSummary.style.display = "none";
    if (emptyCart) emptyCart.style.display = "flex";
    return;
  }

  if (emptyCart) emptyCart.style.display = "none";
  cartItems.style.display = "block";
  if (cartSummary) cartSummary.style.display = "block";

  cartItems.innerHTML = cart.map((item, index) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return '';
    const price = product.onSale && product.salePrice ? product.salePrice : product.price;
    return `
      <div class="cart-item" data-index="${index}">
        <div class="cart-item-img">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="cart-item-info">
          <h3><a href="producto.html?id=${product.id}">${product.name}</a></h3>
          <p class="cart-item-variant">Color: ${item.color} | Talle: ${item.size}</p>
          <p class="cart-item-price">${formatPrice(price)}</p>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeCartQty(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="changeCartQty(${index}, 1)">+</button>
        </div>
        <div class="cart-item-total">
          ${formatPrice(price * item.quantity)}
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${index})">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
  }).join('');

  // Summary
  const subtotal = getCartTotal();
  const shipping = subtotal > 50000 ? 0 : 5999;
  const total = subtotal + shipping;

  if (cartSummary) {
    cartSummary.innerHTML = `
      <h3>Resumen del Pedido</h3>
      <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
      <div class="summary-row"><span>Envío</span><span>${shipping === 0 ? '<span class="free-shipping">Gratis</span>' : formatPrice(shipping)}</span></div>
      <div class="summary-divider"></div>
      <div class="summary-row summary-total"><span>Total</span><span>${formatPrice(total)}</span></div>
      <button class="btn-primary btn-checkout" onclick="checkout()">Finalizar Compra</button>
      <a href="index.html" class="btn-secondary">Seguir Comprando</a>
      <div class="payment-methods-summary">
        <p>Métodos de pago aceptados</p>
        <div class="pay-icons">
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-amex"></i>
          <i class="fab fa-cc-paypal"></i>
        </div>
      </div>
    `;
  }
}

function changeCartQty(index, delta) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    saveCart(cart);
    renderCartPage();
  }
}

function removeCartItem(index) {
  removeFromCart(index);
  renderCartPage();
}

function checkout() {
  showNotification("¡Gracias por tu compra! (Demo)");
  clearCart();
  setTimeout(() => {
    renderCartPage();
  }, 500);
}

// ==========================================
// NAVBAR & SEARCH
// ==========================================
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Sticky navbar
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // Mobile hamburger
  if (hamburger && navMenu) {
    // Create overlay
    let overlay = document.querySelector(".nav-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "nav-overlay";
      document.body.appendChild(overlay);
    }

    const closeMobileMenu = () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    };

    hamburger.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    overlay.addEventListener("click", closeMobileMenu);

    // Mobile accordion dropdowns
    navMenu.querySelectorAll(".nav-item").forEach(item => {
      const mega = item.querySelector(".mega-dropdown");
      if (!mega) return;
      const link = item.querySelector(".nav-link");

      // Build mobile dropdown from mega-dropdown links
      const mobileDropdown = document.createElement("div");
      mobileDropdown.className = "mobile-dropdown";
      mega.querySelectorAll("a").forEach(a => {
        const clone = a.cloneNode(true);
        clone.addEventListener("click", closeMobileMenu);
        mobileDropdown.appendChild(clone);
      });
      item.appendChild(mobileDropdown);

      // Add arrow indicator
      const arrow = document.createElement("i");
      arrow.className = "fas fa-chevron-down mobile-arrow";
      link.appendChild(arrow);

      // Toggle accordion on click (mobile only)
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          item.classList.toggle("mobile-open");
        }
      });
    });

    // Close menu on direct link click (e.g. SALE)
    navMenu.querySelectorAll(".nav-link[href]:not([href='#'])").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  // Search toggle
  const searchBtn = document.querySelector(".search-btn");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchClose = document.querySelector(".search-close");

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener("click", () => searchOverlay.classList.add("active"));
  }
  if (searchClose && searchOverlay) {
    searchClose.addEventListener("click", () => searchOverlay.classList.remove("active"));
  }
  if (searchOverlay) {
    searchOverlay.addEventListener("click", (e) => {
      if (e.target === searchOverlay) searchOverlay.classList.remove("active");
    });
  }

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  if (searchInput && searchResults) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();
      if (query.length < 2) { searchResults.innerHTML = ''; return; }
      const results = products.filter(p =>
        p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
      );
      searchResults.innerHTML = results.length
        ? results.map(p => `<a href="producto.html?id=${p.id}" class="search-result-item"><img src="${p.image}" alt="${p.name}"><div><span>${p.name}</span><span class="search-price">${formatPrice(p.onSale ? p.salePrice : p.price)}</span></div></a>`).join('')
        : '<p class="no-results">No se encontraron productos</p>';
    });
  }
}

// ==========================================
// CAROUSEL
// ==========================================
function initCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  if (slides.length === 0) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3500);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".product-card, .section-title, .category-section").forEach(el => {
    observer.observe(el);
  });
}

// ==========================================
// INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initNavbar();

  const page = document.body.dataset.page;
  if (page === "home") {
    renderHomePage();
    initScrollAnimations();
    initCarousel();
  } else if (page === "catalog") {
    renderCatalogPage();
    initScrollAnimations();
  } else if (page === "product") {
    renderProductPage();
  } else if (page === "cart") {
    renderCartPage();
  }
});
