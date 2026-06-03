/**
 * LORA PARFUMS - System Core Business Logic
 */

// Strict Financial Valuation Mechanics
const EXCHANGE_RATE = 50.00; 

// Initial High-Fidelity Catalog Seeds
const INITIAL_PRODUCTS = [
    {
        id: "LORA-001",
        name: "Élixir d'Or",
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
        price: 245.00,
        description: "An opulent composition opening with luminous Damask Rose and rare Indonesian Oud, dissolving beautifully into an ambient background of golden amber warmth and vanilla absolute.",
        category: "Women"
    },
    {
        id: "LORA-002",
        name: "Nuit Impériale",
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
        price: 260.00,
        description: "A bold signature statement designed for the modern gentleman. Crisp Calabrian Bergamot intertwines elegantly with Haitian Vetiver, dark leather accents, and natural wood resins.",
        category: "Men"
    },
    {
        id: "LORA-003",
        name: "Opus Magnolia",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
        price: 210.00,
        description: "A fresh floral landscape bringing sweet majestic Magnolias to life alongside fresh sliced green apples, white musk formulations, and breezy Mediterranean citrus notes.",
        category: "Women"
    }
];

// Structural Safe Initialization
function initApp() {
    if (!localStorage.getItem('lora_products')) {
        localStorage.setItem('lora_products', JSON.stringify(INITIAL_PRODUCTS));
    }
    if (!localStorage.getItem('lora_cart')) {
        localStorage.setItem('lora_cart', JSON.stringify([]));
    }
}

function getProducts() {
    return JSON.parse(localStorage.getItem('lora_products')) || [];
}

function getCart() {
    return JSON.parse(localStorage.getItem('lora_cart')) || [];
}

// Global Luxury Cards Factory Wrapper
function createProductCard(product) {
    const egpPrice = (parseFloat(product.price) * EXCHANGE_RATE).toFixed(0);
    return `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <div class="product-card-img-wrapper">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <span class="category-tag">Maison ${product.category}</span>
            <h3>${product.name}</h3>
            <span
