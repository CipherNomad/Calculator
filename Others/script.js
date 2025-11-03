// let message ='Hello Rahul!!!!'; //variables declaration and intialization.
// console.log(message);

let jeansPrice =((2499-(2499*41/100))-29);
let BagPrice =((15599-(15599*10/100))-272);
let bagValue =Math.round((jeansPrice + BagPrice + (20+25))*(118/100));
let bagSummary =`Your Total Order Summary is ₹ ${bagValue} `;

// console.log(bagSummary);

let CartQuantity = 10;
    document.querySelector('#cartSummary').innerText = `Your Bag has ${CartQuantity} Items`;