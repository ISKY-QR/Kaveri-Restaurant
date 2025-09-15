// ----- Language Setup -----
let currentLang = "en"; // default English

const translations = {
  en: {
    title: "Welcome to The Kaveri Family Restaurant",
    subtitle: "Taste of Home",
    tip: "Tip: Click on any item to view its details!",
    price: "Price",
    sections: {
      breakfast: "Breakfast",
      starters: "Starters",
      main: "Main Course",
      drinks: "Drinks",
      desserts: "Desserts",
      snacks: "Snacks",
    }
  },
  hi: {
    title: "द टेस्ट जर्नल में आपका स्वागत है",
    subtitle: "घर का स्वाद",
    tip: "सलाह: विवरण देखने के लिए किसी भी आइटम पर क्लिक करें!",
    price: "कीमत",
    sections: {
      breakfast: "नाश्ता",
      starters: "स्टार्टर",
      main: "मुख्य भोजन",
      drinks: "पेय",
      desserts: "मिठाइयाँ",
      snacks: "स्नैक्स",
    }
  }
};


const menuItems = [

  //Snacks


  {
    type: "snacks",
    name: { en: "Paneer Pakoda", hi: "पनीर पकौड़ा" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?paneer-pakoda",
    about: { en: "Crispy fried fritters stuffed with paneer.", hi: "पनीर से बने कुरकुरे तले हुए पकौड़े।" },
    ingredients: { en: ["Paneer", "Gram Flour", "Spices"], hi: ["पनीर", "बेसन", "मसाले"] }
  },
  {
    type: "snacks",
    name: { en: "Veg Pakoda", hi: "वेज पकौड़ा" },
    price: 170,
    image: "https://source.unsplash.com/400x300/?veg-pakoda",
    about: { en: "Assorted vegetables dipped in gram flour batter and fried.", hi: "मिक्स सब्ज़ियों से बने बेसन लिपटे तले हुए पकौड़े।" },
    ingredients: { en: ["Vegetables", "Gram Flour", "Spices"], hi: ["सब्ज़ियां", "बेसन", "मसाले"] }
  },
  {
    type: "snacks",
    name: { en: "Onion Chita Pakoda", hi: "प्याज़ चीता पकौड़ा" },
    price: 160,
    image: "https://source.unsplash.com/400x300/?onion-pakoda",
    about: { en: "Crispy onion fritters seasoned with spices.", hi: "मसालों से बने कुरकुरे प्याज़ के पकौड़े।" },
    ingredients: { en: ["Onion", "Gram Flour", "Spices"], hi: ["प्याज़", "बेसन", "मसाले"] }
  },
  {
    type: "snacks",
    name: { en: "French Fries", hi: "फ्रेंच फ्राइज" },
    price: 150,
    image: "https://source.unsplash.com/400x300/?french-fries",
    about: { en: "Golden crispy potato fries served hot.", hi: "गरमागरम कुरकुरे आलू के फ्राइज।" },
    ingredients: { en: ["Potato", "Salt", "Oil"], hi: ["आलू", "नमक", "तेल"] }
  },
  {
    type: "snacks",
    name: { en: "Chicken Pakoda", hi: "चिकन पकौड़ा" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?chicken-pakoda",
    about: { en: "Juicy chicken pieces fried in spiced gram flour batter.", hi: "मसालेदार बेसन में लिपटे हुए तले हुए चिकन के टुकड़े।" },
    ingredients: { en: ["Chicken", "Gram Flour", "Spices"], hi: ["चिकन", "बेसन", "मसाले"] }
  },
  {
    type: "snacks",
    name: { en: "Egg Pakoda", hi: "एग पकौड़ा" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?egg-pakoda",
    about: { en: "Egg slices coated in spiced batter and deep fried.", hi: "मसालेदार बैटर में लिपटे अंडे के टुकड़े तले हुए।" },
    ingredients: { en: ["Eggs", "Gram Flour", "Spices"], hi: ["अंडे", "बेसन", "मसाले"] }
  },
  {
    type: "snacks",
    name: { en: "Chana Fry", hi: "चना फ्राई" },
    price: 160,
    image: "https://source.unsplash.com/400x300/?chana-fry",
    about: { en: "Spiced fried chickpeas served crispy.", hi: "मसालेदार तला हुआ कुरकुरा चना।" },
    ingredients: { en: ["Chana", "Spices", "Oil"], hi: ["चना", "मसाले", "तेल"] }
  },
  {
    type: "snacks",
    name: { en: "Pot Liver Fry", hi: "लिवर फ्राई" },
    price: 220,
    image: "https://source.unsplash.com/400x300/?liver-fry",
    about: { en: "Tender liver pieces stir-fried with spices.", hi: "मसालों के साथ भुना हुआ मुलायम लिवर।" },
    ingredients: { en: ["Liver", "Onion", "Spices"], hi: ["लिवर", "प्याज़", "मसाले"] }
  },


  //BreakFast


  {
    type: "breakfast",
    name: { en: "Butter Toast", hi: "बटर टोस्ट" },
    price: 60,
    image: "https://source.unsplash.com/400x300/?butter-toast",
    about: { en: "Crispy toast with a layer of butter.", hi: "कुरकुरी टोस्ट जिस पर मक्खन लगाया गया हो।" },
    ingredients: { en: ["Bread", "Butter"], hi: ["ब्रेड", "मक्खन"] }
  },
  {
    type: "breakfast",
    name: { en: "Veg Sandwich", hi: "वेज सैंडविच" },
    price: 70,
    image: "https://source.unsplash.com/400x300/?veg-sandwich",
    about: { en: "Fresh vegetable sandwich with chutney.", hi: "ताज़ा सब्ज़ियों से बना सैंडविच चटनी के साथ।" },
    ingredients: { en: ["Bread", "Vegetables", "Chutney"], hi: ["ब्रेड", "सब्ज़ियां", "चटनी"] }
  },
  {
    type: "breakfast",
    name: { en: "Egg Sandwich", hi: "एग सैंडविच" },
    price: 90,
    image: "https://source.unsplash.com/400x300/?egg-sandwich",
    about: { en: "Sandwich stuffed with boiled or fried eggs.", hi: "उबले या तले अंडे से भरा हुआ सैंडविच।" },
    ingredients: { en: ["Bread", "Eggs", "Butter"], hi: ["ब्रेड", "अंडे", "मक्खन"] }
  },
  {
    type: "breakfast",
    name: { en: "Chhola Bhatura", hi: "छोला भटूरा" },
    price: 120,
    image: "https://source.unsplash.com/400x300/?chole-bhature",
    about: { en: "Classic North Indian dish with spicy chickpeas and fried bread.", hi: "मसालेदार छोले और तली हुई भटूरा की लोकप्रिय उत्तर भारतीय डिश।" },
    ingredients: { en: ["Chickpeas", "Flour", "Spices"], hi: ["चना", "आटा", "मसाले"] }
  },
  {
    type: "breakfast",
    name: { en: "Puri Sabji", hi: "पूरी सब्ज़ी" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?puri-sabji",
    about: { en: "Deep-fried puris served with spiced potato curry.", hi: "तली हुई पूरी मसालेदार आलू की सब्ज़ी के साथ।" },
    ingredients: { en: ["Wheat Flour", "Potato", "Spices"], hi: ["गेहूं का आटा", "आलू", "मसाले"] }
  },
  {
    type: "breakfast",
    name: { en: "Chicken Sandwich", hi: "चिकन सैंडविच" },
    price: 110,
    image: "https://source.unsplash.com/400x300/?chicken-sandwich",
    about: { en: "Sandwich stuffed with seasoned chicken and veggies.", hi: "मसालेदार चिकन और सब्ज़ियों से भरा हुआ सैंडविच।" },
    ingredients: { en: ["Bread", "Chicken", "Vegetables"], hi: ["ब्रेड", "चिकन", "सब्ज़ियां"] }
  },
  {
    type: "breakfast",
    name: { en: "Omelet Sandwich", hi: "ऑमलेट सैंडविच" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?omelet-sandwich",
    about: { en: "Toasted bread filled with a fluffy omelet.", hi: "फूला हुआ ऑमलेट भरा हुआ टोस्टेड ब्रेड।" },
    ingredients: { en: ["Bread", "Eggs", "Butter"], hi: ["ब्रेड", "अंडे", "मक्खन"] }
  },



  // ⭐ Starters
  {
    type: "starters",
    name: { en: "Paneer Tikka", hi: "पनीर टिक्का" },
    price: 250,
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4WPcEMBznpu8pefQz_M9q1HztuUBZKlRIU5YatnGAlpQQuDfM2O2NNf3URvv31CTb5YxuSxCHwHNLwFGJcO3l9EJh8Y4E3lTsMMvnCa48fg",
    about: {
      en: "Classic marinated paneer grilled with peppers.",
      hi: "क्लासिक मैरिनेटेड पनीर शिमला मिर्च के साथ ग्रिल्ड।"
    },
    ingredients: {
      en: ["Paneer", "Yogurt", "Spices"],
      hi: ["पनीर", "दही", "मसाले"]
    }
  },
  {
    type: "starters",
    name: { en: "Spring Rolls", hi: "स्प्रिंग रोल्स" },
    price: 180,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&w=400&q=80",
    about: {
      en: "Crispy veg rolls with tangy dip.",
      hi: "कुरकुरे वेज रोल्स खट्टे डिप के साथ।"
    },
    ingredients: {
      en: ["Cabbage", "Carrot", "Flour"],
      hi: ["पत्ता गोभी", "गाजर", "आटा"]
    }
  },
  {
    type: "starters",
    name: { en: "Vegetable Pakoda", hi: "सब्जी पकौड़ा" },
    price: 140,
    image: "https://images.unsplash.com/photo-1512058564366-c9e6d620b981?auto=format&w=400&q=80",
    about: {
      en: "Fritters made from mixed veggies.",
      hi: "मिक्स सब्जियों से बने पकौड़े।"
    },
    ingredients: {
      en: ["Potato", "Spinach", "Gram Flour"],
      hi: ["आलू", "पालक", "बेसन"]
    }
  },
  {
    type: "starters",
    name: { en: "Chicken Kebab", hi: "चिकन कबाब" },
    price: 300,
    image: "https://images.unsplash.com/photo-1604908176997-125f3c23711b?auto=format&w=400&q=80",
    about: {
      en: "Juicy grilled chicken skewers with spices.",
      hi: "मसालों के साथ रसदार ग्रिल्ड चिकन कबाब।"
    },
    ingredients: {
      en: ["Chicken", "Spices", "Onion"],
      hi: ["चिकन", "मसाले", "प्याज"]
    }
  },

  // 🍛 Main Course
  {
    type: "main",
    name: { en: "Dal Makhani", hi: "दाल मखनी" },
    price: 220,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69FeaPjtsF4HJ5FnURAZmRg8MhZTWaW9mRg&s",
    about: {
      en: "Creamy black lentils cooked overnight.",
      hi: "क्रीमी काली दाल रात भर पकी हुई।"
    },
    ingredients: {
      en: ["Black Lentils", "Butter", "Cream"],
      hi: ["काली दाल", "मक्खन", "क्रीम"]
    }
  },
  {
    type: "main",
    name: { en: "Butter Chicken", hi: "बटर चिकन" },
    price: 350,
    image: "https://images.unsplash.com/photo-1604908553486-02d2dbb45752?auto=format&w=400&q=80",
    about: {
      en: "Rich creamy tomato-based chicken curry.",
      hi: "गाढ़ी क्रीमी टमाटर आधारित चिकन करी।"
    },
    ingredients: {
      en: ["Chicken", "Butter", "Tomato"],
      hi: ["चिकन", "मक्खन", "टमाटर"]
    }
  },
  {
    type: "main",
    name: { en: "Shahi Paneer", hi: "शाही पनीर" },
    price: 280,
    image: "https://images.unsplash.com/photo-1622015663315-b26e7992a03d?auto=format&w=400&q=80",
    about: {
      en: "Royal cottage cheese curry with cream.",
      hi: "क्रीम के साथ शाही पनीर की करी।"
    },
    ingredients: {
      en: ["Paneer", "Cream", "Cashew"],
      hi: ["पनीर", "क्रीम", "काजू"]
    }
  },
  {
    type: "main",
    name: { en: "Veg Biryani", hi: "वेज बिरयानी" },
    price: 240,
    image: "https://images.unsplash.com/photo-1629720608269-77491e30a17f?auto=format&w=400&q=80",
    about: {
      en: "Fragrant rice with mixed vegetables.",
      hi: "सुगंधित चावल और मिक्स सब्जियों की बिरयानी।"
    },
    ingredients: {
      en: ["Rice", "Vegetables", "Spices"],
      hi: ["चावल", "सब्जियां", "मसाले"]
    }
  },

  // 🥤 Drinks
  {
    type: "drinks",
    name: { en: "Masala Chai", hi: "मसाला चाय" },
    price: 50,
    image: "https://cdn.shopify.com/s/files/1/0758/6929/0779/files/Masala_Tea_-_Annams_Recipes_Shop_2_480x480.jpg?v=1732347934",
    about: {
      en: "Indian spiced tea with milk.",
      hi: "भारतीय मसालों वाली दूध की चाय।"
    },
    ingredients: {
      en: ["Tea", "Milk", "Spices"],
      hi: ["चाय", "दूध", "मसाले"]
    }
  },
  {
    type: "drinks",
    name: { en: "Mango Lassi", hi: "मैंगो लस्सी" },
    price: 90,
    image: "https://images.unsplash.com/photo-1621243434118-7c7b1fdf88ec?auto=format&w=400&q=80",
    about: {
      en: "Refreshing mango yogurt drink.",
      hi: "ताज़गी भरा आम और दही का पेय।"
    },
    ingredients: {
      en: ["Mango", "Yogurt", "Sugar"],
      hi: ["आम", "दही", "चीनी"]
    }
  },
  {
    type: "drinks",
    name: { en: "Cold Coffee", hi: "कोल्ड कॉफी" },
    price: 120,
    image: "https://images.unsplash.com/photo-1621827972971-1906c5be45e3?auto=format&w=400&q=80",
    about: {
      en: "Chilled coffee with ice cream.",
      hi: "आइसक्रीम के साथ ठंडी कॉफी।"
    },
    ingredients: {
      en: ["Coffee", "Milk", "Ice Cream"],
      hi: ["कॉफी", "दूध", "आइसक्रीम"]
    }
  },
  {
    type: "drinks",
    name: { en: "Fresh Lime Soda", hi: "फ्रेश लाइम सोडा" },
    price: 70,
    image: "https://images.unsplash.com/photo-1590080876150-d2e6b1e8b06b?auto=format&w=400&q=80",
    about: {
      en: "Sparkling soda with lemon and salt.",
      hi: "नींबू और नमक के साथ स्पार्कलिंग सोडा।"
    },
    ingredients: {
      en: ["Lemon", "Soda", "Salt"],
      hi: ["नींबू", "सोडा", "नमक"]
    }
  },

  // 🍨 Desserts
  {
    type: "desserts",
    name: { en: "Gulab Jamun", hi: "गुलाब जामुन" },
    price: 100,
    image: "https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img_4f2bd570-4f11-4dba-8386-fa5a26392cd0.webp?v=1725262395&width=1500",
    about: {
      en: "Soft fried milk balls in sugar syrup.",
      hi: "चीनी की चाशनी में नरम तले हुए दूध के गोले।"
    },
    ingredients: {
      en: ["Milk Powder", "Flour", "Sugar Syrup"],
      hi: ["मिल्क पाउडर", "आटा", "चीनी की चाशनी"]
    }
  },
  {
    type: "desserts",
    name: { en: "Rasmalai", hi: "रस मलाई" },
    price: 150,
    image: "https://images.unsplash.com/photo-1632823463254-364a7e06e5cc?auto=format&w=400&q=80",
    about: {
      en: "Soft paneer soaked in flavored milk.",
      hi: "फ्लेवर वाले दूध में डूबा हुआ नरम पनीर।"
    },
    ingredients: {
      en: ["Paneer", "Milk", "Saffron"],
      hi: ["पनीर", "दूध", "केसर"]
    }
  },
  {
    type: "desserts",
    name: { en: "Ice Cream Sundae", hi: "आइसक्रीम संडे" },
    price: 180,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&w=400&q=80",
    about: {
      en: "Vanilla ice cream with toppings.",
      hi: "टॉपिंग्स के साथ वनीला आइसक्रीम।"
    },
    ingredients: {
      en: ["Ice Cream", "Chocolate Syrup", "Nuts"],
      hi: ["आइसक्रीम", "चॉकलेट सिरप", "मेवे"]
    }
  },
  {
    type: "desserts",
    name: { en: "Jalebi", hi: "जलेबी" },
    price: 80,
    image: "https://images.unsplash.com/photo-1604908553486-02d2dbb45752?auto=format&w=400&q=80",
    about: {
      en: "Crispy fried sweet spirals.",
      hi: "कुरकुरी तली हुई मीठी जलेबी।"
    },
    ingredients: {
      en: ["Flour", "Sugar Syrup", "Oil"],
      hi: ["आटा", "चीनी की चाशनी", "तेल"]
    }
  }
];

const menuSections = [


  // { type: "starters" },
  { type: "breakfast" },
  { type: "snacks" },
  { type: "main" },
  { type: "drinks" },
  { type: "desserts" }
];

// ----- QR Code -----
document.addEventListener("DOMContentLoaded", () => {


  const urlParams = new URLSearchParams(window.location.search);
  const isMenuPage = urlParams.get("menu") === "true";

  if (isMenuPage) {
    // Show Welcome Screen directly
    document.getElementById("qr-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
  } else {
    // Show QR code (points to ?menu=true link)
    const qrCanvas = document.getElementById("qrcode");
    QRCode.toCanvas(qrCanvas, window.location.href + "?menu=true", function (error) {
      if (error) console.error(error);
    });
  }

  // Open Menu button
  document.getElementById("openMenuBtn").addEventListener("click", () => {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("menu-book").style.display = "block";
  });












  const qrCanvas = document.getElementById("qrcode");
  QRCode.toCanvas(qrCanvas, window.location.href, function (error) {
    if (error) console.error(error);
  });

  document.getElementById("openMenuBtn").addEventListener("click", () => {
    document.getElementById("qr-screen").style.display = "none";
    document.getElementById("menu-book").style.display = "block";
  });

  // Language toggle button
  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "hi" : "en";
    document.getElementById("langToggle").textContent =
      currentLang === "en" ? "हिंदी" : "English";
    renderMenu();
  });

  renderMenu();

  // Modal close
  document.querySelector(".close").onclick = function () {
    document.getElementById("modal").style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
  };
});

// ----- Render Menu -----
function renderMenu() {
  const t = translations[currentLang];
  document.getElementById("title").textContent = t.title;
  document.getElementById("subtitle").textContent = t.subtitle;

  const container = document.getElementById("menu-sections");
  container.innerHTML = "";

  let tipAdded = false;

  menuSections.forEach((sec) => {
    const secDiv = document.createElement("section");
    secDiv.className = "menu-section"; // stays collapsed by default

    const headline = document.createElement("h2");
    headline.className = "menu-headline";
    headline.textContent = t.sections[sec.type];

    // toggle open/close
    headline.addEventListener("click", () => {
      secDiv.classList.toggle("active");
    });

    if (!tipAdded && sec.type === "starters") {
      const tip = document.createElement("p");
      tip.className = "menu-tip";
      tip.textContent = t.tip;
      secDiv.appendChild(tip);
      secDiv.appendChild(headline);
      tipAdded = true;
    } else {
      secDiv.appendChild(headline);
    }

    const ul = document.createElement("ul");
    ul.className = "menu-list";

    menuItems
      .filter((item) => item.type === sec.type)
      .forEach((item) => {
        const li = document.createElement("li");
        li.className = "menu-item";
        li.addEventListener("click", () => openModal(item));

        li.innerHTML = `
          <span class="menu-item-name">${item.name[currentLang]}</span>
          <span class="menu-item-price">₹${item.price}</span>
        `;
        ul.appendChild(li);
      });

    secDiv.appendChild(ul);
    container.appendChild(secDiv);
  });
}

// ----- Modal -----
function openModal(item) {
  const t = translations[currentLang];
  document.getElementById("modal-img").src = item.image;
  document.getElementById("modal-title").textContent = item.name[currentLang];
  document.getElementById("modal-desc").textContent = item.about[currentLang];
  document.getElementById("modal-price").textContent = `${t.price}: ₹${item.price}`;

  const ingUl = document.getElementById("modal-ingredients");
  ingUl.innerHTML = "";
  item.ingredients[currentLang].forEach((ing) => {
    ingUl.innerHTML += `<li>${ing}</li>`;
  });

  document.getElementById("modal").style.display = "block";
}

