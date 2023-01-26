//convert from kelvin to celsius , Fahrenheit and newton
//The value saved to kelvin will stay constant
const kelvin = 273;
//convert Kelvin to Celsius by subtracting 273 
const celsius = kelvin - 273;
// this equation to calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Use the .floor() method 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Convert celsius to the Newton
let newton = celsius * (33/100);
//Use the .floor() method 
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);


