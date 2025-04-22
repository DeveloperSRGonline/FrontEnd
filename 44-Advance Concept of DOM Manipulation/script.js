//JSON data to frontend
// Event Bubbling
// Local storage

// let arr = [10,20,30,40,50]
// let arr = ['harsh','shivam','sagar','ali']
// let arr = [10,'hello',30.3,true,50,60]
// console.log(arr[3])
// console.log(arr.length)

// arr.forEach --> is Higher Order Function
// arr.forEach(function(e,i){ // for each jitne "element" utne baar chalega 
//     console.log(i,e)  // pahela para meter element deta hai and second parameter index dega and naam kuchh bhi rakh sakte ho 
// })

// for(let i = 1; i<=5; i++){
    //     console.log(i)
    // }




    let arr = [
        {
            user: 'Sarthak',
            age:30,
        },
        {
            user: 'Heera',
            age:30,
        },
        {
            user: 'BhanuPratap',
            age:30,
        }
    ]

    console.log(arr[0].age)

    // Local storage - 5mb
// website se related data store hota hai user ki imformation like theme , login id 

//session storage -- user 