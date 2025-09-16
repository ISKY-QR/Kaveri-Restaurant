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
      soupVegetarian: "soupVegetarian",
      basmatiRice: "basmatiRice",
      dal: 'dal',
      main: "Main Course",
      drinks: "Drinks",
      desserts: "Desserts",
      snacks: "Snacks",
      soupNonveg: "soupNonveg",
      starterVegChinese: "starterVegChinese",
      starterNonVegChinese: "starterNonVegChinese",
      vegNoodles: "vegNoodles",
      rotiNaanKulchaParatha: "rotiNaanKulchaParatha",
      basmatiRiceChineseVegNonVeg: "basmatiRiceChineseVegNonVeg",
      northIndianGreenVeg: "northIndianGreenVeg",
      mutton: "mutton",
      fish: "fish",
      egg: "egg",
      kababNonVegSpecial: "kababNonVegSpecial",
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
      soupVegetarian: "soupVegetarian",
      basmatiRice: "basmatiRice",
      dal: 'dal',
      soupNonveg: "soupNonveg",
      starterVegChinese: "starterVegChinese",
      starterNonVegChinese: "starterNonVegChinese",
      vegNoodles: "vegNoodles",
      rotiNaanKulchaParatha: "rotiNaanKulchaParatha",
      basmatiRiceChineseVegNonVeg: "basmatiRiceChineseVegNonVeg",
      northIndianGreenVeg: "northIndianGreenVeg",
      mutton: "mutton",
      fish: "fish",
      egg: "egg",
      kababNonVegSpecial: "kababNonVegSpecial",
    }
  }
};


const menuItems = [


  
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Tikka", hi: "चिकन टिक्का" },
    price: 300,
    image: "https://source.unsplash.com/400x300/?chicken-tikka",
    about: { en: "Juicy marinated chicken pieces roasted to perfection.", hi: "मसाले में मैरीनेट किए गए रसीले चिकन पीस तंदूर में रोस्ट किए गए।" },
    ingredients: { en: ["Chicken", "Yogurt", "Spices"], hi: ["चिकन", "दही", "मसाले"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Boti Kabab", hi: "चिकन बोटी कबाब" },
    price: 300,
    image: "https://source.unsplash.com/400x300/?chicken-boti-kabab",
    about: { en: "Tender chicken cubes grilled with spices.", hi: "मसालों के साथ ग्रिल किए गए मुलायम चिकन के टुकड़े।" },
    ingredients: { en: ["Chicken", "Spices", "Oil"], hi: ["चिकन", "मसाले", "तेल"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Sheek Kabab", hi: "चिकन सीख कबाब" },
    price: 350,
    image: "https://source.unsplash.com/400x300/?chicken-sheek-kabab",
    about: { en: "Minced chicken mixed with spices and grilled on skewers.", hi: "किमा चिकन मसालों के साथ मिलाकर सीख पर ग्रिल किया गया।" },
    ingredients: { en: ["Minced Chicken", "Onion", "Spices"], hi: ["किमा चिकन", "प्याज", "मसाले"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Hariyali Kabab", hi: "चिकन हरियाली कबाब" },
    price: 300,
    image: "https://source.unsplash.com/400x300/?hariyali-kabab",
    about: { en: "Green herb-marinated chicken grilled to perfection.", hi: "हरी जड़ी-बूटियों में मैरीनेट किया हुआ चिकन ग्रिल किया गया।" },
    ingredients: { en: ["Chicken", "Coriander", "Mint", "Spices"], hi: ["चिकन", "धनिया", "पुदीना", "मसाले"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Leg Kabab", hi: "चिकन लेग कबाब" },
    price: 300,
    image: "https://source.unsplash.com/400x300/?chicken-leg-kabab",
    about: { en: "Spicy roasted chicken leg piece.", hi: "मसालेदार रोस्टेड चिकन लेग पीस।" },
    ingredients: { en: ["Chicken Leg", "Spices", "Oil"], hi: ["चिकन लेग", "मसाले", "तेल"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Reshmi Kabab", hi: "चिकन रेशमी कबाब" },
    price: 350,
    image: "https://source.unsplash.com/400x300/?reshmi-kabab",
    about: { en: "Soft and creamy chicken kababs with a rich flavor.", hi: "मुलायम और क्रीमी स्वाद वाले चिकन कबाब।" },
    ingredients: { en: ["Chicken", "Cream", "Spices"], hi: ["चिकन", "क्रीम", "मसाले"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Tandoori (Full)", hi: "चिकन तंदूरी (पूरा)" },
    price: 550,
    image: "https://source.unsplash.com/400x300/?chicken-tandoori-full",
    about: { en: "Whole chicken marinated in tandoori spices and roasted.", hi: "तंदूरी मसालों में मैरीनेट किया गया पूरा चिकन।" },
    ingredients: { en: ["Whole Chicken", "Yogurt", "Spices"], hi: ["पूरा चिकन", "दही", "मसाले"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Tandoori (Half)", hi: "चिकन तंदूरी (आधा)" },
    price: 325,
    image: "https://source.unsplash.com/400x300/?chicken-tandoori-half",
    about: { en: "Half portion of chicken marinated with tandoori spices.", hi: "तंदूरी मसालों में मैरीनेट किया हुआ आधा चिकन।" },
    ingredients: { en: ["Chicken", "Yogurt", "Spices"], hi: ["चिकन", "दही", "मसाले"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Pahadi Kabab", hi: "चिकन पहाड़ी कबाब" },
    price: 300,
    image: "https://source.unsplash.com/400x300/?pahadi-kabab",
    about: { en: "Mountain-style chicken kabab with herbs and spices.", hi: "जड़ी-बूटियों और मसालों के साथ पहाड़ी स्टाइल चिकन कबाब।" },
    ingredients: { en: ["Chicken", "Herbs", "Spices"], hi: ["चिकन", "जड़ी-बूटियां", "मसाले"] }
  },
  {
    type: "kababNonVegSpecial",
    name: { en: "Chicken Malai Tikka", hi: "चिकन मलाई टिक्का" },
    price: 350,
    image: "https://source.unsplash.com/400x300/?chicken-malai-tikka",
    about: { en: "Creamy and tender chicken tikka with rich flavors.", hi: "क्रीमी और नरम चिकन टिक्का, गाढ़े स्वाद के साथ।" },
    ingredients: { en: ["Chicken", "Cream", "Spices"], hi: ["चिकन", "क्रीम", "मसाले"] }
  },


  {
    type: "egg",
    name: { en: "Egg Boiled", hi: "उबला अंडा" },
    price: 40,
    image: "https://source.unsplash.com/400x300/?boiled-egg",
    about: { en: "Simple and healthy boiled egg.", hi: "साधारण और स्वास्थ्यवर्धक उबला अंडा।" },
    ingredients: { en: ["Egg", "Salt"], hi: ["अंडा", "नमक"] }
  },
  {
    type: "egg",
    name: { en: "Egg Curry", hi: "अंडा करी" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?egg-curry",
    about: { en: "Boiled eggs cooked in spicy curry.", hi: "मसालेदार करी में पके हुए उबले अंडे।" },
    ingredients: { en: ["Egg", "Onion", "Tomato", "Spices"], hi: ["अंडा", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "egg",
    name: { en: "Egg Omlet", hi: "अंडा ऑमलेट" },
    price: 60,
    image: "https://source.unsplash.com/400x300/?egg-omelet",
    about: { en: "Fluffy and tasty egg omelet.", hi: "फूला हुआ और स्वादिष्ट अंडा ऑमलेट।" },
    ingredients: { en: ["Egg", "Onion", "Chilli", "Oil"], hi: ["अंडा", "प्याज", "मिर्च", "तेल"] }
  },
  {
    type: "egg",
    name: { en: "Egg Bhujia", hi: "अंडा भुजिया" },
    price: 60,
    image: "https://source.unsplash.com/400x300/?egg-bhujia",
    about: { en: "Scrambled eggs with spices.", hi: "मसालों के साथ बना अंडा भुजिया।" },
    ingredients: { en: ["Egg", "Onion", "Chilli", "Spices"], hi: ["अंडा", "प्याज", "मिर्च", "मसाले"] }
  },


  {
    type: "fish",
    name: { en: "Fish Fry", hi: "फिश फ्राई" },
    price: 130,
    image: "https://source.unsplash.com/400x300/?fish-fry",
    about: { en: "Crispy fried fish with spices.", hi: "मसालों के साथ कुरकुरी तली हुई मछली।" },
    ingredients: { en: ["Fish", "Spices", "Oil"], hi: ["मछली", "मसाले", "तेल"] }
  },
  {
    type: "fish",
    name: { en: "Fish Curry", hi: "फिश करी" },
    price: 150,
    image: "https://source.unsplash.com/400x300/?fish-curry",
    about: { en: "Traditional fish curry cooked with spices.", hi: "मसालों के साथ पकी हुई पारंपरिक फिश करी।" },
    ingredients: { en: ["Fish", "Onion", "Tomato", "Spices"], hi: ["मछली", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "fish",
    name: { en: "Fish Masala", hi: "फिश मसाला" },
    price: 150,
    image: "https://source.unsplash.com/400x300/?fish-masala",
    about: { en: "Fish cooked in spicy onion-tomato masala.", hi: "प्याज-टमाटर के मसाले में पकाई गई मछली।" },
    ingredients: { en: ["Fish", "Onion", "Tomato", "Spices"], hi: ["मछली", "प्याज", "टमाटर", "मसाले"] }
  },


  {
    type: "mutton",
    name: { en: "Mutton Masala", hi: "मटन मसाला" },
    price: "200/350",
    image: "https://source.unsplash.com/400x300/?mutton-masala",
    about: { en: "Tender mutton cooked in rich onion-tomato masala.", hi: "प्याज-टमाटर के मसाले में पका हुआ नरम मटन।" },
    ingredients: { en: ["Mutton", "Onion", "Tomato", "Spices"], hi: ["मटन", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "mutton",
    name: { en: "Mutton Kassa", hi: "मटन कसा" },
    price: 350,
    image: "https://source.unsplash.com/400x300/?mutton-kassa",
    about: { en: "Spicy and dry-style mutton preparation.", hi: "मसालेदार और ड्राई स्टाइल में बना मटन।" },
    ingredients: { en: ["Mutton", "Onion", "Garlic", "Spices"], hi: ["मटन", "प्याज", "लहसुन", "मसाले"] }
  },
  {
    type: "mutton",
    name: { en: "Mutton Rogan Josh", hi: "मटन रोगन जोश" },
    price: 370,
    image: "https://source.unsplash.com/400x300/?rogan-josh",
    about: { en: "Kashmiri style aromatic mutton curry.", hi: "कश्मीरी स्टाइल की सुगंधित मटन करी।" },
    ingredients: { en: ["Mutton", "Curd", "Spices", "Onion"], hi: ["मटन", "दही", "मसाले", "प्याज"] }
  },
  {
    type: "mutton",
    name: { en: "Mutton Curry", hi: "मटन करी" },
    price: 330,
    image: "https://source.unsplash.com/400x300/?mutton-curry",
    about: { en: "Traditional Indian mutton curry with spices.", hi: "भारतीय मसालों से बनी पारंपरिक मटन करी।" },
    ingredients: { en: ["Mutton", "Onion", "Tomato", "Spices"], hi: ["मटन", "प्याज", "टमाटर", "मसाले"] }
  },



  {
    type: "northIndianGreenVeg",
    name: { en: "Matar Paneer", hi: "मटर पनीर" },
    price: "160/250",
    image: "https://source.unsplash.com/400x300/?matar-paneer",
    about: { en: "Cottage cheese and peas cooked in a rich tomato gravy.", hi: "पनीर और मटर टमाटर की ग्रेवी में पकाया गया।" },
    ingredients: { en: ["Paneer", "Peas", "Tomato", "Spices"], hi: ["पनीर", "मटर", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Mix Veg", hi: "मिक्स वेज" },
    price: "180/220",
    image: "https://source.unsplash.com/400x300/?mix-veg",
    about: { en: "Seasonal vegetables cooked with Indian spices.", hi: "भारतीय मसालों के साथ पकाई गई मौसमी सब्ज़ियां।" },
    ingredients: { en: ["Carrot", "Beans", "Cauliflower", "Spices"], hi: ["गाजर", "बीन्स", "गोभी", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Aloo Govi Masala", hi: "आलू गोभी मसाला" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?aloo-gobi",
    about: { en: "Potatoes and cauliflower cooked in spicy masala.", hi: "आलू और गोभी मसालेदार ग्रेवी में पकाए गए।" },
    ingredients: { en: ["Potato", "Cauliflower", "Tomato", "Spices"], hi: ["आलू", "गोभी", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Aloo Govi Matar", hi: "आलू गोभी मटर" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?aloo-gobi-matar",
    about: { en: "Potatoes, cauliflower and peas cooked in masala.", hi: "आलू, गोभी और मटर मसालों के साथ पकाए गए।" },
    ingredients: { en: ["Potato", "Cauliflower", "Peas", "Spices"], hi: ["आलू", "गोभी", "मटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Mushroom Masala", hi: "मशरूम मसाला" },
    price: "160/280",
    image: "https://source.unsplash.com/400x300/?mushroom-masala",
    about: { en: "Mushrooms cooked in spicy onion-tomato gravy.", hi: "प्याज-टमाटर की ग्रेवी में पका हुआ मशरूम।" },
    ingredients: { en: ["Mushroom", "Onion", "Tomato", "Spices"], hi: ["मशरूम", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Chana Masala", hi: "चना मसाला" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?chana-masala",
    about: { en: "Chickpeas cooked in spicy tomato onion gravy.", hi: "चना मसालेदार टमाटर प्याज की ग्रेवी में पकाया गया।" },
    ingredients: { en: ["Chickpeas", "Onion", "Tomato", "Spices"], hi: ["चना", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Veg Jaipuria", hi: "वेज जयपुरिया" },
    price: 210,
    image: "https://source.unsplash.com/400x300/?veg-curry",
    about: { en: "Mixed vegetables cooked in rich Jaipur-style curry.", hi: "जयपुर स्टाइल की समृद्ध करी में पकी मिक्स सब्ज़ियां।" },
    ingredients: { en: ["Mix Vegetables", "Cream", "Spices"], hi: ["मिक्स सब्ज़ियां", "क्रीम", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Aloo Dum", hi: "आलू दम" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?dum-aloo",
    about: { en: "Potatoes slow cooked in rich tomato gravy.", hi: "आलू को धीमी आंच पर टमाटर की ग्रेवी में पकाया गया।" },
    ingredients: { en: ["Potato", "Tomato", "Curd", "Spices"], hi: ["आलू", "टमाटर", "दही", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Aloo Jeera", hi: "आलू जीरा" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?aloo-jeera",
    about: { en: "Potatoes stir fried with cumin seeds.", hi: "आलू को जीरे के साथ तला गया।" },
    ingredients: { en: ["Potato", "Cumin", "Oil", "Spices"], hi: ["आलू", "जीरा", "तेल", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Aloo Soyabin Masala", hi: "आलू सोयाबीन मसाला" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?soya-curry",
    about: { en: "Potatoes and soybean chunks cooked in spicy masala.", hi: "आलू और सोयाबीन मसालेदार ग्रेवी में पकाए गए।" },
    ingredients: { en: ["Potato", "Soybean", "Tomato", "Spices"], hi: ["आलू", "सोयाबीन", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Veg Navratan Korma", hi: "वेज नवरतन कोरमा" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?navratan-korma",
    about: { en: "A royal curry with nine vegetables and dry fruits.", hi: "नौ सब्ज़ियों और मेवों से बनी शाही करी।" },
    ingredients: { en: ["Mix Vegetables", "Dry Fruits", "Cream", "Spices"], hi: ["मिक्स सब्ज़ियां", "मेवे", "क्रीम", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Aloo Dum Kashmiri", hi: "आलू दम कश्मीरी" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?kashmiri-dum-aloo",
    about: { en: "Kashmiri style dum aloo with rich spices.", hi: "कश्मीरी मसालों के साथ दम आलू।" },
    ingredients: { en: ["Potato", "Curd", "Spices"], hi: ["आलू", "दही", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Veg Jhal Ferozi", hi: "वेज झल फ़िरोज़ी" },
    price: 220,
    image: "https://source.unsplash.com/400x300/?veg-curry-spicy",
    about: { en: "Spicy mixed vegetable curry with rich gravy.", hi: "मसालेदार मिक्स वेज करी।" },
    ingredients: { en: ["Mix Vegetables", "Onion", "Tomato", "Spices"], hi: ["मिक्स सब्ज़ियां", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Sahi Malai Kofta", hi: "शाही मलाई कोफ्ता" },
    price: 260,
    image: "https://source.unsplash.com/400x300/?malai-kofta",
    about: { en: "Cottage cheese dumplings in creamy gravy.", hi: "क्रीम ग्रेवी में पनीर कोफ्ते।" },
    ingredients: { en: ["Paneer", "Cream", "Cashew", "Spices"], hi: ["पनीर", "क्रीम", "काजू", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Veg Kofta", hi: "वेज कोफ्ता" },
    price: 220,
    image: "https://source.unsplash.com/400x300/?veg-kofta",
    about: { en: "Vegetable dumplings in spicy curry.", hi: "मसालेदार करी में वेज कोफ्ते।" },
    ingredients: { en: ["Mix Vegetables", "Onion", "Tomato", "Spices"], hi: ["मिक्स सब्ज़ियां", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Paneer Butter Masala", hi: "पनीर बटर मसाला" },
    price: "140/240",
    image: "https://source.unsplash.com/400x300/?paneer-butter-masala",
    about: { en: "Cottage cheese cubes in creamy butter-tomato gravy.", hi: "मलाईदार बटर टमाटर की ग्रेवी में पनीर।" },
    ingredients: { en: ["Paneer", "Butter", "Tomato", "Cream"], hi: ["पनीर", "मक्खन", "टमाटर", "क्रीम"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Paneer Dopiyaza", hi: "पनीर दो प्याज़ा" },
    price: 260,
    image: "https://source.unsplash.com/400x300/?paneer-dopyaza",
    about: { en: "Paneer cooked with double onions and spices.", hi: "पनीर को डबल प्याज और मसालों के साथ पकाया गया।" },
    ingredients: { en: ["Paneer", "Onion", "Spices"], hi: ["पनीर", "प्याज", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Kadhai Paneer", hi: "कड़ाही पनीर" },
    price: 260,
    image: "https://source.unsplash.com/400x300/?kadhai-paneer",
    about: { en: "Paneer cooked with capsicum, onion, tomato and kadhai spices.", hi: "कड़ाही मसालों के साथ पका हुआ पनीर।" },
    ingredients: { en: ["Paneer", "Capsicum", "Onion", "Tomato"], hi: ["पनीर", "शिमला मिर्च", "प्याज", "टमाटर"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Paneer Kolhapuri", hi: "पनीर कोल्हापुरी" },
    price: 260,
    image: "https://source.unsplash.com/400x300/?paneer-kolhapuri",
    about: { en: "Spicy Kolhapuri style paneer curry.", hi: "कोल्हापुरी मसालों वाली तीखी पनीर करी।" },
    ingredients: { en: ["Paneer", "Onion", "Tomato", "Spices"], hi: ["पनीर", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Paneer Tikka Butter Masala", hi: "पनीर टिक्का बटर मसाला" },
    price: 280,
    image: "https://source.unsplash.com/400x300/?paneer-tikka-masala",
    about: { en: "Paneer tikka cooked in butter tomato gravy.", hi: "बटर टमाटर की ग्रेवी में पका हुआ पनीर टिक्का।" },
    ingredients: { en: ["Paneer", "Tomato", "Butter", "Cream"], hi: ["पनीर", "टमाटर", "मक्खन", "क्रीम"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Paneer Kofta", hi: "पनीर कोफ्ता" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?paneer-kofta",
    about: { en: "Paneer dumplings served in rich curry.", hi: "समृद्ध ग्रेवी में पनीर के कोफ्ते।" },
    ingredients: { en: ["Paneer", "Cream", "Tomato", "Spices"], hi: ["पनीर", "क्रीम", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Mushroom Paneer", hi: "मशरूम पनीर" },
    price: 280,
    image: "https://source.unsplash.com/400x300/?mushroom-paneer",
    about: { en: "Paneer and mushrooms cooked in spicy curry.", hi: "मसालेदार करी में पनीर और मशरूम।" },
    ingredients: { en: ["Paneer", "Mushroom", "Onion", "Tomato"], hi: ["पनीर", "मशरूम", "प्याज", "टमाटर"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Mushroom Matar", hi: "मशरूम मटर" },
    price: 280,
    image: "https://source.unsplash.com/400x300/?mushroom-matar",
    about: { en: "Mushrooms and peas cooked in spicy curry.", hi: "मसालेदार करी में मशरूम और मटर।" },
    ingredients: { en: ["Mushroom", "Peas", "Tomato", "Spices"], hi: ["मशरूम", "मटर", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Paneer Handi", hi: "पनीर हांडी" },
    price: 280,
    image: "https://source.unsplash.com/400x300/?paneer-handi",
    about: { en: "Paneer cooked in a traditional handi with spices.", hi: "पारंपरिक हांडी में मसालों के साथ पका हुआ पनीर।" },
    ingredients: { en: ["Paneer", "Onion", "Tomato", "Spices"], hi: ["पनीर", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Paneer Masala", hi: "पनीर मसाला" },
    price: 260,
    image: "https://source.unsplash.com/400x300/?paneer-masala",
    about: { en: "Paneer cooked in spicy onion tomato gravy.", hi: "प्याज टमाटर की मसालेदार ग्रेवी में पका हुआ पनीर।" },
    ingredients: { en: ["Paneer", "Onion", "Tomato", "Spices"], hi: ["पनीर", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Sahi Paneer", hi: "शाही पनीर" },
    price: "150/250",
    image: "https://source.unsplash.com/400x300/?shahi-paneer",
    about: { en: "Paneer cooked in creamy tomato cashew gravy.", hi: "काजू और टमाटर की मलाईदार ग्रेवी में पका पनीर।" },
    ingredients: { en: ["Paneer", "Tomato", "Cashew", "Cream"], hi: ["पनीर", "टमाटर", "काजू", "क्रीम"] }
  },
  {
    type: "northIndianGreenVeg",
    name: { en: "Alloo Bhujia + Veg.", hi: "आलू भुजिया + वेज" },
    price: 120,
    image: "https://source.unsplash.com/400x300/?aloo-bhujia",
    about: { en: "Aloo bhujia served with seasonal vegetables.", hi: "आलू भुजिया मौसमी सब्ज़ियों के साथ।" },
    ingredients: { en: ["Potato", "Vegetables", "Spices"], hi: ["आलू", "सब्ज़ियां", "मसाले"] }
  },




  {
    type: "dal",
    name: { en: "Yellow Dal Fry", hi: "पीली दाल फ्राई" },
    price: 135,
    image: "https://source.unsplash.com/400x300/?dal-fry",
    about: { en: "Yellow lentils tempered with spices.", hi: "मसालों के साथ तली हुई पीली दाल।" },
    ingredients: { en: ["Yellow Lentils", "Onion", "Tomato", "Spices"], hi: ["पीली दाल", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "dal",
    name: { en: "Dal Tadka", hi: "दाल तड़का" },
    price: 150,
    image: "https://source.unsplash.com/400x300/?dal-tadka",
    about: { en: "Lentils cooked and tempered with ghee and spices.", hi: "घी और मसालों के तड़के के साथ पकी हुई दाल।" },
    ingredients: { en: ["Lentils", "Garlic", "Onion", "Ghee"], hi: ["दाल", "लहसुन", "प्याज", "घी"] }
  },
  {
    type: "dal",
    name: { en: "Dal Makhani", hi: "दाल मखनी" },
    price: 220,
    image: "https://source.unsplash.com/400x300/?dal-makhani",
    about: { en: "Creamy black lentils simmered with butter.", hi: "मक्खन और क्रीम के साथ पकी हुई काली दाल।" },
    ingredients: { en: ["Black Lentils", "Kidney Beans", "Cream", "Butter"], hi: ["काली दाल", "राजमा", "क्रीम", "मक्खन"] }
  },
  {
    type: "dal",
    name: { en: "Egg Tadka", hi: "एग तड़का" },
    price: 160,
    image: "https://source.unsplash.com/400x300/?egg-dal",
    about: { en: "Dal tadka cooked with scrambled eggs.", hi: "फेंटे हुए अंडों के साथ दाल तड़का।" },
    ingredients: { en: ["Lentils", "Eggs", "Onion", "Spices"], hi: ["दाल", "अंडे", "प्याज", "मसाले"] }
  },
  {
    type: "dal",
    name: { en: "Kaveri Spl. Dal Fry", hi: "कावेरी स्पेशल दाल फ्राई" },
    price: 170,
    image: "https://source.unsplash.com/400x300/?special-dal",
    about: { en: "Special house-style dal fry with spices.", hi: "घर के खास अंदाज़ में बनी दाल फ्राई।" },
    ingredients: { en: ["Lentils", "Onion", "Tomato", "Spices"], hi: ["दाल", "प्याज", "टमाटर", "मसाले"] }
  },
  {
    type: "dal",
    name: { en: "Chana Dal Tadka", hi: "चना दाल तड़का" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?chana-dal",
    about: { en: "Split chickpeas cooked with onion, tomato, and spices.", hi: "प्याज, टमाटर और मसालों के साथ बनी चना दाल।" },
    ingredients: { en: ["Chana Dal", "Onion", "Tomato", "Spices"], hi: ["चना दाल", "प्याज", "टमाटर", "मसाले"] }
  },


  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Steam Rice", hi: "सादा चावल" },
    price: 80,
    image: "https://source.unsplash.com/400x300/?plain-rice",
    about: { en: "Simple steamed basmati rice.", hi: "साधारण उबला बासमती चावल।" },
    ingredients: { en: ["Rice", "Water"], hi: ["चावल", "पानी"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Jeera Rice", hi: "जीरा चावल" },
    price: 120,
    image: "https://source.unsplash.com/400x300/?jeera-rice",
    about: { en: "Steamed basmati rice tempered with cumin.", hi: "जीरे से तड़का लगा बासमती चावल।" },
    ingredients: { en: ["Rice", "Cumin", "Oil"], hi: ["चावल", "जीरा", "तेल"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Veg Fried Rice", hi: "वेज फ्राइड राइस" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?veg-fried-rice",
    about: { en: "Fried rice with fresh vegetables.", hi: "ताज़ी सब्ज़ियों के साथ तला हुआ चावल।" },
    ingredients: { en: ["Rice", "Mixed Vegetables", "Soy Sauce"], hi: ["चावल", "मिश्रित सब्ज़ियाँ", "सोया सॉस"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Mix Veg Fried Rice", hi: "मिक्स वेज फ्राइड राइस" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?fried-rice",
    about: { en: "Fried rice with a mix of seasonal vegetables.", hi: "मौसमी सब्ज़ियों के साथ तला हुआ चावल।" },
    ingredients: { en: ["Rice", "Carrot", "Beans", "Capsicum"], hi: ["चावल", "गाजर", "फली", "शिमला मिर्च"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Veg Pulao", hi: "वेज पुलाव" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?veg-pulao",
    about: { en: "Fragrant rice cooked with vegetables.", hi: "सब्ज़ियों के साथ सुगंधित पुलाव।" },
    ingredients: { en: ["Rice", "Vegetables", "Spices"], hi: ["चावल", "सब्ज़ियाँ", "मसाले"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Green Peas Pulao", hi: "मटर पुलाव" },
    price: 160,
    image: "https://source.unsplash.com/400x300/?peas-pulao",
    about: { en: "Basmati rice cooked with green peas.", hi: "हरी मटर के साथ बना बासमती पुलाव।" },
    ingredients: { en: ["Rice", "Green Peas", "Spices"], hi: ["चावल", "हरी मटर", "मसाले"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Mushroom Fried Rice", hi: "मशरूम फ्राइड राइस" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?mushroom-fried-rice",
    about: { en: "Stir-fried rice with mushrooms and veggies.", hi: "मशरूम और सब्ज़ियों के साथ तला हुआ चावल।" },
    ingredients: { en: ["Rice", "Mushrooms", "Soy Sauce"], hi: ["चावल", "मशरूम", "सोया सॉस"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Veg Biryani", hi: "वेज बिरयानी" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?veg-biryani",
    about: { en: "Spiced rice layered with vegetables.", hi: "सब्ज़ियों के साथ मसालेदार बिरयानी।" },
    ingredients: { en: ["Rice", "Vegetables", "Spices"], hi: ["चावल", "सब्ज़ियाँ", "मसाले"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Kashmiri Pulao", hi: "कश्मीरी पुलाव" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?kashmiri-pulao",
    about: { en: "Rich pulao with dry fruits and saffron.", hi: "सूखे मेवे और केसर वाला पुलाव।" },
    ingredients: { en: ["Rice", "Dry Fruits", "Saffron"], hi: ["चावल", "सूखे मेवे", "केसर"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Paneer Biryani", hi: "पनीर बिरयानी" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?paneer-biryani",
    about: { en: "Biryani made with spiced paneer cubes.", hi: "मसालेदार पनीर के टुकड़ों के साथ बिरयानी।" },
    ingredients: { en: ["Rice", "Paneer", "Spices"], hi: ["चावल", "पनीर", "मसाले"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Veg Schezwan Fried Rice", hi: "वेज़ शेज़वान फ्राइड राइस" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?schezwan-rice",
    about: { en: "Spicy Schezwan style fried rice with vegetables.", hi: "सब्ज़ियों के साथ तीखा शेज़वान फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Vegetables", "Schezwan Sauce"], hi: ["चावल", "सब्ज़ियाँ", "शेज़वान सॉस"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Egg Fried Rice", hi: "अंडा फ्राइड राइस" },
    price: 230,
    image: "https://source.unsplash.com/400x300/?egg-fried-rice",
    about: { en: "Fried rice cooked with scrambled eggs.", hi: "फेंटे हुए अंडों के साथ बना फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Eggs", "Soy Sauce"], hi: ["चावल", "अंडे", "सोया सॉस"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Chicken Fried Rice", hi: "चिकन फ्राइड राइस" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?chicken-fried-rice",
    about: { en: "Stir-fried rice with chicken pieces.", hi: "चिकन के टुकड़ों के साथ तला हुआ चावल।" },
    ingredients: { en: ["Rice", "Chicken", "Soy Sauce"], hi: ["चावल", "चिकन", "सोया सॉस"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "N/V Mix Fried Rice", hi: "मिक्स नॉनवेज फ्राइड राइस" },
    price: 210,
    image: "https://source.unsplash.com/400x300/?mixed-fried-rice",
    about: { en: "Fried rice with mixed non-veg items.", hi: "मिश्रित नॉनवेज के साथ बना फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Chicken", "Egg", "Spices"], hi: ["चावल", "चिकन", "अंडा", "मसाले"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Chicken Biryani", hi: "चिकन बिरयानी" },
    price: 240,
    image: "https://source.unsplash.com/400x300/?chicken-biryani",
    about: { en: "Classic aromatic chicken biryani.", hi: "पारंपरिक सुगंधित चिकन बिरयानी।" },
    ingredients: { en: ["Rice", "Chicken", "Spices"], hi: ["चावल", "चिकन", "मसाले"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Egg Biryani", hi: "एग बिरयानी" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?egg-biryani",
    about: { en: "Biryani cooked with boiled eggs.", hi: "उबले अंडों के साथ बनी बिरयानी।" },
    ingredients: { en: ["Rice", "Eggs", "Spices"], hi: ["चावल", "अंडे", "मसाले"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Mutton Biryani", hi: "मटन बिरयानी" },
    price: 230,
    image: "https://source.unsplash.com/400x300/?mutton-biryani",
    about: { en: "Aromatic biryani cooked with tender mutton.", hi: "नरम मटन के साथ बनी सुगंधित बिरयानी।" },
    ingredients: { en: ["Rice", "Mutton", "Spices"], hi: ["चावल", "मटन", "मसाले"] }
  },
  {
    type: "basmatiRiceChineseVegNonVeg",
    name: { en: "Chicken Schezwan Fried Rice", hi: "चिकन शेज़वान फ्राइड राइस" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?schezwan-chicken-rice",
    about: { en: "Spicy Schezwan style fried rice with chicken.", hi: "चिकन के साथ तीखा शेज़वान फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Chicken", "Schezwan Sauce"], hi: ["चावल", "चिकन", "शेज़वान सॉस"] }
  },





  // 🫓 Roti / Naan / Kulcha / Paratha
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Tandoori Roti", hi: "तंदूरी रोटी" },
    price: "N/A",
    image: "https://source.unsplash.com/400x300/?tandoori-roti",
    about: { en: "Soft and crisp tandoor baked roti.", hi: "तंदूर में बनी नरम और कुरकुरी रोटी।" },
    ingredients: { en: ["Wheat Flour", "Salt", "Water"], hi: ["गेहूं का आटा", "नमक", "पानी"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Butter Roti", hi: "बटर रोटी" },
    price: "N/A",
    image: "https://source.unsplash.com/400x300/?butter-roti",
    about: { en: "Tandoori roti topped with butter.", hi: "तंदूरी रोटी पर मक्खन डाला हुआ।" },
    ingredients: { en: ["Wheat Flour", "Butter", "Salt"], hi: ["गेहूं का आटा", "मक्खन", "नमक"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Tawa Roti", hi: "तवा रोटी" },
    price: 15,
    image: "https://source.unsplash.com/400x300/?tawa-roti",
    about: { en: "Traditional flatbread cooked on tawa.", hi: "तवे पर बनी पारंपरिक रोटी।" },
    ingredients: { en: ["Wheat Flour", "Salt", "Water"], hi: ["गेहूं का आटा", "नमक", "पानी"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Naan", hi: "नान" },
    price: 50,
    image: "https://source.unsplash.com/400x300/?naan",
    about: { en: "Soft Indian bread baked in tandoor.", hi: "तंदूर में पकी मुलायम भारतीय रोटी।" },
    ingredients: { en: ["Maida", "Curd", "Salt"], hi: ["मैदा", "दही", "नमक"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Butter Naan", hi: "बटर नान" },
    price: 65,
    image: "https://source.unsplash.com/400x300/?butter-naan",
    about: { en: "Soft naan brushed with butter.", hi: "मुलायम नान पर मक्खन लगाया गया।" },
    ingredients: { en: ["Maida", "Curd", "Butter"], hi: ["मैदा", "दही", "मक्खन"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Garlic Naan", hi: "गार्लिक नान" },
    price: 70,
    image: "https://source.unsplash.com/400x300/?garlic-naan",
    about: { en: "Naan topped with garlic and herbs.", hi: "लहसुन और हर्ब्स से सजा हुआ नान।" },
    ingredients: { en: ["Maida", "Garlic", "Butter"], hi: ["मैदा", "लहसुन", "मक्खन"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Paneer Naan", hi: "पनीर नान" },
    price: 70,
    image: "https://source.unsplash.com/400x300/?paneer-naan",
    about: { en: "Naan stuffed with paneer filling.", hi: "पनीर की स्टफिंग से भरा हुआ नान।" },
    ingredients: { en: ["Maida", "Paneer", "Spices"], hi: ["मैदा", "पनीर", "मसाले"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Kashmiri Naan", hi: "कश्मीरी नान" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?kashmiri-naan",
    about: { en: "Sweet naan stuffed with dry fruits.", hi: "सूखे मेवों से भरा हुआ मीठा नान।" },
    ingredients: { en: ["Maida", "Dry Fruits", "Sugar"], hi: ["मैदा", "मेवे", "चीनी"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Stuffed Kulcha", hi: "स्टफ्ड कुलचा" },
    price: 75,
    image: "https://source.unsplash.com/400x300/?stuffed-kulcha",
    about: { en: "Kulcha stuffed with spiced filling.", hi: "मसालेदार स्टफिंग वाला कुलचा।" },
    ingredients: { en: ["Maida", "Potato/Paneer", "Spices"], hi: ["मैदा", "आलू/पनीर", "मसाले"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Masala Kulcha", hi: "मसाला कुलचा" },
    price: 80,
    image: "https://source.unsplash.com/400x300/?masala-kulcha",
    about: { en: "Kulcha filled with spicy masala.", hi: "मसालेदार कुलचा।" },
    ingredients: { en: ["Maida", "Spices"], hi: ["मैदा", "मसाले"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Paneer Kulcha", hi: "पनीर कुलचा" },
    price: 80,
    image: "https://source.unsplash.com/400x300/?paneer-kulcha",
    about: { en: "Kulcha stuffed with paneer masala.", hi: "पनीर मसाले से भरा हुआ कुलचा।" },
    ingredients: { en: ["Maida", "Paneer", "Spices"], hi: ["मैदा", "पनीर", "मसाले"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Paratha", hi: "पराठा" },
    price: 40,
    image: "https://source.unsplash.com/400x300/?paratha",
    about: { en: "Plain layered paratha.", hi: "साधारण परतदार पराठा।" },
    ingredients: { en: ["Wheat Flour", "Ghee", "Salt"], hi: ["गेहूं का आटा", "घी", "नमक"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Laccha Paratha", hi: "लच्छा पराठा" },
    price: 50,
    image: "https://source.unsplash.com/400x300/?laccha-paratha",
    about: { en: "Multi-layered crispy paratha.", hi: "मल्टी लेयर वाला कुरकुरा पराठा।" },
    ingredients: { en: ["Wheat Flour", "Ghee", "Salt"], hi: ["गेहूं का आटा", "घी", "नमक"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Aloo Paratha", hi: "आलू पराठा" },
    price: 70,
    image: "https://source.unsplash.com/400x300/?aloo-paratha",
    about: { en: "Paratha stuffed with spiced potato filling.", hi: "आलू मसाले से भरा हुआ पराठा।" },
    ingredients: { en: ["Wheat Flour", "Potato", "Spices"], hi: ["गेहूं का आटा", "आलू", "मसाले"] }
  },
  {
    type: "rotiNaanKulchaParatha",
    name: { en: "Gobi Paratha", hi: "गोभी पराठा" },
    price: 75,
    image: "https://source.unsplash.com/400x300/?gobi-paratha",
    about: { en: "Paratha stuffed with spiced cauliflower filling.", hi: "गोभी मसाले से भरा हुआ पराठा।" },
    ingredients: { en: ["Wheat Flour", "Cauliflower", "Spices"], hi: ["गेहूं का आटा", "गोभी", "मसाले"] }
  },






  // 🍜 Veg Noodles
  {
    type: "vegNoodles",
    name: { en: "Veg Hakka Noodles", hi: "वेग हक्का नूडल्स" },
    price: 170,
    image: "https://source.unsplash.com/400x300/?veg-hakka-noodles",
    about: { en: "Classic stir-fried noodles with fresh vegetables.", hi: "ताज़ी सब्ज़ियों के साथ क्लासिक हक्का नूडल्स।" },
    ingredients: { en: ["Noodles", "Vegetables", "Soy Sauce", "Spices"], hi: ["नूडल्स", "सब्ज़ियां", "सोया सॉस", "मसाले"] }
  },
  {
    type: "vegNoodles",
    name: { en: "Mix Veg Hakka Noodles", hi: "मिक्स वेज हक्का नूडल्स" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?mix-veg-hakka-noodles",
    about: { en: "Stir-fried noodles with assorted vegetables.", hi: "विभिन्न सब्ज़ियों के साथ तले हुए नूडल्स।" },
    ingredients: { en: ["Noodles", "Mixed Vegetables", "Soy Sauce"], hi: ["नूडल्स", "मिक्स सब्ज़ियां", "सोया सॉस"] }
  },
  {
    type: "vegNoodles",
    name: { en: "Mushroom Hakka Noodles", hi: "मशरूम हक्का नूडल्स" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?mushroom-noodles",
    about: { en: "Delicious noodles stir-fried with mushrooms.", hi: "मशरूम के साथ स्वादिष्ट तले हुए नूडल्स।" },
    ingredients: { en: ["Noodles", "Mushroom", "Vegetables", "Spices"], hi: ["नूडल्स", "मशरूम", "सब्ज़ियां", "मसाले"] }
  },
  {
    type: "vegNoodles",
    name: { en: "Paneer Hakka Noodles", hi: "पनीर हक्का नूडल्स" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?paneer-noodles",
    about: { en: "Hakka noodles cooked with soft paneer cubes.", hi: "पनीर क्यूब्स के साथ बनाए गए हक्का नूडल्स।" },
    ingredients: { en: ["Noodles", "Paneer", "Vegetables", "Spices"], hi: ["नूडल्स", "पनीर", "सब्ज़ियां", "मसाले"] }
  },
  {
    type: "vegNoodles",
    name: { en: "Veg Schezwan Noodles", hi: "वेज़ शेज़वान नूडल्स" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?schezwan-noodles",
    about: { en: "Spicy Schezwan flavored stir-fried noodles.", hi: "तेज मसालेदार शेज़वान फ्लेवर वाले तले हुए नूडल्स।" },
    ingredients: { en: ["Noodles", "Vegetables", "Schezwan Sauce"], hi: ["नूडल्स", "सब्ज़ियां", "शेज़वान सॉस"] }
  },


  // 🍗 Non-Veg Chinese Starters
  {
    type: "starterNonVegChinese",
    name: { en: "Chicken Chilli", hi: "चिकन चिली" },
    price: " half: 250, full: 280 ",
    image: "https://source.unsplash.com/400x300/?chicken-chilli",
    about: { en: "Spicy stir-fried chicken tossed in chilli sauce.", hi: "मसालेदार सॉस में टॉस किया हुआ चिकन।" },
    ingredients: { en: ["Chicken", "Chilli Sauce", "Spices"], hi: ["चिकन", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Chicken Garlic", hi: "चिकन गार्लिक" },
    price: 240,
    image: "https://source.unsplash.com/400x300/?garlic-chicken",
    about: { en: "Chicken cooked with garlic and spices.", hi: "लहसुन और मसालों के साथ पका हुआ चिकन।" },
    ingredients: { en: ["Chicken", "Garlic", "Spices"], hi: ["चिकन", "लहसुन", "मसाले"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Chicken Manchurian", hi: "चिकन मंचूरियन" },
    price: "half: 250, full: 280",
    image: "https://source.unsplash.com/400x300/?chicken-manchurian",
    about: { en: "Fried chicken balls in spicy Manchurian sauce.", hi: "मसालेदार मंचूरियन सॉस में तला हुआ चिकन।" },
    ingredients: { en: ["Chicken", "Soy Sauce", "Garlic", "Spices"], hi: ["चिकन", "सोया सॉस", "लहसुन", "मसाले"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Chicken American Choupsy", hi: "चिकन अमेरिकन चॉप्सी" },
    price: 300,
    image: "https://source.unsplash.com/400x300/?american-chopsuey-chicken",
    about: { en: "Crispy noodles topped with chicken and tangy sauce.", hi: "कुरकुरे नूडल्स पर चिकन और मसालेदार सॉस डाला गया।" },
    ingredients: { en: ["Chicken", "Noodles", "Sauce"], hi: ["चिकन", "नूडल्स", "सॉस"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Chicken Lolipop", hi: "चिकन लॉलिपॉप" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?chicken-lollipop",
    about: { en: "Crispy fried chicken wings served with sauce.", hi: "कुरकुरी तली हुई चिकन विंग्स।" },
    ingredients: { en: ["Chicken", "Spices", "Sauce"], hi: ["चिकन", "मसाले", "सॉस"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Chicken 65", hi: "चिकन 65" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?chicken-65",
    about: { en: "Spicy deep-fried chicken dish.", hi: "मसालेदार डीप फ्राइड चिकन डिश।" },
    ingredients: { en: ["Chicken", "Spices", "Curry Leaves"], hi: ["चिकन", "मसाले", "करी पत्ता"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Crispy Chicken", hi: "क्रिस्पी चिकन" },
    price: 260,
    image: "https://source.unsplash.com/400x300/?crispy-chicken",
    about: { en: "Crispy fried chicken with spices.", hi: "मसालेदार कुरकुरा तला हुआ चिकन।" },
    ingredients: { en: ["Chicken", "Flour", "Spices"], hi: ["चिकन", "मैदा", "मसाले"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Lemon Chicken", hi: "लेमन चिकन" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?lemon-chicken",
    about: { en: "Tangy chicken dish with lemon flavor.", hi: "नींबू के स्वाद वाला मसालेदार चिकन।" },
    ingredients: { en: ["Chicken", "Lemon", "Spices"], hi: ["चिकन", "नींबू", "मसाले"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Chilli Egg", hi: "चिली एग" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?chilli-egg",
    about: { en: "Egg pieces tossed in spicy chilli sauce.", hi: "अंडे के टुकड़े मसालेदार चिली सॉस में।" },
    ingredients: { en: ["Egg", "Chilli Sauce", "Spices"], hi: ["अंडा", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Pan Fried Chicken", hi: "पैन फ्राइड चिकन" },
    price: 260,
    image: "https://source.unsplash.com/400x300/?pan-fried-chicken",
    about: { en: "Chicken shallow fried with spices.", hi: "मसालों के साथ तला हुआ चिकन।" },
    ingredients: { en: ["Chicken", "Oil", "Spices"], hi: ["चिकन", "तेल", "मसाले"] }
  },
  {
    type: "starterNonVegChinese",
    name: { en: "Pan Fried Egg", hi: "पैन फ्राइड एग" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?pan-fried-egg",
    about: { en: "Pan fried egg with seasoning.", hi: "मसाले डालकर तला हुआ अंडा।" },
    ingredients: { en: ["Egg", "Oil", "Spices"], hi: ["अंडा", "तेल", "मसाले"] }

  },



  // 🥢 Veg Chinese Starters
  {
    type: "starterVegChinese",
    name: { en: "Crispy Potato Chilli", hi: "क्रिस्पी पोटैटो चिली" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?chilli-potato",
    about: { en: "Crispy fried potato tossed in spicy chilli sauce.", hi: "कुरकुरे आलू मसालेदार चिली सॉस में टॉस किए गए।" },
    ingredients: { en: ["Potato", "Chilli Sauce", "Spices"], hi: ["आलू", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Crispy Baby Corn Chilli", hi: "क्रिस्पी बेबी कॉर्न चिली" },
    price: 270,
    image: "https://source.unsplash.com/400x300/?babycorn-chilli",
    about: { en: "Crispy baby corn tossed in hot chilli sauce.", hi: "कुरकुरे बेबी कॉर्न मसालेदार चिली सॉस में टॉस किए गए।" },
    ingredients: { en: ["Baby Corn", "Chilli Sauce", "Spices"], hi: ["बेबी कॉर्न", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Mushroom Chilli", hi: "मशरूम चिली" },
    price: "270/290",
    image: "https://source.unsplash.com/400x300/?mushroom-chilli",
    about: { en: "Stir-fried mushrooms with spicy chilli sauce.", hi: "मसालेदार चिली सॉस में स्टिर-फ्राइड मशरूम।" },
    ingredients: { en: ["Mushroom", "Chilli Sauce", "Spices"], hi: ["मशरूम", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Paneer Chilli", hi: "पनीर चिली" },
    price: "240/260",
    image: "https://source.unsplash.com/400x300/?paneer-chilli",
    about: { en: "Paneer cubes tossed in spicy chilli sauce.", hi: "पनीर के टुकड़े मसालेदार चिली सॉस में।" },
    ingredients: { en: ["Paneer", "Chilli Sauce", "Spices"], hi: ["पनीर", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Chilli Veg Cocktail", hi: "चिली वेज कॉकटेल" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?veg-chilli",
    about: { en: "Mixed vegetables tossed in spicy chilli sauce.", hi: "मसालेदार चिली सॉस में टॉस की हुई मिक्स सब्ज़ियां।" },
    ingredients: { en: ["Vegetables", "Chilli Sauce", "Spices"], hi: ["सब्ज़ियां", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Soya Chilli", hi: "सोया चिली" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?soya-chilli",
    about: { en: "Soya chunks stir-fried with spicy sauce.", hi: "सोया चंक्स मसालेदार सॉस में।" },
    ingredients: { en: ["Soya", "Chilli Sauce", "Spices"], hi: ["सोया", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Paneer Manchurian", hi: "पनीर मंचूरियन" },
    price: "230/250",
    image: "https://source.unsplash.com/400x300/?paneer-manchurian",
    about: { en: "Crispy paneer balls in Manchurian sauce.", hi: "कुरकुरे पनीर बॉल्स मंचूरियन सॉस में।" },
    ingredients: { en: ["Paneer", "Soy Sauce", "Garlic", "Spices"], hi: ["पनीर", "सोया सॉस", "लहसुन", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Veg Manchurian", hi: "वेज मंचूरियन" },
    price: "195/270",
    image: "https://source.unsplash.com/400x300/?veg-manchurian",
    about: { en: "Vegetable balls cooked in Manchurian sauce.", hi: "सब्ज़ियों के बॉल्स मंचूरियन सॉस में पकाए गए।" },
    ingredients: { en: ["Vegetables", "Soy Sauce", "Spices"], hi: ["सब्ज़ियां", "सोया सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Veg Chopsuey", hi: "वेज चॉप्सी" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?veg-chopsuey",
    about: { en: "Crispy fried noodles topped with vegetables and sauce.", hi: "तले हुए कुरकुरे नूडल्स पर सब्ज़ियां और सॉस डाले गए।" },
    ingredients: { en: ["Noodles", "Vegetables", "Sauce"], hi: ["नूडल्स", "सब्ज़ियां", "सॉस"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Paneer Cocktail Chilli", hi: "पनीर कॉकटेल चिली" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?paneer-cocktail-chilli",
    about: { en: "Paneer cubes tossed with spicy cocktail chilli.", hi: "स्पेशल कॉकटेल चिली सॉस में टॉस किया हुआ पनीर।" },
    ingredients: { en: ["Paneer", "Chilli Sauce", "Spices"], hi: ["पनीर", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "American Corn Salt & Pepper", hi: "अमेरिकन कॉर्न सॉल्ट एंड पेपर" },
    price: 240,
    image: "https://source.unsplash.com/400x300/?corn-salt-pepper",
    about: { en: "Crispy corn kernels tossed with salt and pepper.", hi: "कुरकुरे कॉर्न नमक और काली मिर्च के साथ।" },
    ingredients: { en: ["Sweet Corn", "Salt", "Pepper"], hi: ["कॉर्न", "नमक", "काली मिर्च"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Veg Lolipop", hi: "वेज लॉलिपॉप" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?veg-lollipop",
    about: { en: "Crispy veg lolipop served with sauce.", hi: "कुरकुरे वेज लॉलिपॉप चटनी/सॉस के साथ।" },
    ingredients: { en: ["Vegetables", "Spices"], hi: ["सब्ज़ियां", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Crisps Veg Chilli", hi: "क्रिस्प वेज चिली" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?crispy-veg-chilli",
    about: { en: "Crispy fried vegetables in spicy chilli sauce.", hi: "कुरकुरी सब्ज़ियां मसालेदार चिली सॉस में।" },
    ingredients: { en: ["Vegetables", "Chilli Sauce", "Spices"], hi: ["सब्ज़ियां", "चिली सॉस", "मसाले"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Butter Garlic Mushroom", hi: "बटर गार्लिक मशरूम" },
    price: 260,
    image: "https://source.unsplash.com/400x300/?butter-garlic-mushroom",
    about: { en: "Mushrooms sautéed in butter and garlic.", hi: "मशरूम बटर और लहसुन में सौटे किए गए।" },
    ingredients: { en: ["Mushroom", "Butter", "Garlic"], hi: ["मशरूम", "मक्खन", "लहसुन"] }
  },
  {
    type: "starterVegChinese",
    name: { en: "Paneer 65", hi: "पनीर 65" },
    price: 220,
    image: "https://source.unsplash.com/400x300/?paneer-65",
    about: { en: "Spicy deep-fried paneer dish.", hi: "मसालेदार डीप फ्राइड पनीर डिश।" },
    ingredients: { en: ["Paneer", "Spices", "Curry Leaves"], hi: ["पनीर", "मसाले", "करी पत्ता"] }
  },


  // 🍲 Soup Non Vegetarian
  {
    type: "soupNonveg",
    name: { en: "Chicken Clear Soup", hi: "चिकन क्लियर सूप" },
    price: 130,
    image: "https://source.unsplash.com/400x300/?chicken-clear-soup",
    about: { en: "Light and healthy chicken clear soup.", hi: "हल्का और स्वास्थ्यवर्धक चिकन क्लियर सूप।" },
    ingredients: { en: ["Chicken", "Vegetables", "Spices"], hi: ["चिकन", "सब्ज़ियां", "मसाले"] }
  },
  {
    type: "soupNonveg",
    name: { en: "Chicken Hot & Sour Soup", hi: "चिकन हॉट एंड सॉर सूप" },
    price: 140,
    image: "https://source.unsplash.com/400x300/?chicken-hot-sour-soup",
    about: { en: "Spicy and tangy Indo-Chinese chicken soup.", hi: "खट्टा और तीखा इंडो-चाइनीज़ चिकन सूप।" },
    ingredients: { en: ["Chicken", "Soy Sauce", "Vinegar", "Spices"], hi: ["चिकन", "सोया सॉस", "सिरका", "मसाले"] }
  },
  {
    type: "soupNonveg",
    name: { en: "Chicken Manchow Soup", hi: "चिकन मंचाउ सूप" },
    price: 140,
    image: "https://source.unsplash.com/400x300/?chicken-manchow-soup",
    about: { en: "Spicy and flavorful Manchow chicken soup.", hi: "मसालेदार और स्वादिष्ट चिकन मंचाउ सूप।" },
    ingredients: { en: ["Chicken", "Vegetables", "Garlic", "Soy Sauce"], hi: ["चिकन", "सब्ज़ियां", "लहसुन", "सोया सॉस"] }
  },
  {
    type: "soupNonveg",
    name: { en: "Chicken Sweet Corn Soup", hi: "चिकन स्वीट कॉर्न सूप" },
    price: 120,
    image: "https://source.unsplash.com/400x300/?chicken-sweet-corn-soup",
    about: { en: "Mild chicken soup with sweet corn.", hi: "मीठे कॉर्न के साथ स्वादिष्ट चिकन सूप।" },
    ingredients: { en: ["Chicken", "Sweet Corn", "Spices"], hi: ["चिकन", "स्वीट कॉर्न", "मसाले"] }
  },
  {
    type: "soupNonveg",
    name: { en: "Chicken Shorba", hi: "चिकन शोरबा" },
    price: 130,
    image: "https://source.unsplash.com/400x300/?chicken-shorba",
    about: { en: "Traditional Indian-style chicken shorba.", hi: "भारतीय स्टाइल का पारंपरिक चिकन शोरबा।" },
    ingredients: { en: ["Chicken", "Onion", "Garlic", "Spices"], hi: ["चिकन", "प्याज़", "लहसुन", "मसाले"] }
  },
  {
    type: "soupNonveg",
    name: { en: "Chicken Lemon Coriander Soup", hi: "चिकन नींबू धनिया सूप" },
    price: 130,
    image: "https://source.unsplash.com/400x300/?chicken-lemon-coriander-soup",
    about: { en: "Refreshing chicken soup with lemon and coriander.", hi: "नींबू और धनिया के स्वाद वाला ताज़गी भरा चिकन सूप।" },
    ingredients: { en: ["Chicken", "Lemon", "Coriander", "Spices"], hi: ["चिकन", "नींबू", "धनिया", "मसाले"] }
  },






  // 🥘 Dal
  {
    type: "dal",
    name: { en: "Yellow Dal Fry", hi: "येलो दाल फ्राई" },
    price: 135,
    image: "https://source.unsplash.com/400x300/?dal-fry",
    about: { en: "Classic yellow dal tempered with spices.", hi: "मसालों के तड़के के साथ क्लासिक पीली दाल।" },
    ingredients: { en: ["Yellow Dal", "Onion", "Tomato", "Spices"], hi: ["पीली दाल", "प्याज़", "टमाटर", "मसाले"] }
  },
  {
    type: "dal",
    name: { en: "Dal Tadka", hi: "दाल तड़का" },
    price: 150,
    image: "https://source.unsplash.com/400x300/?dal-tadka",
    about: { en: "Dal cooked with butter and tempered with ghee & spices.", hi: "घी और मसालों के तड़के वाली स्वादिष्ट दाल।" },
    ingredients: { en: ["Yellow Dal", "Ghee", "Spices"], hi: ["पीली दाल", "घी", "मसाले"] }
  },
  {
    type: "dal",
    name: { en: "Dal Makhani", hi: "दाल मखनी" },
    price: 220,
    image: "https://source.unsplash.com/400x300/?dal-makhani",
    about: { en: "Rich and creamy dal made with black lentils.", hi: "क्रीम और मक्खन से बनी स्वादिष्ट दाल मखनी।" },
    ingredients: { en: ["Black Lentils", "Butter", "Cream", "Spices"], hi: ["काली दाल", "मक्खन", "क्रीम", "मसाले"] }
  },
  {
    type: "dal",
    name: { en: "Egg Tadka", hi: "एग तड़का" },
    price: 160,
    image: "https://source.unsplash.com/400x300/?egg-dal",
    about: { en: "Unique dal tadka with scrambled eggs.", hi: "फेंटा हुआ अंडा मिलाकर बनी खास दाल तड़का।" },
    ingredients: { en: ["Dal", "Egg", "Spices"], hi: ["दाल", "अंडा", "मसाले"] }
  },
  {
    type: "dal",
    name: { en: "Kaveri Special Dal Fry", hi: "कावेरी स्पेशल दाल फ्राई" },
    price: 170,
    image: "https://source.unsplash.com/400x300/?special-dal",
    about: { en: "Special house-style dal fry.", hi: "कावेरी स्टाइल का विशेष दाल फ्राई।" },
    ingredients: { en: ["Dal", "Onion", "Tomato", "Spices"], hi: ["दाल", "प्याज़", "टमाटर", "मसाले"] }
  },
  {
    type: "dal",
    name: { en: "Chana Dal Tadka", hi: "चना दाल तड़का" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?chana-dal",
    about: { en: "Nutritious chana dal cooked with spices.", hi: "चना दाल मसालों के साथ पकाई हुई।" },
    ingredients: { en: ["Chana Dal", "Onion", "Tomato", "Spices"], hi: ["चना दाल", "प्याज़", "टमाटर", "मसाले"] }
  },


  // 🍚 Basmati Rice (Veg / Non-Veg)
  {
    type: "basmatiRice",
    name: { en: "Steam Rice", hi: "स्टीम राइस" },
    price: 80,
    image: "https://source.unsplash.com/400x300/?steam-rice",
    about: { en: "Plain steamed basmati rice.", hi: "साधारण स्टीम्ड बासमती चावल।" },
    ingredients: { en: ["Rice", "Water"], hi: ["चावल", "पानी"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Jeera Rice", hi: "जीरा राइस" },
    price: 120,
    image: "https://source.unsplash.com/400x300/?jeera-rice",
    about: { en: "Basmati rice tempered with cumin seeds.", hi: "बासमती चावल को जीरे के साथ तड़का।" },
    ingredients: { en: ["Rice", "Cumin", "Ghee"], hi: ["चावल", "जीरा", "घी"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Veg Fried Rice", hi: "वेज फ्राइड राइस" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?veg-fried-rice",
    about: { en: "Chinese style vegetable fried rice.", hi: "चाइनीज़ स्टाइल वेज फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Vegetables", "Soy Sauce"], hi: ["चावल", "सब्ज़ियां", "सोया सॉस"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Mix Veg Fried Rice", hi: "मिक्स वेज फ्राइड राइस" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?mix-veg-rice",
    about: { en: "Fried rice with assorted vegetables.", hi: "विभिन्न सब्ज़ियों के साथ फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Mixed Vegetables", "Spices"], hi: ["चावल", "मिक्स सब्ज़ियां", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Veg Pulao", hi: "वेज पुलाव" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?veg-pulao",
    about: { en: "Aromatic rice with vegetables and spices.", hi: "खुशबूदार चावल सब्ज़ियों और मसालों के साथ।" },
    ingredients: { en: ["Rice", "Vegetables", "Spices"], hi: ["चावल", "सब्ज़ियां", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Green Peas Pulao", hi: "मटर पुलाव" },
    price: 160,
    image: "https://source.unsplash.com/400x300/?peas-pulao",
    about: { en: "Pulao made with green peas.", hi: "हरी मटर से बना पुलाव।" },
    ingredients: { en: ["Rice", "Green Peas", "Spices"], hi: ["चावल", "हरी मटर", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Mushroom Fried Rice", hi: "मशरूम फ्राइड राइस" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?mushroom-rice",
    about: { en: "Fried rice cooked with mushrooms.", hi: "मशरूम से बना फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Mushroom", "Soy Sauce"], hi: ["चावल", "मशरूम", "सोया सॉस"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Veg Biryani", hi: "वेज बिरयानी" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?veg-biryani",
    about: { en: "Fragrant biryani with vegetables.", hi: "खुशबूदार वेज बिरयानी।" },
    ingredients: { en: ["Rice", "Vegetables", "Spices"], hi: ["चावल", "सब्ज़ियां", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Kashmiri Pulao", hi: "कश्मीरी पुलाव" },
    price: 200,
    image: "https://source.unsplash.com/400x300/?kashmiri-pulao",
    about: { en: "Sweet & fragrant pulao with dry fruits.", hi: "सूखे मेवों के साथ मीठा और खुशबूदार पुलाव।" },
    ingredients: { en: ["Rice", "Dry Fruits", "Spices"], hi: ["चावल", "मेवे", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Paneer Biryani", hi: "पनीर बिरयानी" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?paneer-biryani",
    about: { en: "Biryani made with paneer cubes and spices.", hi: "पनीर और मसालों से बनी बिरयानी।" },
    ingredients: { en: ["Rice", "Paneer", "Spices"], hi: ["चावल", "पनीर", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Veg Schezwan Fried Rice", hi: "वेज़ शेज़वान फ्राइड राइस" },
    price: 180,
    image: "https://source.unsplash.com/400x300/?schezwan-rice",
    about: { en: "Spicy Schezwan style fried rice.", hi: "मसालेदार शेज़वान स्टाइल फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Vegetables", "Schezwan Sauce"], hi: ["चावल", "सब्ज़ियां", "शेज़वान सॉस"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Egg Fried Rice", hi: "एग फ्राइड राइस" },
    price: 230,
    image: "https://source.unsplash.com/400x300/?egg-fried-rice",
    about: { en: "Fried rice with scrambled eggs.", hi: "अंडे के साथ फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Egg", "Soy Sauce"], hi: ["चावल", "अंडा", "सोया सॉस"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Chicken Fried Rice", hi: "चिकन फ्राइड राइस" },
    price: 250,
    image: "https://source.unsplash.com/400x300/?chicken-fried-rice",
    about: { en: "Chinese style fried rice with chicken.", hi: "चिकन के साथ चाइनीज़ स्टाइल फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Chicken", "Soy Sauce"], hi: ["चावल", "चिकन", "सोया सॉस"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Non-Veg Mix Fried Rice", hi: "नॉन वेज मिक्स फ्राइड राइस" },
    price: 210,
    image: "https://source.unsplash.com/400x300/?mixed-fried-rice",
    about: { en: "Fried rice with chicken, egg & vegetables.", hi: "चिकन, अंडा और सब्ज़ियों के साथ फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Chicken", "Egg", "Vegetables"], hi: ["चावल", "चिकन", "अंडा", "सब्ज़ियां"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Chicken Biryani", hi: "चिकन बिरयानी" },
    price: 240,
    image: "https://source.unsplash.com/400x300/?chicken-biryani",
    about: { en: "Authentic chicken biryani with spices.", hi: "मसालों के साथ असली चिकन बिरयानी।" },
    ingredients: { en: ["Rice", "Chicken", "Spices"], hi: ["चावल", "चिकन", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Egg Biryani", hi: "एग बिरयानी" },
    price: 190,
    image: "https://source.unsplash.com/400x300/?egg-biryani",
    about: { en: "Biryani made with boiled eggs.", hi: "उबले अंडे से बनी बिरयानी।" },
    ingredients: { en: ["Rice", "Egg", "Spices"], hi: ["चावल", "अंडा", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Mutton Biryani", hi: "मटन बिरयानी" },
    price: 230,
    image: "https://source.unsplash.com/400x300/?mutton-biryani",
    about: { en: "Traditional mutton biryani cooked slowly.", hi: "धीमी आँच पर पकी पारंपरिक मटन बिरयानी।" },
    ingredients: { en: ["Rice", "Mutton", "Spices"], hi: ["चावल", "मटन", "मसाले"] }
  },
  {
    type: "basmatiRice",
    name: { en: "Chicken Schezwan Fried Rice", hi: "चिकन शेज़वान फ्राइड राइस" },
    price: 230,
    image: "https://source.unsplash.com/400x300/?chicken-schezwan-rice",
    about: { en: "Spicy Schezwan chicken fried rice.", hi: "मसालेदार शेज़वान चिकन फ्राइड राइस।" },
    ingredients: { en: ["Rice", "Chicken", "Schezwan Sauce"], hi: ["चावल", "चिकन", "शेज़वान सॉस"] }
  },


  // 🥣 Soup Vegetarian
  {
    type: "soupVegetarian",
    name: { en: "Veg Tomato Soup", hi: "वेज टमाटर सूप" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?tomato-soup",
    about: { en: "Fresh tomato soup with mild spices.", hi: "ताज़े टमाटर से बना स्वादिष्ट सूप।" },
    ingredients: { en: ["Tomato", "Spices", "Butter"], hi: ["टमाटर", "मसाले", "मक्खन"] }
  },
  {
    type: "soupVegetarian",
    name: { en: "Veg Sweet Corn Soup", hi: "वेज स्वीट कॉर्न सूप" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?sweet-corn-soup",
    about: { en: "Sweet corn soup with vegetables.", hi: "स्वीट कॉर्न और सब्ज़ियों से बना सूप।" },
    ingredients: { en: ["Sweet Corn", "Vegetables", "Spices"], hi: ["स्वीट कॉर्न", "सब्ज़ियां", "मसाले"] }
  },
  {
    type: "soupVegetarian",
    name: { en: "Veg Manchow Soup", hi: "वेज मंचाओ सूप" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?manchow-soup",
    about: { en: "Spicy Indo-Chinese manchow soup.", hi: "मसालेदार इंडो-चाइनीज मंचाओ सूप।" },
    ingredients: { en: ["Vegetables", "Garlic", "Soy Sauce"], hi: ["सब्ज़ियां", "लहसुन", "सोया सॉस"] }
  },
  {
    type: "soupVegetarian",
    name: { en: "Cream of Mushroom Soup", hi: "क्रीम ऑफ मशरूम सूप" },
    price: 120,
    image: "https://source.unsplash.com/400x300/?mushroom-soup",
    about: { en: "Creamy mushroom soup with rich flavor.", hi: "गाढ़ा और स्वादिष्ट मशरूम सूप।" },
    ingredients: { en: ["Mushroom", "Cream", "Spices"], hi: ["मशरूम", "क्रीम", "मसाले"] }
  },
  {
    type: "soupVegetarian",
    name: { en: "Gourd Soup", hi: "लौकी का सूप" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?gourd-soup",
    about: { en: "Healthy bottle gourd soup.", hi: "स्वस्थ लौकी का सूप।" },
    ingredients: { en: ["Bottle Gourd", "Spices"], hi: ["लौकी", "मसाले"] }
  },
  {
    type: "soupVegetarian",
    name: { en: "Spinach Soup", hi: "पालक का सूप" },
    price: 110,
    image: "https://source.unsplash.com/400x300/?spinach-soup",
    about: { en: "Nutritious spinach soup.", hi: "पौष्टिक पालक का सूप।" },
    ingredients: { en: ["Spinach", "Garlic", "Spices"], hi: ["पालक", "लहसुन", "मसाले"] }
  },
  {
    type: "soupVegetarian",
    name: { en: "Veg Clear Soup", hi: "वेज क्लियर सूप" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?clear-soup",
    about: { en: "Light and clear vegetable soup.", hi: "हल्का और साफ़ सब्ज़ी का सूप।" },
    ingredients: { en: ["Vegetables", "Salt", "Pepper"], hi: ["सब्ज़ियां", "नमक", "काली मिर्च"] }
  },
  {
    type: "soupVegetarian",
    name: { en: "Veg Kaveri Soup", hi: "वेज कावेरी सूप" },
    price: 110,
    image: "https://source.unsplash.com/400x300/?veg-soup",
    about: { en: "Special Kaveri style veg soup.", hi: "कावेरी स्टाइल का विशेष वेज सूप।" },
    ingredients: { en: ["Vegetables", "Spices"], hi: ["सब्ज़ियां", "मसाले"] }
  },
  {
    type: "soupVegetarian",
    name: { en: "Veg Hot & Sour Soup", hi: "वेज हॉट एंड सॉर सूप" },
    price: 100,
    image: "https://source.unsplash.com/400x300/?hot-sour-soup",
    about: { en: "Tangy and spicy Indo-Chinese soup.", hi: "खट्टा-तीखा इंडो-चाइनीज सूप।" },
    ingredients: { en: ["Vegetables", "Soy Sauce", "Vinegar"], hi: ["सब्ज़ियां", "सोया सॉस", "सिरका"] }
  },



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
  { type: "soupVegetarian" },
  { type: "basmatiRice" },
  { type: "main" },
  { type: "drinks" },
  { type: "desserts" },
  { type: "soupNonveg" },
  { type: "starterVegChinese" },
  { type: "starterNonVegChinese" },
  { type: "vegNoodles" },
  { type: "rotiNaanKulchaParatha" },
  { type: "basmatiRiceChineseVegNonVeg" },
  { type: "dal" },
  { type: "northIndianGreenVeg" },
  { type: "mutton" },
  { type: "fish" },
  { type: "egg" },
  { type: "kababNonVegSpecial" },
];

// ----- QR Code -----
document.addEventListener("DOMContentLoaded", () => {

  const urlParams = new URLSearchParams(window.location.search);
  const isMenuPage = urlParams.get("menu") === "true";

  if (isMenuPage) {
    // Show Welcome Screen directly on scanned link
    document.getElementById("qr-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
  } else {
    // Generate QR that points to ?menu=true
    const qrCanvas = document.getElementById("qrcode");
    const qrLink = window.location.origin + window.location.pathname + "?menu=true";
    QRCode.toCanvas(qrCanvas, qrLink, function (error) {
      if (error) console.error(error);
    });
  }

  // Open Menu button → show full menu
  document.getElementById("openMenuBtn").addEventListener("click", () => {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("menu-book").style.display = "block";
  });

  // Language toggle
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

