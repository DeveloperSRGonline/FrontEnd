// /*
// javascript :
//     DOM
//     Backend
//     libraries
//     dextop apps
//     mobile apps

// DOM - Document Object Model 
// - frontend ki javascript 

// 4 Pillors of javascript:
//     - selection of elements ✅
//     - changing html ✅
//     - changing css ✅
//     - event listener ✅

//     */
// let h1 = document.querySelector('h1')


// h1.addEventListener('move')
// h1.addEventListener('drag')
// h1.addEventListener('keyboard')
// h1.addEventListener('dblclick')

// h1.addEventListener('click',function(){ // click hi likhna kilik nahi likhna 😂
//     h1.innerHTML = 'kubhi likh lo yaha par '
//     h1.style.color = 'yellow'
//     h1.style.backgroundColor = '#ff0000'
//     console.log('clicked on h1')
// })

// h1.addEventListener('click',function(){
//     console.log('clicked on h1')
//     h1.innerHTML = 'nice'
//     h1.style.color = 'red'
//     h1.style.fontsize = '100px' // ye size change karega
// })

// let box = document.querySelector('#box')

// box.innerHTML = 'changed'// changed 

// // let h2 = document.querySelector('h2')// kya lagta hai kon select huva hoga tino mein se 🤔
// // ek se jyada rahe to ye "pahele" vale ko select karta hai 🆗

// // agar hame saare h1 ko select karna hai toh hame use karna padega querySelectorAll ko kuchh aise:👍


// let h2 = document.querySelectorAll(h2)// ye saare h2 ko toh select kar lega lekin "#NODE_LIST" ke form mein karega 
// // aisa samajh sakte ho ki ye array ke form isne select kar liya 

// // agar pahela h2 uthana ho toh kuchh is tarike se likh sakte ho :

// console.log(h2[0])// toh ye pahela element select karega 

// h2[0].innerHTML = 'changed num 1'// is se pahela element change hoga  
// h2[1].innerHTML = 'changed num 1'// is se dusra element change hoga 
// h2[2].innerHTML = 'changed num 1'// is se tisra element change hoga

// let hero = document.getElementById('hero')// #hero nahi likhenge 
// // let h1 = document.querySelector('#hero')// #hero nahi likhenge 

// box.innerHTML =  'changed'// aur yaha html hi change hojata hai  
// box.textContent =  'changed' // yaha text content change huva hai

// // ek example se samajh te hai :

// box.innerHTML = '<h1>Hue hue😂</h1>'// output : Hue hue😂 // ye as a h1 heading print hoga 
// box.textContent = '<h1>Hue hue😂</h1>' // output : <h1>Hue hue😂</h1> // jaise ka vaisa print ho gaya hai 


let btn = document.querySelector('button')
let box = document.getElementById('box')

btn.addEventListener('click', function() {
    // console.log('hello')
    box.style.backgroundColor = 'red'
})

