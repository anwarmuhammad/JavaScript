//temperature in kelvin scale
const kelvin=300;
//temperature in celcius
const celsius=kelvin-273;
//temperature in fahrenheit
let fahrenheit= Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
