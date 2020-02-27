var faker = require('faker');

var loop = 0
function loopit(){
    while (loop < 10) {
        console.log(faker.commerce.productName() + "- " + "$" + faker.commerce.price());
        loop ++;
    }
}

console.log("===========================" , "WELCOME TO MY SHOP")
loopit();

// 10 random product names and prices

