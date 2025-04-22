let arr = [
    {
        user : 'Jai',
        age : 36,
        istatus:'Stranger',
        image : 'https://th.bing.com/th/id/OIP.MM-m1Y4ZS4UuVsHDm_8GFgAAAA?pid=ImgDet&w=205&h=131&c=7&dpr=1.9'
    },
    {
        user : 'Veer',
        age : 34,
        istatus:'Stranger',
        image : 'https://th.bing.com/th/id/OIP.b44eKMCFvcvazV3C6ZIwiAHaFj?pid=ImgDet&w=205&h=153&c=7&dpr=1.9'
    },
    {
        user : 'Thakur',
        age : 75,
        istatus:'Stranger',
        image : 'https://th.bing.com/th/id/OIP.N67pJvIBdCbFYm9zrhTRJQHaEG?pid=ImgDet&w=205&h=113&c=7&dpr=1.9'
    },
]

function kitneAadmiThe(){
    let sum = '';
    arr.forEach(function(elem, idx){
        let color = elem.istatus === 'Friend' ? 'greenyellow' : 'red';
        sum = sum +  `<div id="form">
                <img src="${elem.image}" alt="">
                <h1>${elem.user}</h1>
                <h5>${elem.age}</h5>
                <h4 style="color: ${color};">${elem.istatus}</h4>
                <button id=${idx}>Add Friend</button>
            </div>`;
    });

let cont = document.querySelector('#cont')

cont.innerHTML = sum
}
kitneAadmiThe();

let cont = document.querySelector('#cont');
if (cont) {
    cont.addEventListener('click', function(dets) {
        let gold = arr[dets.target.id]; // its golden value
        if (gold) {
            if (gold.istatus === 'Friend') {
                gold.istatus = 'Stranger';
            } else {
                gold.istatus = 'Friend';
            }
            kitneAadmiThe(); // Re-render the updated status
        }
    });
}