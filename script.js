// ===== HAMBURGER MENU FUNCTIONALITY =====
/**
 * Mobile Navigation Menu Toggle
 * Handles hamburger menu open/close functionality for mobile devices
 */
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navigationMenu = document.getElementById('navigationMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle hamburger menu on click
    if (hamburgerMenu && navigationMenu) {
        hamburgerMenu.addEventListener('click', function() {
            // Toggle active classes for animation
            hamburgerMenu.classList.toggle('active');
            navigationMenu.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
            hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on navigation links (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    hamburgerMenu.classList.remove('active');
                    navigationMenu.classList.remove('active');
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('menu-open');
                }
            });
        });
        
        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                const isClickInsideNav = navigationMenu.contains(event.target);
                const isClickOnHamburger = hamburgerMenu.contains(event.target);
                
                if (!isClickInsideNav && !isClickOnHamburger && navigationMenu.classList.contains('active')) {
                    hamburgerMenu.classList.remove('active');
                    navigationMenu.classList.remove('active');
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('menu-open');
                }
            }
        });
        
        // Handle window resize - reset menu state on desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburgerMenu.classList.remove('active');
                navigationMenu.classList.remove('active');
                hamburgerMenu.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
    }
});

// ===== PRODUCT CATEGORIES AND DATA =====
// Product categories
const categories = [
    { id: 'all', name: 'All Products', icon: 'fas fa-th-large' },
    { id: 'electronics', name: 'Electronics', icon: 'fas fa-laptop' },
    { id: 'mobile', name: 'Mobile & Tablets', icon: 'fas fa-mobile-alt' },
    { id: 'fashion', name: 'Fashion', icon: 'fas fa-tshirt' },
    { id: 'appliances', name: 'Home Appliances', icon: 'fas fa-blender' },
    { id: 'beauty', name: 'Beauty & Personal Care', icon: 'fas fa-spa' },
    { id: 'home', name: 'Home & Kitchen', icon: 'fas fa-home' },
    { id: 'health', name: 'Health & Fitness', icon: 'fas fa-heartbeat' },
    { id: 'toys', name: 'Toys & Games', icon: 'fas fa-gamepad' },
    { id: 'books', name: 'Books & Media', icon: 'fas fa-book' },
    { id: 'sports', name: 'Sports & Outdoors', icon: 'fas fa-running' },
    { id: 'gaming', name: 'Gaming', icon: 'fas fa-gamepad' },
    { id: 'accessories', name: 'Accessories', icon: 'fas fa-plug' }
];

// Sample product data with Indian Rupees and detailed information
const products = [
    {
        id: 1,
        name: "Sony WH-CH720N Wireless Headphones",
        description: "High-quality wireless headphones with active noise cancellation",
        price: 8999,
        originalPrice: 12999,
        image: "images/sonyHeadphone.jpg",
        category: ["electronics"],
        brand: "Sony",
        rating: 4.5,
        reviews: 1250,
        inStock: true,
        specifications: {
            "Battery Life": "35 hours with ANC off",
            "Connectivity": "Bluetooth 5.2, 3.5mm jack",
            "Driver Size": "30mm",
            "Weight": "192g",
            "Charging Time": "3 hours",
            "Frequency Response": "7Hz - 20kHz"
        },
        highlights: [
            "Active Noise Cancellation",
            "35-hour battery life",
            "Quick Charge (3 min = 1 hour playback)",
            "Multipoint Bluetooth connection",
            "Voice assistant compatible"
        ],
        description_full: "Experience premium sound quality with Sony's WH-CH720N wireless headphones. Featuring advanced noise cancellation technology, these headphones deliver crystal-clear audio while blocking out unwanted ambient noise. Perfect for music lovers, commuters, and professionals."
    },
    {
        id: 2,
        name: "Apple Watch Series 9 GPS",
        description: "Advanced smartwatch with health monitoring and fitness tracking",
        price: 41900,
        originalPrice: 45900,
        image: "images/Apple Watch Series 9 GPS.jpg",
        category: ["electronics", "health"],
        brand: "Apple",
        rating: 4.8,
        reviews: 2100,
        inStock: true,
        specifications: {
            "Display": "45mm Retina LTPO OLED",
            "Processor": "S9 SiP with 64-bit dual-core",
            "Storage": "64GB",
            "Battery Life": "Up to 18 hours",
            "Water Resistance": "50 meters",
            "Connectivity": "Wi-Fi, Bluetooth 5.3"
        },
        highlights: [
            "Advanced health monitoring",
            "ECG and Blood Oxygen apps",
            "Crash Detection",
            "Always-On Retina display",
            "Carbon neutral"
        ],
        description_full: "The most advanced Apple Watch yet. With powerful health features, innovative safety capabilities, and the brightest Apple Watch display ever, it's the ultimate device for a healthy life."
    },
    {
        id: 3,
        name: "Lenovo ThinkPad Laptop Backpack",
        description: "Professional laptop backpack with multiple compartments and water resistance",
        price: 2499,
        originalPrice: 3499,
        image: "images/Laptop Backpack.webp",
        category: ["accessories"],
        brand: "Lenovo",
        rating: 4.3,
        reviews: 850,
        inStock: true,
        specifications: {
            "Laptop Compatibility": "Up to 15.6 inches",
            "Material": "Water-resistant polyester",
            "Dimensions": "45 x 32 x 18 cm",
            "Weight": "0.8 kg",
            "Compartments": "Multiple organized pockets",
            "Warranty": "1 year"
        },
        highlights: [
            "Water-resistant material",
            "Fits laptops up to 15.6\"",
            "Multiple organized compartments",
            "Comfortable padded straps",
            "Professional design"
        ],
        description_full: "Designed for professionals and students, this ThinkPad backpack offers superior protection for your laptop and accessories. With water-resistant material and thoughtful organization, it's perfect for daily commutes and travel."
    },
    {
        id: 4,
        name: "JBL Flip 6 Bluetooth Speaker",
        description: "Portable waterproof Bluetooth speaker with powerful sound",
        price: 7999,
        originalPrice: 9999,
        image: "images/JBL Bluetooth Speaker.webp",
        category: ["electronics"],
        brand: "JBL",
        rating: 4.6,
        reviews: 1680,
        inStock: true,
        specifications: {
            "Battery Life": "12 hours",
            "Water Rating": "IP67 waterproof",
            "Bluetooth Version": "5.1",
            "Frequency Response": "63Hz - 20kHz",
            "Dimensions": "178 x 68 x 72mm",
            "Weight": "550g"
        },
        highlights: [
            "IP67 waterproof and dustproof",
            "12-hour battery life",
            "JBL Pro Sound",
            "PartyBoost feature",
            "Eco-friendly packaging"
        ],
        description_full: "Take the party anywhere with JBL Flip 6. This portable speaker delivers bold JBL Pro Sound with an optimized long excursion driver, separate tweeter and dual JBL bass radiators."
    },
    {
        id: 5,
        name: "Spigen iPhone 15 Pro Case",
        description: "Premium protective case with MagSafe and wireless charging support",
        price: 1899,
        originalPrice: 2499,
        image: "images/iPhone 15 Pro Case.webp",
        category: ["mobile", "accessories"],
        brand: "Spigen",
        rating: 4.7,
        reviews: 920,
        inStock: true,
        specifications: {
            "Compatibility": "iPhone 15 Pro",
            "Material": "TPU + PC hybrid",
            "MagSafe": "Compatible",
            "Drop Protection": "Military grade",
            "Wireless Charging": "Supported",
            "Colors": "Clear, Black, Blue"
        },
        highlights: [
            "MagSafe compatible",
            "Military-grade drop protection",
            "Crystal clear design",
            "Wireless charging support",
            "Precise cutouts"
        ],
        description_full: "Protect your iPhone 15 Pro with Spigen's premium case featuring military-grade protection, MagSafe compatibility, and crystal-clear design that showcases your phone's beauty."
    },
    {
        id: 6,
        name: "Logitech G502 HERO Gaming Mouse",
        description: "High-performance gaming mouse with HERO 25K sensor and RGB lighting",
        price: 4999,
        originalPrice: 6499,
        image: "images/Gaming Mouse.webp",
        category: ["electronics", "gaming"],
        brand: "Logitech",
        rating: 4.8,
        reviews: 2340,
        inStock: true,
        specifications: {
            "Sensor": "HERO 25K",
            "DPI": "100-25,600 DPI",
            "Buttons": "11 programmable buttons",
            "Weight": "121g (adjustable)",
            "Polling Rate": "1000 Hz",
            "Cable": "Braided USB"
        },
        highlights: [
            "HERO 25K sensor",
            "11 programmable buttons",
            "Adjustable weight system",
            "LIGHTSYNC RGB",
            "Mechanical switches"
        ],
        description_full: "Engineered for esports professionals and enthusiasts, the G502 HERO features the advanced HERO 25K sensor for maximum tracking accuracy and precision."
    },
    {
        id: 7,
        name: "Anker PowerExpand USB-C Hub",
        description: "7-in-1 USB-C hub with 4K HDMI, USB 3.0, and Power Delivery",
        price: 3299,
        originalPrice: 4299,
        image: "images/Anker PowerExpand USB-C Hub.jpg",
        category: ["electronics", "accessories"],
        brand: "Anker",
        rating: 4.4,
        reviews: 1150,
        inStock: true,
        specifications: {
            "Ports": "7-in-1 design",
            "HDMI Output": "4K@60Hz",
            "USB Ports": "2x USB 3.0, 1x USB 2.0",
            "Power Delivery": "Up to 85W",
            "Ethernet": "Gigabit Ethernet",
            "Compatibility": "MacBook, iPad Pro, laptops"
        },
        highlights: [
            "7 ports in 1 compact hub",
            "4K HDMI output",
            "85W Power Delivery",
            "Gigabit Ethernet",
            "Plug and play"
        ],
        description_full: "Transform your laptop into a workstation with Anker's 7-in-1 USB-C hub. Connect multiple devices, external displays, and charge your laptop simultaneously."
    },
    {
        id: 8,
        name: "Belkin 15W Wireless Charger",
        description: "Fast wireless charging pad with LED indicator and foreign object detection",
        price: 2799,
        originalPrice: 3499,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
        category: ["electronics", "mobile"],
        brand: "Belkin",
        rating: 4.2,
        reviews: 680,
        inStock: true,
        specifications: {
            "Charging Speed": "Up to 15W",
            "Compatibility": "Qi-enabled devices",
            "Input": "USB-C",
            "Dimensions": "90 x 90 x 12mm",
            "Safety Features": "FOD, temperature control",
            "LED Indicator": "Charging status light"
        },
        highlights: [
            "15W fast wireless charging",
            "Qi-certified safety",
            "LED charging indicator",
            "Case-friendly design",
            "Foreign object detection"
        ],
        description_full: "Charge your Qi-enabled devices wirelessly with Belkin's 15W charging pad. Features advanced safety protocols and works through most phone cases up to 3mm thick."
    },
    {
        id: 9,
        name: "iPhone 15 Pro Max 256GB",
        description: "Latest iPhone with titanium design and advanced camera system",
        price: 134900,
        originalPrice: 139900,
        image:"images/iPhone 15 Pro Max 256GB.jpg",
        category: ["mobile", "electronics"],
        brand: "Apple",
        rating: 4.9,
        reviews: 3200,
        inStock: true,
        specifications: {
            "Display": "6.7-inch Super Retina XDR",
            "Processor": "A17 Pro chip",
            "Storage": "256GB",
            "Camera": "48MP Main, 12MP Ultra Wide",
            "Battery": "Up to 29 hours video playback",
            "Material": "Titanium"
        },
        highlights: [
            "Titanium design",
            "A17 Pro chip",
            "Pro camera system",
            "Action Button",
            "USB-C connectivity"
        ],
        description_full: "The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera capabilities."
    },
    {
        id: 10,
        name: "Levi's Men's 511 Slim Jeans",
        description: "Classic slim-fit jeans with modern styling and comfort",
        price: 2999,
        originalPrice: 4499,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
        category: ["fashion"],
        brand: "Levi's",
        rating: 4.3,
        reviews: 890,
        inStock: true,
        specifications: {
            "Fit": "Slim through hip and thigh",
            "Material": "99% Cotton, 1% Elastane",
            "Rise": "Mid-rise",
            "Leg Opening": "14.5 inches",
            "Care": "Machine wash cold",
            "Origin": "Made in India"
        },
        highlights: [
            "Classic 511 slim fit",
            "Comfortable stretch denim",
            "Versatile styling",
            "Durable construction",
            "Iconic Levi's quality"
        ],
        description_full: "The Levi's 511 Slim Jeans offer a modern slim fit that's comfortable and versatile for everyday wear."
    },
    {
        id: 11,
        name: "LG 260L Frost Free Refrigerator",
        description: "Energy-efficient double door refrigerator with smart inverter technology",
        price: 24999,
        originalPrice: 29999,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
        category: ["appliances", "electronics"],
        brand: "LG",
        rating: 4.4,
        reviews: 1560,
        inStock: true,
        specifications: {
            "Capacity": "260 Liters",
            "Type": "Frost Free Double Door",
            "Energy Rating": "3 Star",
            "Compressor": "Smart Inverter",
            "Shelves": "Toughened Glass",
            "Warranty": "1 Year + 9 Years on Compressor"
        },
        highlights: [
            "Smart Inverter Compressor",
            "Frost-free technology",
            "Energy efficient",
            "Spacious storage",
            "10-year compressor warranty"
        ],
        description_full: "LG's frost-free refrigerator with smart inverter technology ensures optimal cooling while saving energy."
    },
    {
        id: 12,
        name: "Lakme Absolute Perfect Radiance Kit",
        description: "Complete skincare kit for glowing and radiant skin",
        price: 1899,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
        category: ["beauty"],
        brand: "Lakme",
        rating: 4.2,
        reviews: 720,
        inStock: true,
        specifications: {
            "Kit Contents": "Cleanser, Toner, Serum, Moisturizer",
            "Skin Type": "All skin types",
            "Key Ingredients": "Vitamin C, Niacinamide",
            "Usage": "Morning and evening routine",
            "Shelf Life": "24 months",
            "Origin": "Made in India"
        },
        highlights: [
            "Complete skincare routine",
            "Vitamin C enriched",
            "Suitable for all skin types",
            "Dermatologically tested",
            "Visible results in 7 days"
        ],
        description_full: "Transform your skin with Lakme's complete radiance kit featuring vitamin C and niacinamide for glowing skin."
    },
    {
        id: 13,
        name: "Prestige Svachh Pressure Cooker 5L",
        description: "Stainless steel pressure cooker with unique spillage control feature",
        price: 3299,
        originalPrice: 4199,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        category: ["home"],
        brand: "Prestige",
        rating: 4.6,
        reviews: 2100,
        inStock: true,
        specifications: {
            "Capacity": "5 Liters",
            "Material": "Stainless Steel",
            "Base": "Induction compatible",
            "Safety": "Controlled Gasket Release System",
            "Warranty": "5 Years",
            "Weight": "2.8 kg"
        },
        highlights: [
            "Spillage control feature",
            "Induction compatible",
            "Stainless steel body",
            "5-year warranty",
            "Easy to clean"
        ],
        description_full: "Prestige Svachh pressure cooker with innovative spillage control ensures mess-free cooking experience."
    },
    {
        id: 14,
        name: "Yoga Mat Premium 6mm",
        description: "Non-slip yoga mat with excellent grip and cushioning",
        price: 1299,
        originalPrice: 1899,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        category: ["health"],
        brand: "Strauss",
        rating: 4.3,
        reviews: 650,
        inStock: true,
        specifications: {
            "Thickness": "6mm",
            "Material": "High-density NBR foam",
            "Dimensions": "183 x 61 cm",
            "Weight": "800g",
            "Surface": "Non-slip textured",
            "Care": "Easy to clean"
        },
        highlights: [
            "6mm thick cushioning",
            "Non-slip surface",
            "Lightweight and portable",
            "Eco-friendly material",
            "Perfect for all yoga styles"
        ],
        description_full: "Premium yoga mat designed for comfort and stability during your yoga and fitness routines."
    },
    {
        id: 15,
        name: "LEGO Creator 3-in-1 Deep Sea Creatures",
        description: "Build and rebuild 3 different sea creatures with this creative LEGO set",
        price: 2799,
        originalPrice: 3299,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: ["toys"],
        brand: "LEGO",
        rating: 4.7,
        reviews: 420,
        inStock: true,
        specifications: {
            "Pieces": "230 pieces",
            "Age Range": "7-12 years",
            "Models": "3-in-1 (Shark, Squid, Angler Fish)",
            "Dimensions": "Shark: 8 x 19 x 9 cm",
            "Skills": "Creativity, Problem-solving",
            "Safety": "Non-toxic materials"
        },
        highlights: [
            "3 models in 1 set",
            "230 LEGO pieces",
            "Develops creativity",
            "High-quality construction",
            "Educational and fun"
        ],
        description_full: "Dive into creativity with this 3-in-1 LEGO set featuring buildable deep sea creatures."
    },
    {
        id: 16,
        name: "The Alchemist - Paulo Coelho",
        description: "International bestseller about following your dreams",
        price: 299,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
        category: ["books"],
        brand: "HarperCollins",
        rating: 4.8,
        reviews: 15600,
        inStock: true,
        specifications: {
            "Pages": "163 pages",
            "Language": "English",
            "Publisher": "HarperCollins",
            "ISBN": "978-0062315007",
            "Format": "Paperback",
            "Publication Year": "2014"
        },
        highlights: [
            "International bestseller",
            "Inspirational story",
            "Easy to read",
            "Life-changing philosophy",
            "Perfect gift book"
        ],
        description_full: "A magical story about Santiago, a shepherd boy who travels from Spain to Egypt in search of treasure and discovers the importance of following one's dreams."
    },
    {
    id: 17,
    name: "OnePlus 12 5G Smartphone",
    description: "Flagship smartphone with Snapdragon 8 Gen 3 processor",
    price: 64999,
    originalPrice: 69999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    category: ["mobile", "electronics"],
    brand: "OnePlus",
    rating: 4.6,
    reviews: 890,
    inStock: true,
    specifications: {
        "Display": "6.82-inch LTPO AMOLED",
        "Processor": "Snapdragon 8 Gen 3",
        "RAM": "12GB LPDDR5X",
        "Storage": "256GB UFS 4.0",
        "Camera": "50MP Triple Camera",
        "Battery": "5400mAh with 100W charging"
    },
    highlights: [
        "Snapdragon 8 Gen 3 processor",
        "50MP Hasselblad camera system",
        "100W SuperVOOC charging",
        "120Hz LTPO display",
        "OxygenOS 14 based on Android 14"
    ],
    description_full: "Experience flagship performance with the OnePlus 12 5G. Powered by the latest Snapdragon 8 Gen 3 processor and featuring a stunning 120Hz LTPO display, this smartphone delivers exceptional performance for gaming, photography, and daily use. The Hasselblad-tuned camera system captures professional-quality photos, while 100W fast charging ensures you're never out of power."
    },
    {
    id: 18,
    name: "Samsung Crystal 4K Infinity Vision 138 cm (55 inch)",
    description: "This Samsung Smart TV comes equipped with versatile functions that contribute to an excellent audio-visual experience.",
    price: 40490,
    originalPrice: 57999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    category: ["electronics"],
    brand: "samsung",
    rating: 4.6,
    reviews: 589,
    inStock: true,
    specifications: {
        "Display": "6.82-inch LTPO AMOLED",
        "Processor": "Snapdragon 8 Gen 3",
        "RAM": "12GB LPDDR5X",
        "Storage": "256GB UFS 4.0",
        "Camera": "50MP Triple Camera",
        "Battery": "5400mAh with 100W charging"
    },
    highlights: [
        "Supported Apps: Netflix, JioHotstar, Prime Video, YouTube, Zee5, Apple TV+, Sony LIV",
        "Operating System: Tizen",
        "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
        "Sound Output: 20 W",
        "Refresh Rate: 50 Hz"
    ],
    description_full: "This Samsung Smart TV comes equipped with versatile functions that contribute to an excellent audio-visual experience. In addition, this TV includes smart Voice Assistants (Alexa and Bixby), 4K UHD resolution, 4K Upscaling, PurColour mechanism, contrast enhancers, 3D surround sound, and Adaptive Sound. Furthermore, this TV offers smooth motions on-screen, immersive virtual sounds, Quick Remote function, Samsung Knox Security, personalised screen experiences, and AI Energy-saving mode. Besides, you can easily control this TV using your smartphone or your watch, track your workout sessions and access health apps seamlessly."
     },
     {
    id: 19,
    name: "BS Associates 15W/Type-C/Light-Weight Design Magnetic Wireless Charger with Qi Technology Charging Pad",
    description: "Technology Charging Pad",
    price: 534,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    category: ["electronics", "mobile"],
    brand: "BS Associates",
    rating: 3.5,
    reviews: 102,
    inStock: true,
    specifications: {
        "Brand": "BS Associates",
        "Model Number": "15W/Type-C/Light-Weight Design Magnetic Wireless Charger with Qi Technology",
        "Compatible With": "Iphone, Compatible with iPhone 12 mini, iPhone 12, iPhone 12 Pro, iPhone 12 Pro Max, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max",
        "Shape": "Round",
        "Connector Type": "NA",
        "Connectivity": "Wireless"
    },
    highlights: [
        "For: Iphone, Compatible with iPhone 12 mini, iPhone 12, iPhone 12 Pro, iPhone 12 Pro Max, iPhone 11, iPhone 11 Pro, iPhone 11 Pro Max",
        "Operating System: Tizen",
        "Color: White",
        "Input Current: 3 A"
        
    ],
    description_full: "Product Name - MagSafe Wireless Magnetic Charger for iPhone Material - Acrylic+Plastics Function - Cell phone quick Wireless Charger Compatible - For iPhone supporting wireless charging Input voltage and current: input 9V/2A, 12V/2.5A, 5V/2A Output voltage and current: 5V/2A, 5V/1A, 5V/3A, 5V/1.2A Transmission distance : 8mm Wireless charger output: 15W Application: Mobile Devices .desk Computer"
     },
    {
        id: 20,
        name: "Samsung Galaxy S24 Ultra 256GB",
        description: "Latest flagship smartphone with S Pen and AI features",
        price: 124999,
        originalPrice: 134999,
        image: "images/Samsung-Galaxy-S24-Ultra-256GB.jpg",
        category: ["mobile", "electronics"],
        brand: "Samsung",
        rating: 4.8,
        reviews: 2450,
        inStock: true,
        specifications: {
            "Display": "6.8-inch Dynamic AMOLED 2X",
            "Processor": "Snapdragon 8 Gen 3",
            "RAM": "12GB",
            "Storage": "256GB",
            "Camera": "200MP Main + 50MP Periscope",
            "Battery": "5000mAh with 45W charging"
        },
        highlights: [
            "S Pen included",
            "200MP camera with AI zoom",
            "Titanium frame design",
            "Galaxy AI features",
            "All-day battery life"
        ],
        description_full: "The Samsung Galaxy S24 Ultra represents the pinnacle of smartphone technology with its built-in S Pen, revolutionary 200MP camera system, and advanced Galaxy AI features. The titanium design ensures durability while maintaining premium aesthetics."
    },
    {
        id: 21,
        name: "Local Product Example",
        description: "This product uses a local image from the images folder",
        price: 15999,
        originalPrice: 18999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        category: ["electronics"],
        brand: "Example Brand",
        rating: 4.5,
        reviews: 150,
        inStock: true,
        specifications: {
            "Feature 1": "Value 1",
            "Feature 2": "Value 2",
            "Feature 3": "Value 3"
        },
        highlights: [
            "High quality",
            "Great value",
            "Fast shipping"
        ],
        description_full: "This is an example product that demonstrates how to use local images stored in the images folder."
    }
];

// DOM elements
const productGrid = document.getElementById('productGrid');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});

// Display products on the page
function displayProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Smooth scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}
// Search functionality
let filteredProducts = [...products];

// Search products function
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // If search is empty, show all products
        filteredProducts = [...products];
    } else {
        // Filter products based on search term
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayFilteredProducts();
    
    // Scroll to products section if not already visible
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        scrollToProducts();
    } else {
        // If on other pages, redirect to home with search
        window.location.href = `index.html#products`;
    }
}

// Display filtered products
function displayFilteredProducts() {
    const productGrid = document.getElementById('productGrid');
    
    if (!productGrid) return; // Exit if not on products page
    
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="no-products-found">
                <i class="fas fa-search" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search terms or browse all products.</p>
                <button class="cta-button" onclick="clearSearch()">Show All Products</button>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Clear search and show all products
function clearSearch() {
    document.getElementById('searchInput').value = '';
    filteredProducts = [...products];
    displayFilteredProducts();
}

// Search from other pages
function searchFromOtherPage() {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim()) {
        window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}#products`;
    } else {
        window.location.href = 'index.html#products';
    }
}

// Quick category navigation (can be used from any page)
function goToCategory(categoryId) {
    window.location.href = `index.html?category=${categoryId}#products`;
}

// Update search function for non-product pages
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // If we're not on the main page, redirect to main page with search
    if (!document.getElementById('productGrid')) {
        if (searchTerm) {
            window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}#products`;
        } else {
            window.location.href = 'index.html#products';
        }
        return;
    }
    
    // If we're on the main page, perform search
    if (searchTerm === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayFilteredProducts();
    scrollToProducts();
}
// Generate star rating HTML
function generateStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHtml += '<span class="star filled">★</span>';
        } else if (i - 0.5 <= rating) {
            starsHtml += '<span class="star half-filled">★</span>';
        } else {
            starsHtml += '<span class="star">☆</span>';
        }
    }
    return starsHtml;
}

// View product details
function viewProduct(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// Update the displayFilteredProducts function to use new format
function displayFilteredProductsNew() {
    const productGrid = document.getElementById('productGrid');
    
    if (!productGrid) return; // Exit if not on products page
    
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="no-products-found">
                <i class="fas fa-search" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search terms or browse all products.</p>
                <button class="cta-button" onclick="clearSearch()">Show All Products</button>
            </div>
        `;
        updateProductCount();
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Get category name for badge
        const primaryCategory = Array.isArray(product.category) ? product.category[0] : product.category;
        const categoryInfo = categories.find(cat => cat.id === primaryCategory);
        const categoryName = categoryInfo ? categoryInfo.name : primaryCategory;
        
        productCard.innerHTML = `
            <div class="product-image" onclick="viewProduct(${product.id})">
                <div class="category-badge">${categoryName}</div>
                <button class="quick-share-btn" onclick="event.stopPropagation(); toggleShareDropdown(${product.id}, event)" title="Share Product">
                    <i class="fas fa-share-alt"></i>
                </button>
                <div class="share-dropdown" id="shareDropdown${product.id}">
                    <a href="#" class="share-option" onclick="shareProductFromGrid(${product.id}, 'whatsapp')">
                        <i class="fab fa-whatsapp" style="color: #25D366;"></i>
                        WhatsApp
                    </a>
                    <a href="#" class="share-option" onclick="shareProductFromGrid(${product.id}, 'facebook')">
                        <i class="fab fa-facebook-f" style="color: #1877F2;"></i>
                        Facebook
                    </a>
                    <a href="#" class="share-option" onclick="shareProductFromGrid(${product.id}, 'twitter')">
                        <i class="fab fa-twitter" style="color: #1DA1F2;"></i>
                        Twitter
                    </a>
                    <a href="#" class="share-option" onclick="shareProductFromGrid(${product.id}, 'telegram')">
                        <i class="fab fa-telegram-plane" style="color: #0088cc;"></i>
                        Telegram
                    </a>
                    <a href="#" class="share-option" onclick="copyProductLinkFromGrid(${product.id})">
                        <i class="fas fa-link" style="color: #6c757d;"></i>
                        Copy Link
                    </a>
                </div>
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300/f0f0f0/999999?text=No+Image'; this.style.display='block';">
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="viewProduct(${product.id})">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-actions">
                    <button class="enquire-btn" onclick="viewProduct(${product.id})">
                        <i class="fas fa-info-circle"></i>
                        View Details
                    </button>
                    <button class="contact-btn" onclick="openContactModal(${product.id})">
                        <i class="fas fa-phone"></i>
                        Enquire Now
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    updateProductCount();
}

// Override the original function
displayFilteredProducts = displayFilteredProductsNew;
// Category filtering functionality
let currentCategory = 'all';
let currentSort = 'default';

// Update the original displayProducts function
function displayProducts() {
    // Initialize with all products
    currentCategory = 'all';
    filteredProducts = [...products];
    displayCategories();
    displayFilteredProducts();
    updateProductCount();
}

// Clear search and reset to current category
function clearSearch() {
    document.getElementById('searchInput').value = '';
    filterByCategory(currentCategory);
}

/*
HOW TO ADD PRODUCTS WITH MULTIPLE CATEGORIES:

To add a product that appears in multiple categories, use an array for the category field:

Example 1 - Product in 2 categories:
{
    id: 20,
    name: "Samsung Galaxy Tab S9",
    description: "Premium Android tablet with S Pen",
    price: 54999,
    originalPrice: 59999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: ["mobile", "electronics"], // Will appear in both Mobile & Electronics
    brand: "Samsung",
    rating: 4.7,
    reviews: 450,
    inStock: true,
    specifications: {
        "Display": "11-inch Super AMOLED",
        "Processor": "Snapdragon 8 Gen 2",
        "Storage": "128GB"
    },
    highlights: [
        "S Pen included",
        "Premium design",
        "Long battery life"
    ],
    description_full: "Premium tablet with S Pen support..."
}

Example 2 - Product in 3 categories:
{
    id: 21,
    name: "Apple AirPods Pro",
    description: "Wireless earbuds with active noise cancellation",
    price: 24900,
    category: ["electronics", "mobile", "accessories"], // Will appear in 3 categories
    // ... rest of product data
}

Available category IDs:
- "electronics"
- "mobile" 
- "fashion"
- "appliances"
- "beauty"
- "home"
- "health"
- "toys"
- "books"
- "sports"
- "gaming"
- "accessories"

The product will automatically appear in all specified categories when users filter by category.
*/

// Hero Slider Functionality - Simplified and Robust
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.banner-slide');
        this.dotsContainer = document.querySelector('.slider-dots');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.autoSlideDelay = 3000; // 3 seconds
        this.isTransitioning = false;
        
        // Bind methods to preserve 'this' context
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) {
            console.log('No slides found for hero slider');
            return;
        }
        
        console.log(`Hero slider initialized with ${this.slides.length} slides`);
        
        // Ensure first slide is active
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === 0) {
                slide.classList.add('active');
            }
        });
        
        this.createDots();
        this.startAutoSlide();
        this.addEventListeners();
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    goToSlide(slideIndex) {
        if (this.isTransitioning || slideIndex === this.currentSlide || slideIndex >= this.slides.length) return;
        
        this.isTransitioning = true;
        
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        if (this.dotsContainer && this.dotsContainer.children[this.currentSlide]) {
            this.dotsContainer.children[this.currentSlide].classList.remove('active');
        }
        
        // Update current slide index
        this.currentSlide = slideIndex;
        
        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        if (this.dotsContainer && this.dotsContainer.children[this.currentSlide]) {
            this.dotsContainer.children[this.currentSlide].classList.add('active');
        }
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600); // Slightly longer than CSS transition
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        console.log(`Moving to next slide: ${nextIndex}`);
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        console.log(`Moving to previous slide: ${prevIndex}`);
        this.goToSlide(prevIndex);
    }
    
    startAutoSlide() {
        // Clear any existing interval
        this.stopAutoSlide();
        
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
    
    addEventListeners() {
        // Pause auto-slide on hover
        const bannerSection = document.querySelector('.hero-banner');
        if (bannerSection) {
            bannerSection.addEventListener('mouseenter', () => this.stopAutoSlide());
            bannerSection.addEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        if (bannerSection) {
            bannerSection.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                this.stopAutoSlide(); // Stop auto-slide during touch
            });
            
            bannerSection.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                const diff = startX - endX;
                
                if (Math.abs(diff) > 50) { // Minimum swipe distance
                    if (diff > 0) {
                        this.nextSlide(); // Swipe left - next slide
                    } else {
                        this.prevSlide(); // Swipe right - previous slide
                    }
                }
                
                // Restart auto-slide after touch
                setTimeout(() => {
                    this.startAutoSlide();
                }, 1000);
            });
        }
    }
    
    // Public method to manually control slider
    destroy() {
        this.stopAutoSlide();
        // Remove event listeners if needed
    }
}

// Global hero slider instance
let heroSlider;

// Initialize hero slider with error handling
function initializeHeroSlider() {
    try {
        // Wait a bit to ensure DOM is fully loaded
        setTimeout(() => {
            heroSlider = new HeroSlider();
            
            // Fallback: If slider doesn't work, try again
            if (!heroSlider || heroSlider.slides.length === 0) {
                console.log('Retrying slider initialization...');
                setTimeout(() => {
                    heroSlider = new HeroSlider();
                }, 500);
            }
        }, 100);
    } catch (error) {
        console.error('Error initializing hero slider:', error);
    }
}

// Main initialization function
function initializeWebsite() {
    // Initialize categories and products
    displayProducts();
    
    // Initialize hero slider
    initializeHeroSlider();
    
    // Initialize hero inquiry form
    initializeHeroInquiryForm();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize navigation
    initializeNavigation();
    
    // Handle URL parameters
    handleUrlParameters();
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // Search on Enter key press
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
        
        // Real-time search with debouncing
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (this.value.length >= 2 || this.value.length === 0) {
                    searchProducts();
                }
            }, 300); // Wait 300ms after user stops typing
        });
    }
}

// Initialize navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Handle URL parameters
function handleUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    const categoryParam = urlParams.get('category');
    
    // Handle category parameter
    if (categoryParam && categories.find(cat => cat.id === categoryParam)) {
        setTimeout(() => {
            filterByCategory(categoryParam);
        }, 100);
    }
    
    // Handle search parameter
    if (searchTerm) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = searchTerm;
            // Delay search to ensure products are loaded first
            setTimeout(() => {
                searchProducts();
            }, 200);
        }
    }
}

// Display category tabs
function displayCategories() {
    const categoryTabs = document.getElementById('categoryTabs');
    if (!categoryTabs) return;
    
    categoryTabs.innerHTML = '';
    
    categories.forEach(category => {
        const categoryTab = document.createElement('div');
        categoryTab.className = `category-tab ${category.id === currentCategory ? 'active' : ''}`;
        categoryTab.onclick = () => filterByCategory(category.id);
        categoryTab.innerHTML = `
            <i class="${category.icon}"></i>
            <span>${category.name}</span>
        `;
        categoryTabs.appendChild(categoryTab);
    });
}

// Filter products by category
function filterByCategory(categoryId) {
    currentCategory = categoryId;
    
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.closest('.category-tab').classList.add('active');
    
    // Filter products
    if (categoryId === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => {
            // Handle both array and string categories for backward compatibility
            if (Array.isArray(product.category)) {
                return product.category.includes(categoryId);
            } else {
                return product.category === categoryId;
            }
        });
    }
    
    // Apply current sort
    applySorting();
    
    // Display filtered products
    displayFilteredProducts();
    updateProductCount();
}

// Sort products
function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    currentSort = sortSelect.value;
    applySorting();
    displayFilteredProducts();
}

// Apply sorting to filtered products
function applySorting() {
    switch (currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Keep original order
            break;
    }
}

// Update product count display
function updateProductCount() {
    const productCountElement = document.getElementById('productCount');
    if (productCountElement) {
        const count = filteredProducts.length;
        productCountElement.textContent = `${count} product${count !== 1 ? 's' : ''}`;
    }
}

// Update search to work with categories
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // If we're not on the main page, redirect to main page with search
    if (!document.getElementById('productGrid')) {
        if (searchTerm) {
            window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}#products`;
        } else {
            window.location.href = 'index.html#products';
        }
        return;
    }
    
    // Start with category-filtered products
    let baseProducts = currentCategory === 'all' ? products : products.filter(p => {
        // Handle both array and string categories
        if (Array.isArray(p.category)) {
            return p.category.includes(currentCategory);
        } else {
            return p.category === currentCategory;
        }
    });
    
    // Apply search filter
    if (searchTerm === '') {
        filteredProducts = [...baseProducts];
    } else {
        filteredProducts = baseProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply current sort
    applySorting();
    
    displayFilteredProducts();
    updateProductCount();
    scrollToProducts();
}

// Single DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Hero Inquiry Form Functionality
function initializeHeroInquiryForm() {
    const heroForm = document.getElementById('heroInquiryForm');
    if (!heroForm) return;
    
    heroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(heroForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const mobile = formData.get('mobile');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !mobile) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Mobile validation (basic)
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile.replace(/\D/g, ''))) {
            showNotification('Please enter a valid 10-digit mobile number.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you! We will call you back within 24 hours.', 'success');
        
        // Reset form
        heroForm.reset();
    });
}

// Show notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="close-notification" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}


// Product sharing functionality for grid view
function toggleShareDropdown(productId, event) {
    event.stopPropagation();
    
    // Close all other dropdowns
    document.querySelectorAll('.share-dropdown').forEach(dropdown => {
        if (dropdown.id !== `shareDropdown${productId}`) {
            dropdown.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    const dropdown = document.getElementById(`shareDropdown${productId}`);
    dropdown.classList.toggle('active');
    
    // Close dropdown when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                document.removeEventListener('click', closeDropdown);
            }
        });
    }, 100);
}

// Share product from grid view
function shareProductFromGrid(productId, platform) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productUrl = `${window.location.origin}${window.location.pathname.replace('index.html', '')}product-details.html?id=${productId}`;
    const productTitle = product.name;
    const productDescription = product.description;
    const productPrice = `₹${product.price.toLocaleString('en-IN')}`;
    const shareText = `Check out this amazing product: ${productTitle} - ${productPrice}\n${productDescription}`;
    
    let shareUrl = '';
    
    switch (platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + '\n' + productUrl)}`;
            break;
            
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}&quote=${encodeURIComponent(shareText)}`;
            break;
            
        case 'twitter':
            const twitterText = `${productTitle} - ${productPrice}\n${productDescription}`;
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(productUrl)}`;
            break;
            
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(shareText)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        showGridShareNotification(`Product shared via ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`);
    }
    
    // Close dropdown
    document.getElementById(`shareDropdown${productId}`).classList.remove('active');
}

// Copy product link from grid view
function copyProductLinkFromGrid(productId) {
    const productUrl = `${window.location.origin}${window.location.pathname.replace('index.html', '')}product-details.html?id=${productId}`;
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(productUrl).then(() => {
            showGridShareNotification('Product link copied to clipboard!');
        }).catch(() => {
            fallbackCopyTextToClipboard(productUrl);
        });
    } else {
        fallbackCopyTextToClipboard(productUrl);
    }
    
    // Close dropdown
    document.getElementById(`shareDropdown${productId}`).classList.remove('active');
}

// Fallback copy function for grid view
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showGridShareNotification('Product link copied to clipboard!');
        } else {
            showGridShareNotification('Failed to copy link. Please copy manually.', 'error');
        }
    } catch (err) {
        showGridShareNotification('Failed to copy link. Please copy manually.', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Show share notification for grid view
function showGridShareNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.share-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `share-notification ${type}`;
    notification.style.background = type === 'success' ? '#28a745' : '#dc3545';
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Bulk share functionality - share multiple products
function shareMultipleProducts(productIds, platform) {
    if (!productIds || productIds.length === 0) return;
    
    const selectedProducts = products.filter(p => productIds.includes(p.id));
    const baseUrl = `${window.location.origin}${window.location.pathname.replace('index.html', '')}`;
    
    let shareText = "Check out these amazing products:\n\n";
    selectedProducts.forEach((product, index) => {
        shareText += `${index + 1}. ${product.name} - ₹${product.price.toLocaleString('en-IN')}\n`;
        shareText += `   ${product.description}\n`;
        shareText += `   ${baseUrl}product-details.html?id=${product.id}\n\n`;
    });
    
    let shareUrl = '';
    
    switch (platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
            break;
            
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseUrl)}&quote=${encodeURIComponent(shareText)}`;
            break;
            
        case 'twitter':
            const twitterText = `Check out these ${selectedProducts.length} amazing products from NextOption!`;
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(baseUrl)}`;
            break;
            
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(baseUrl)}&text=${encodeURIComponent(shareText)}`;
            break;
            
        case 'email':
            const emailSubject = `Check out these ${selectedProducts.length} amazing products!`;
            shareUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(shareText)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        showGridShareNotification(`${selectedProducts.length} products shared via ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`);
    }
}

// Share entire category
function shareCategory(categoryId) {
    const categoryProducts = products.filter(product => {
        if (Array.isArray(product.category)) {
            return product.category.includes(categoryId);
        } else {
            return product.category === categoryId;
        }
    });
    
    const categoryInfo = categories.find(cat => cat.id === categoryId);
    const categoryName = categoryInfo ? categoryInfo.name : categoryId;
    
    const productIds = categoryProducts.slice(0, 5).map(p => p.id); // Limit to first 5 products
    
    if (productIds.length > 0) {
        shareMultipleProducts(productIds, 'whatsapp');
        showGridShareNotification(`${categoryName} category shared!`);
    }
}
// Contact modal functionality for enquiries
function openContactModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create modal HTML
    const modalHTML = `
        <div class="contact-modal-overlay" id="contactModalOverlay" onclick="closeContactModal()">
            <div class="contact-modal" onclick="event.stopPropagation()">
                <div class="contact-modal-header">
                    <h3>Enquire About: ${product.name}</h3>
                    <button class="close-contact-modal" onclick="closeContactModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="contact-modal-body">
                    <div class="product-summary">
                        <img src="${product.image}" alt="${product.name}" class="modal-product-image">
                        <div class="modal-product-info">
                            <h4>${product.name}</h4>
                            <p>${product.description}</p>
                        </div>
                    </div>
                    <div class="contact-options">
                        <h4>Contact Us</h4>
                        <div class="contact-buttons">
                            <a href="tel:+1234567890" class="contact-option-btn call">
                                <i class="fas fa-phone"></i>
                                Call Now
                            </a>
                            <a href="https://wa.me/1234567890?text=Hi, I'm interested in ${encodeURIComponent(product.name)}" target="_blank" class="contact-option-btn whatsapp">
                                <i class="fab fa-whatsapp"></i>
                                WhatsApp
                            </a>
                            <a href="mailto:info@nextoption.com?subject=Enquiry about ${encodeURIComponent(product.name)}&body=Hi, I'm interested in learning more about ${encodeURIComponent(product.name)}. Please provide more details." class="contact-option-btn email">
                                <i class="fas fa-envelope"></i>
                                Email
                            </a>
                            <a href="contact.html" class="contact-option-btn contact">
                                <i class="fas fa-address-book"></i>
                                Contact Form
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('contactModalOverlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal with animation
    setTimeout(() => {
        document.getElementById('contactModalOverlay').classList.add('show');
    }, 10);
}

// Close contact modal
function closeContactModal() {
    const modal = document.getElementById('contactModalOverlay');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});
// Manual slider control functions (for HTML button onclick)
function nextSlide() {
    if (heroSlider && typeof heroSlider.nextSlide === 'function') {
        heroSlider.nextSlide();
    } else {
        console.log('Hero slider not initialized');
    }
}

function prevSlide() {
    if (heroSlider && typeof heroSlider.prevSlide === 'function') {
        heroSlider.prevSlide();
    } else {
        console.log('Hero slider not initialized');
    }
}

function goToSlide(index) {
    if (heroSlider && typeof heroSlider.goToSlide === 'function') {
        heroSlider.goToSlide(index);
    } else {
        console.log('Hero slider not initialized');
    }
}

// Alternative initialization if the main one fails
window.addEventListener('load', function() {
    // Double-check slider initialization after full page load
    setTimeout(() => {
        if (!heroSlider || !heroSlider.slides || heroSlider.slides.length === 0) {
            console.log('Backup slider initialization...');
            initializeHeroSlider();
        }
    }, 1000);
});
// Test function to check slider status
function testSlider() {
    console.log('=== SLIDER TEST ===');
    console.log('heroSlider exists:', !!heroSlider);
    console.log('Slides found:', document.querySelectorAll('.banner-slide').length);
    console.log('Dots container:', !!document.querySelector('.slider-dots'));
    console.log('Current slide:', heroSlider ? heroSlider.currentSlide : 'N/A');
    console.log('Auto-slide active:', heroSlider ? !!heroSlider.slideInterval : 'N/A');
    
    if (heroSlider && heroSlider.slides) {
        heroSlider.slides.forEach((slide, index) => {
            console.log(`Slide ${index}:`, slide.classList.contains('active') ? 'ACTIVE' : 'inactive');
        });
    }
    console.log('==================');
}

// Call test function after initialization
setTimeout(() => {
    testSlider();
}, 2000);
// Mobile-specific enhancements
function initializeMobileEnhancements() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isMobile || isTouch) {
        document.body.classList.add('mobile-device');
        
        // Add mobile-specific optimizations
        optimizeForMobile();
        
        // Improve touch interactions
        improveTouchInteractions();
        
        // Handle orientation changes
        handleOrientationChange();
        
        // Optimize scrolling
        optimizeScrolling();
    }
}

function optimizeForMobile() {
    // Reduce auto-slide speed on mobile for better UX
    if (heroSlider) {
        heroSlider.autoSlideDelay = 4000; // Slower on mobile
    }
    
    // Add loading states for better perceived performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.3s ease';
                this.style.opacity = '1';
            });
        }
    });
    
    // Lazy load images that are not in viewport
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

function improveTouchInteractions() {
    // Add touch feedback to interactive elements
    const touchElements = document.querySelectorAll('button, .btn, .product-card, .category-tab, .nav a');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Improve slider touch interactions
    const sliderContainer = document.querySelector('.banner-slider');
    if (sliderContainer) {
        let startY = 0;
        let startX = 0;
        let isScrolling = false;
        
        sliderContainer.addEventListener('touchstart', function(e) {
            startY = e.touches[0].pageY;
            startX = e.touches[0].pageX;
            isScrolling = false;
        });
        
        sliderContainer.addEventListener('touchmove', function(e) {
            const currentY = e.touches[0].pageY;
            const currentX = e.touches[0].pageX;
            const diffY = Math.abs(currentY - startY);
            const diffX = Math.abs(currentX - startX);
            
            // Determine if user is scrolling vertically
            if (diffY > diffX) {
                isScrolling = true;
            }
            
            // Prevent horizontal scroll if swiping slider
            if (!isScrolling && diffX > 10) {
                e.preventDefault();
            }
        });
    }
}

function handleOrientationChange() {
    // Handle orientation changes smoothly
    window.addEventListener('orientationchange', function() {
        // Small delay to ensure viewport has updated
        setTimeout(() => {
            // Recalculate slider dimensions if needed
            if (heroSlider && heroSlider.slides) {
                heroSlider.slides.forEach(slide => {
                    slide.style.height = '';
                });
            }
            
            // Trigger resize event for other components
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });
    
    // Handle resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Adjust layout after resize
            adjustLayoutForViewport();
        }, 250);
    });
}

function adjustLayoutForViewport() {
    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    
    // Adjust hero section height for very small screens
    if (viewport.width < 480 && viewport.height < 600) {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.minHeight = 'auto';
        }
    }
    
    // Adjust modal positioning
    const modals = document.querySelectorAll('.contact-modal');
    modals.forEach(modal => {
        if (viewport.height < 600) {
            modal.style.maxHeight = '90vh';
            modal.style.overflow = 'auto';
        }
    });
}

function optimizeScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll-to-top functionality for long pages
    let scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.id = 'scrollToTop';
        scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        document.body.appendChild(scrollToTopBtn);
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
}

// Initialize mobile enhancements when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileEnhancements();
});

// Handle page visibility changes (for mobile app-like behavior)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden (user switched tabs/apps)
        if (heroSlider) {
            heroSlider.stopAutoSlide();
        }
    } else {
        // Page is visible again
        if (heroSlider) {
            heroSlider.startAutoSlide();
        }
    }
});