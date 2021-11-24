//value conversion


function inchToFoot(inch){
    let foot = inch * 0.0833333;
    return foot;
}

function milesToKilometer(miles){
    return miles * 1.60934;
}


console.log("Inch to Foot: ",inchToFoot(13))
console.log("Miles to Kilometer: ",milesToKilometer(12))