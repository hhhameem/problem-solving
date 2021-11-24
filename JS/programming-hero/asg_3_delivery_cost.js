//write a function to count total delivery cost.

function deliveryCost(shirt) {
    const highDeliveryCost = 100;
    const mediumDeliveryCost = 80;
    const lowDeliveryCost=50;
    //error checking
    if (typeof shirt != "number") {
        return "Please input numeric value";
    }
    //for first hundred
    if (shirt <= 100) {
        return shirt * highDeliveryCost;
    }
    //for 101-200
    else if (shirt <= 200) {
        const firstHundredCost = 100 * highDeliveryCost ;
        const restShirt = shirt - 100;
        const secondHundredCost = restShirt * mediumDeliveryCost;
        return firstHundredCost + secondHundredCost;
    }//for upper 200
    else {
        const firstHundredCost = 100 * highDeliveryCost ;
        const secondHundredCost = 100 * mediumDeliveryCost;
        const restShirt = shirt - 200;
        const thirdHundredCost = restShirt * lowDeliveryCost;
        return firstHundredCost+secondHundredCost+thirdHundredCost;
    }
}
// const cost = deliveryCost('150');
const cost = deliveryCost(100);
console.log(cost);