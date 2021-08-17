//write a function to count total sales quantity.

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    const ShirtPrice = 100;
    const PantPrice = 200;
    const ShoePrice = 500;
    //error checking
    if (typeof shirtQuantity != "number") {
        return "Please input numeric value";
    }
    if (typeof pantQuantity != "number") {
        return "Please input numeric value";
    }
    // Total Sell
    const totalSell = (shirtQuantity * ShirtPrice) + (pantQuantity * PantPrice) + (shoeQuantity * ShoePrice);
    return totalSell;
}

// const sellPerDay = totalSales('1', 2, 3);
const sellPerDay = totalSales(1, 2, 3);
console.log(sellPerDay);