// VAT exercise 1
const vat = 0.21;
const vatFood = 0.09;

let calculateVatAmount = function (basePrice){
    console.log('Entering calculateVatAmount..');
    return basePrice * vat;
};

let priceIncludingVat = function (basePrice) {
    console.log('Entering priceIncludingVat..');
    return basePrice + calculateVatAmount(basePrice);
};

const price = 20;

console.log('basePrice: ' + price);
console.log('21% of basePrice: ' + calculateVatAmount(price));
console.log('basePrice + vat: ' + priceIncludingVat(20));