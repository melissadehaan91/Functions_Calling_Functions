

const checkAge = function(age){
    console.log('Entering checkAge..')
    return age >= 18;
};

//console.log(checkAge(age));

let greeting = function(age){
    console.log('Entering greeting..');
    if (checkAge(age)){
        return 'Hello there';
    } 
    return 'Hey kiddo';
}

console.log(greeting(7));
console.log(greeting(33));