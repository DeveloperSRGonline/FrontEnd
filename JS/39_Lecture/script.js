var btn = document.querySelector('button');
var percent = document.querySelector('#percent');
var growth = document.querySelector('#growth');
var grow = 0;
btn.addEventListener('click',function(){
    let int = setInterval(() => {
         grow++;
         percent.innerHTML = grow+'%';
         growth.style.width = grow+'%';
    }, 50);

    setTimeout(function(){
        clearInterval(int);
        btn.innerHTML = 'downloaded';
        btn.disabled = true;
        btn.style.opacity = '0.5';
    },5000)
})
