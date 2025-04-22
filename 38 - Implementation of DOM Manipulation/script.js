/*
Math.random() - inbuilt method 
-- range form => 0 to 1 
-- 1 & 0 nahi aata  bichi ki value aati hai 

var num = Math.floor(Math.random()*100)
console.log(num);

template literals 
var a = 19;
console.log(`hello ${a} bye`);

Project - 1: Random color generator
Project - 2: Picking random values form array 

*/

var num = Math.floor(Math.random()*100)
console.log(num);

var arr = [
    {
        team:'CSK',
        primary:'yellow',
        secondary:'green'
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'black'
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'gold'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold'
    },
    {
        team:'SRH',
        primary:'orange',
        secondary:'black'
    }
]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length)

    var winner = arr[num]

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.primary
    h1.style.color = winner.secondary
})

// https://github.com/saarthack/live1