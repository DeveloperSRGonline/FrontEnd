// rest parameters -> ... ise hi rest operator kahete hai

// function abcd(a,b,c,...chacha) { 
//     console.log(a,b,c,chacha);
    
// }
// abcd(1,2,3,4,5,6,7,8);




// hoisting -> js mein variable and functions bnate ho unme js dedclaration wala part top pe move kar deta hai or ise hum hoisting kahete hai.

// abcd(); // tum function ko pahele bhi call kar sakte ho 
// function abcd(){
//     console.log('hello world');
// }

// console.log(a);
// var a = 10; // this line converted to 
// var a; // then this line moved to the top of the code // declaration
// a = 10; // this two lines // initialization

// iife -> immediately invoked(chalana) function expression

// function ko wrap kar dena hai "()" paranthesis or small brackets se aur fat se chala do 
// (function abcd(){
//    var a = 12; // ye personal variable hai ye variable function ke bahar use nahi kar sakte hai
//    return a;
// })();


// var ans = (function abcd(){
//     var a = 12;

//     return {
//         set: function (val) {
//             a = val;
//         },
//         get: function () {
//             console.log(a);
//         },
//     }
// })();

// example: 

    // var Shery = (function sherylibrary(){
    //     var a = 12; // ye private variable hai
    
    //     return {
    //         imageEffect: function(){
    //             console.log('image effect');
    //         },
    //         mouseFollower: function(){
    //             console.log('mouse follower');
                
    //         },
    //     };
    // })();
// Shery.mouseFollower();



// hofs -> higher order function
//  -- ek aisa function jo yaa to return
// cb function
// first class function 
// pure function 
// impure function
// global scope
// local scope 
// closures