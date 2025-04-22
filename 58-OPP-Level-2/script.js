// function Toffee(){
//     this.name = 'alpenliebe'
// }

// let t1 = new Toffee()


// class Toffee{
//     constructor(){
//         this.name = 'mango bite'
//     }
// }

// let t1 = new Toffee()



// function Toffee(){
//     this.name = 'mango bite'
//     this.sayName = function(){// har baar apna apna khud ka sayName banega

//     }
// }

// let t1 = new Toffee()
// let t2 = new Toffee()


// function Toffee(name){
//     this.name = name;
//     this.price = 10;
// }
// let t1 = new Toffee('alpenliebe')
// let t2 = new Toffee('dairy milk')

// jab bhi constructure banaoge aur kuchh aisa mil gaya jo ki sab mein same hai to use kabhi bhi direct constructure mein banana galat tarika hota hai, par sahi tarika prototype ka use karna kyo ki prototype mein save karne par jitne bhi new ke saath instance banaoge wo saare instance by default tumhari proto ki value ko hold karege

// function Toffee(){
//     this.name = 'mango bite';
//     // this.price = 10;// ye clearly bevakufi hai 
// }


// function Toffee(name,price){
//     this.name = name;
//     this.price = 3;
// }

// let t1 = new Toffee('mango bite',1)
// let t2 = new Toffee('dairy milk',2)
// ye hame nahi karna hai


// ab dekhenge prototype = shared value


// function Toffee(name){
//     this.name = name
// }
// Toffee.prototype.price = 3;
// let t1 = new Toffee('alpenliebe')// yaha hamne price nahi likhi hai par tum asia man lo kyo ki hamne prototype mein me price ki value de di hai jo ki jab bhi consturcture function chalega tab tab price by default sab ko value mil jayegi
// let t2 = new Toffee('kachha aam')// yaha hamne price nahi likhi hai par tum asia man lo kyo ki hamne prototype mein me price ki value de di hai jo ki jab bhi consturcture function chalega tab tab price by default sab ko value mil jayegi


// function Human(name,age,isHandsome){
//     this.name = name;
//     this.age = age;
//     this.isHandsome = isHandsome;
    // this.seyHello = function(){// ye hogai bev kufi 
    //     console.log('Hello Shivam')
    // }
// }
// tum ne kya kiya hai factory mein hi setting change kar diye ho / factory ke root mein hi 
// Human.prototype.sayHello = function(){
//     console.log('Hello Shivam')
// }// human ke prototype mein kuchh add huva hai  

// new Human('Shivam',26,true)// toh jitne bhi human banate jaoge un h1 mein by default sayhello add hoga

// toh jab bhi new instance banaoge toh usme by default sayhello add ho jayega 


// sabse pahele property ko aap ke object me dundenge nahi mila toh prototype mein dundenge 

// let a = {
//     name:'harsh'
// }

// console.log(a.tostring())// tum ye kaise kar pa rahe ho


// example 

// let arr = [1,2,3,4,5]
// console.log(arr.length)// tum ye kaise use kar pa rahe ho, kahi se toh aaraha hoga (prototype se aaraha hai )

// function Toffee(name){
//     this.name = name;
//     this.price = 34;
// }

// Toffee.prototype.price = 10;

// let t1 = new Toffee('kachha aam')

// function Toffee(name,price){
//     this.name = "#)" + name;
//     this.price = price;
//     this.printMyName = function(){
//         // console.log(name)// ye naam to hamne bheja tha par ho sakta hai ki constructure function mein processing hui ho
//         // toh hum iske jagah bolenge 
//         console.log(this.name)// yaha par this represent karta hai function ka name naki humne jo diya tha vo name
//     }
// }

// let t1 = new Toffee('kachha aam',1)
// let t2 = new Toffee('mango bite',2)

function Employee(name,age,id,salary){
    this.name = name;
    this.age = age;
    this.id = id ; 
    this.salary = salary;
}

Employee.prototype.printDetails = function(){
    console.log(`${this.name} is my name and I am ${this.age} years old and  my id is ${this.id} and my salary is ${this.salary}`)
}

let  e1 = new Employee('Shivam',21,1234,50000)