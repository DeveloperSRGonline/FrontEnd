let img = document.getElementById('img')
img.addEventListener('dblclick', function(){
    let likeDiv = document.querySelector('.like');
    likeDiv.style.display = 'block'; // Show the heart
    likeDiv.classList.add('animate');
    console.log('Double Clicked')

    setTimeout(() => {
        likeDiv.style.display = 'none';
        likeDiv.classList.remove('animate');
    }, 1000);
});
