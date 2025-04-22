
// Q.1. 
var age = Number(prompt('Enter your age'));

if (age < 18) {
  alert('you are a minor');
} else if (age >= 18 && age <= 60) {
  alert('You are an adult');
}else if(age > 60){
    alert('you are a senier citizen')
}else{
    alert('invalid age')
}   

