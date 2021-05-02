const vatPercentage = 21;
const vatFoodPercentage = 9;

let calculateVat = function (price){
    console.log('Entering calculateVat..')
    return price / (100 + vatPercentage) * vatPercentage;  
};


let priceExcludingVat = function (price){
    console.log('Entering priceExcludingVat..');
    let vat = calculateVat(price);
    let basePrice = price - vat;
    return [basePrice, vat];
};

let result = priceExcludingVat(24.2);
console.log('Price excluding VAT ' + result[0]);
console.log('VAT of price ' + result[1]);