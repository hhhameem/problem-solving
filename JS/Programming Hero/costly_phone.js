//find out the costly phone from an array of object


const phones = [
    {name:'samsung M61', price:34000},
    {name:'samsung M60', price:33000},
    {name:'samsung M59', price:32000},
    {name:'samsung M62', price:35000},
    {name:'samsung M58', price:32000},
    {name:'samsung M57', price:30000}
];

let costly = phones[0];
for (const phone of phones) {
    if (phone.price > costly.price) {
        costly = phone;
    }
}
console.log(`Costly phone is ${costly.name}`);