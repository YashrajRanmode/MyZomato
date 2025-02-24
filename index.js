const restaurants_name = [
    "The Spice Route", "Urban Fork", "Flavors & Fire", "The Hungry Spoon", 
    "Midnight Bites", "Fork & Flame", "Rustic Table", "Savor Street", 
    "The Foodie's Haven", "Tandoori Tales", "Olive & Basil", "Grub Junction", 
    "The Secret Sauce", "Epicurean Delight", "Bite & Brew", "The Cozy Plate", 
    "Firewood Feast", "Golden Fork", "Feast & Fables", "Zesty Zing"
    ];
const images=            [
        "first", "second", "third", "fourth", "fifth", 
        "sixth", "seventh", "eighth", "ninth", "tenth"  
    ];
const kmfromHome =       [
        2.5, 5.8, 1.2, 7.4, 3.6, 
        6.1, 4.3, 9.0, 2.9, 8.7, 
        3.2, 5.5, 7.8, 1.9, 6.7, 
        4.8, 2.0, 9.3, 3.9, 8.1
    ];
const ratings =          [
        4.5, 3.8, 4.2, 4.7, 3.6, 
        4.0, 3.9, 4.8, 4.1, 3.7, 
        4.3, 4.6, 3.5, 4.9, 4.0, 
        3.8, 4.4, 3.9, 4.2, 4.7
    ];
const serveAlcohol =     [
        true, false, true, false, true, 
        false, true, false, true, false, 
        true, true, false, true, false, 
        true, false, true, false, true
    ];
const timings =          [
    { open: "10:00 AM", close: "11:00 PM" },
    { open: "9:30 AM", close: "10:30 PM" },
    { open: "11:00 AM", close: "12:00 AM" },
    { open: "8:00 AM", close: "10:00 PM" },
    { open: "10:30 AM", close: "11:30 PM" },
    { open: "9:00 AM", close: "10:00 PM" },
    { open: "7:30 AM", close: "9:30 PM" },
    { open: "11:00 AM", close: "12:30 AM" },
    { open: "8:30 AM", close: "10:30 PM" },
    { open: "9:45 AM", close: "11:45 PM" },
    { open: "10:15 AM", close: "12:00 AM" },
    { open: "8:00 AM", close: "10:00 PM" },
    { open: "9:00 AM", close: "11:00 PM" },
    { open: "7:00 AM", close: "9:00 PM" },
    { open: "10:45 AM", close: "12:15 AM" },
    { open: "9:15 AM", close: "11:15 PM" },
    { open: "8:45 AM", close: "10:45 PM" },
    { open: "11:30 AM", close: "1:00 AM" },
    { open: "10:00 AM", close: "11:30 PM" },
    { open: "8:15 AM", close: "10:15 PM" }
    ];
const foodTypes =        [
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Thai",
    "American",
    "French",
    "Korean"
    ];
const locations =        [
    "Koregaon Park", "Shivaji Nagar", "Kothrud", "Viman Nagar", "Hinjewadi", 
    "Baner", "Hadapsar", "Wakad", "FC Road", "Magarpatta", 
    "Karve Nagar", "Aundh", "Camp", "Katraj", "Bavdhan", 
    "Pimple Saudagar", "Sinhagad Road", "Yerwada", "Swargate", "Deccan Gymkhana"
    ];


const realData=[];
for(let i=0;i<20;i++){
    const restaurants ={};
    let index1=Math.floor(Math.random()*restaurants_name.length);
    restaurants["Name"]=restaurants_name[index1];
    let index2=Math.floor(Math.random()*images.length);
    restaurants["image"]=`./${images[index2]}.jpeg `;
    restaurants["Distance"]=kmfromHome[Math.floor(Math.random()*kmfromHome.length)];
    restaurants["Ratings"]=ratings[Math.floor(Math.random()*ratings.length)];
    restaurants["ServeAlcohol"]=serveAlcohol[Math.floor(Math.random()*serveAlcohol.length)];
    restaurants["Timings"]=timings[Math.floor(Math.random()*timings.length)];
    restaurants["FoodTypes"]=foodTypes[Math.floor(Math.random()*foodTypes.length)];
    restaurants["Locations"]=locations[Math.floor(Math.random()*locations.length)];
    realData.push(restaurants);
}
const fs = require('fs');
fs.writeFileSync('realData.json', JSON.stringify(realData, null, 2));
