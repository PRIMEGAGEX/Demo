const menuData = {
  en: {
    taps: [
      { name: "Soup IPA", style: "NEIPA • 6.0%", price: "€4.50", desc: "Hazy, juicy, tropical fruit notes. Our classic staple.", badge: "FRESH TAP" },
      { name: "Virtue & Vice", style: "West Coast IPA • 6.5%", price: "€4.80", desc: "Crisp pine, citrus rind, firm bitterness.", badge: "POPULAR" },
      { name: "Silver Peel", style: "Citrus Sour • 4.5%", price: "€4.20", desc: "Refreshing tartness with fresh lime zest.", badge: "LIMITED" }
    ],
    food: [
      { name: "Smash Burger", style: "Double Beef", price: "€9.50", desc: "Aged beef patty, cheddar, secret sauce, brioche bun.", badge: "MUST TRY" },
      { name: "Loaded Nachos", style: "Vegetarian", price: "€8.00", desc: "House chips, melted cheese, jalapenos, pico de gallo.", badge: "VEGAN OPTION" }
    ]
  },
  es: {
    taps: [
      { name: "Soup IPA", style: "NEIPA • 6.0%", price: "€4.50", desc: "Turbia, jugosa con notas a frutas tropicales. El clásico de la casa.", badge: "RECIÉN PINCHADA" },
      { name: "Virtue & Vice", style: "West Coast IPA • 6.5%", price: "€4.80", desc: "Pino fresco, piel de cítrico, amargor firme.", badge: "POPULAR" },
      { name: "Silver Peel", style: "Citrus Sour • 4.5%", price: "€4.20", desc: "Acidez refrescante con ralladura de lima fresca.", badge: "EDICIÓN LIMITADA" }
    ],
    food: [
      { name: "Smash Burger", style: "Doble Ternera", price: "€9.50", desc: "Doble carne, cheddar, salsa secreta, pan brioche.", badge: "RECOMENDADO" },
      { name: "Loaded Nachos", style: "Vegetariano", price: "€8.00", desc: "Totopos caseros, queso fundido, jalapeños, pico de gallo.", badge: "OPCIÓN VEGANA" }
    ]
  }
};

let currentLang = 'en';

function renderMenu() {
  const tapContainer = document.getElementById('tap-list');
  const foodContainer = document.getElementById('food-list');
  
  tapContainer.innerHTML = menuData[currentLang].taps.map(item => `
    <div class="item-card">
      <div class="item-header"><span>${item.name}</span><span class="item-price">${item.price}</span></div>
      <div class="item-desc"><strong>${item.style}</strong> — ${item.desc}</div>
      <div class="badges"><span class="badge ipa">${item.badge}</span></div>
    </div>
  `).join('');

  foodContainer.innerHTML = menuData[currentLang].food.map(item => `
    <div class="item-card">
      <div class="item-header"><span>${item.name}</span><span class="item-price">${item.price}</span></div>
      <div class="item-desc"><strong>${item.style}</strong> — ${item.desc}</div>
      <div class="badges"><span class="badge">${item.badge}</span></div>
    </div>
  `).join('');
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu();
}

// Initial render
renderMenu();