// what is function => block of code
    //-- kuchh code jo ki aap aage kabhi chalana chahoge to vo code chal jayega bass function ko call kar ne se
    //-- block of code which you can re-use and run at any point of time
        function abcd(){
            console.log('hello world!');
        }



// why function => jab bhi code aap ko turant nahi chalana and saath hi saath us code ko re-use bhi karna hai tab aap function banate ho


// -- console.log("hello world!"); ye code turant chal jayega
    /* -- functon abcd(){ // ye code turant nahi chalega
    console.log('hello world!');
        }

   ye function "abcd()" ab call hone par chalega // calling a function
*/
function paaniBharo(){
    console.log('ghar par aao');
    console.log('gate kholo');
    console.log('bathroom me jaao');
    console.log('nal chalu karo');
    console.log('paani bharo');
    console.log('nal band karo');
    console.log('bathroom se bahar aa jao');
}
paaniBharo(); // ise chalane par paaniBharo ke andar ka jo bhi code hoga vo chal jayega




// why we need functions => to reuse some code which is very long to rewrite

    /*
    Coding me ek theory chalti hai 
        WET => writing everything twice 
        DRY => do not repeat yourself
    */





// how to create function => function name(){}

    function helloBolo() {
        // is se function statements
    } // sabse comman type tarika ye hai

    ()=>{
        // fat arrow function
    }
    // total 6 types of function hote hai


// how to call a function => name();
    function abcd(){
        console.log('hello world!');
    }
    abcd(); // calling a function
    //-- jab bhi function banaoge vo khud b khud nahi chalega use tumhe call karna padega

// how to pass a parameter to a function

function greet(name) {
    console.log('hello', name);
}
greet('john'); // calling a function with argument
greet('shivam');
greet('sagar');
greet('ram');
greet('shyam');

function numbers(a,b,c,d)/* parameter */ {
    console.log(a,b,c,d); // 1 2 3 4
    console.log(a+b+c+d); // 10
    console.log(a,b); // 1 2 "3" was ignored
    console.log(a,b,c,d); // 1 2 3 undefined
}

// how to pass an argument to a function
numbers(1,2,3,4); // calling a function with arguments
numbers(1,2,3); // calling a function with arguments


// types of functions 

// 1. statement function
    function abcd() {
        // function statement
    }

// 2. expression function

    let abcd = function() {
        // function expression
    }

    // 3. anynomous function

    function(){
        // anynomous function
    }

    example: 
    var arr = [1,2,3,4]
    arr.forEach(function(){
        
    })

    // 4. fat arrow function

    let greet = () => {
        // fat arrow function
    }

    // 5. fat arrow function with one parameter 

    let abcd = a => {
        // fat arrow function with one parameter
    }
    abcd(12);
function greet() {
    log('hello world!');
}

greet();// ise chalane par greet ke andar ka jo bhi code hoga vo chal jayega 
greet();
greet();// is mai kitni bhi bar chala sakta hu


function abcd() {
    return "shivam"
}

var ans = abcd();

var abcd = ()=>12 
var ans = abcd();// apne aap return hoga 12 yane "inplicit" and likhne ke baad hoga tab "explicit"

// rest parameter ...

function abcd(a,b,c,...rest) {
    console.log(a,b,c,rest);
}
abcd(1,2,3,4,5,6,7,8,9,10)
// hoisting
// life
// hofs
// cd function 
// first class function 
// pure function 
// impure function 
// global scope 
// local scope
// closures