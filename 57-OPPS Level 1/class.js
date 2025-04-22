// hota kya hai 
    // objects ko create karna jo ki sirf data hold naa kare unki functionality bhi hold kare,aur aise object ko create karna with a blueprint model

// hum ek class banayenge us class se kai saare objects banenge ab vo har object data hold karega functionalities bhi hold karega jisko hum use methods kahete hai, ye sab manually na karna pade isliye hum opps ka istemal karte hai

// kyo use hota hai clean code likne ke liye modular code ko likh ne ke liye jyada managable ho

// problem 
// agar tumhe kai saare objects karne ho 

var obj = {
    name : 'shivam',
    age:21
}

// agar hame 100 object create karne ho to tumhe ise 100 baar copy paste karna padega 

// agar tumhe kai saare objects create karne ho to tum saare objects ko alag alag variable me store karoge, isse achha ho ki tum ek class banao jo ki naye objects banayegi aur wo har objects apna data khud hold karega and last mein ,jitne bhi methods hoge wo data share karege

// class banate hai taki usse naye objects baha sake

// construtrure function

function Cupcake(){
    this.name = 'harsh',
    this.age = 26
}
new Cupcake()

// agar function ko kabhi bhi call karte waqt tumne new ka use kiya turant man mein blank object banaao
// jab bhi function mein this ko dekho 

// ye tha purana tarika objects banane ka ek constructor function se jab javascript me class ka concept nahi tha 

class Toffee{
    Constructor(){

    }
}

// har baar class banate hi paheli chij ye karoge ki constructor function 1