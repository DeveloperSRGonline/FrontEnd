// Q.1. Log "Hello, JavaScript!" to the console in 3 different ways.

console.log('Hello World!')
console.warn('Hello World!')
console.error('Hello World!')
console.info('Hello World!')
console.table({name:"shivam",age:21})

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.

let cal = (35 * 2) - (10 / 2) + 7 
console.log(cal)

//3. Log the data type of "123", 123, true, and null using typeof.

console.log(typeof(cal))//number 
console.log(typeof('shivam'))//string
console.log(typeof(123))//number
console.log(typeof(true))//boolean
console.log(typeof (null))// object(javascript qrick)

// 4. Write a program that swaps the values of two variables.

let a = 12; 
let b = 13;
//method-1:
let c;
c = a;
a = b;
b = c;

//method-2:
[a,b] = [b,a]

//method-3:

a = a + b; // a = 25
b = a - b; // b = 12
a = a - b; // a = 13

console.log(a,b)

// 5. Use console.group() to organize logs into a group.

console.groupCollapsed('Gname')
console.log('task 1')
console.log('task 2')
console.log('task 3')
console.log('task 4')
console.groupEnd()

// nested group

console.group('API call data')
console.group('this is collapsed group')
console.log('I am inside a collapsed group')
console.groupEnd()
console.log('request send...')
console.log('request recived...')
console.log('request prompt...')
console.log('request error...')
console.groupEnd();


// 6. Declare a const object, modify its properties, and log the updated object.

const obj = {
    name:'shivam',
    age:21,
    email:'test@gmail.com'
}
// constant se aap value change nahi kar sakte update kar sakte ho value ke andar ki chiije
Object.freeze(obj)// agar aap ye nahi chahte ki object ke andar ki value change ho toh ye use kar na hoga 
obj.age = 32;
console.log()


// 7. Convert "50" (string) into a number using 3 different methods.

console.log(+true)// 1
console.log(+false)// 0

console.log(true)// true
console.log(false)// false

console.log("50")// 50 --> as string
console.log(+"50")// 50 as a number

console.log(parseInt("50"))// 50 --> as a number
console.log(parseInt("-50"))// -50 --> as a number

// 8. Check if "JavaScript" contains "Script" without using .includes().

let str = 'JavaScript'

console.log(str.indexOf('Script') !== -1)//true
console.log(str.indexOf('Scriptan') !== -1)//true

console.log(str.indexOf('Script'))//4 --> give index if present
console.log(str.indexOf('hello'))//-1 -- if not present 

if(str.search('Script') !== -1){
    console.log(true)
}
else{
    console.log(false)
}

// 10. Explain the difference between undefined, null, and NaN with examples.

// undefined: Jab variable declare kiya ho but usko koi value assign nahi ki gayi ho.
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

// null: Jab aap jaan bujh ke kisi variable ko khali (empty) set karte ho.
let y = null;
console.log(y); // null
console.log(typeof y); // "object" (ye ek JavaScript ka purana bug hai)

// NaN: "Not-a-Number" ka short form hai. Ye tab hota hai jab koi invalid mathematical operation ho.
let z = "hello" * 2;
console.log(z); // NaN
console.log(typeof z); // "number" (NaN ka type number hota hai)