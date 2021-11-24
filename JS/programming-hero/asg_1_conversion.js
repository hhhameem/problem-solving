//write a function to convert seer to Mon

function seerToMon(seer){
    //error check
    if(typeof seer != 'number'){
        return 'Please Input numeric value';
    }
    var mon = seer/40;
    return mon;
}

// var seer = 'fourty'
var seer = 80;
var result = seerToMon(seer);
console.log(result);
