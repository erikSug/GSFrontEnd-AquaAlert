const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
let cidade = document.getElementById('demo-cidade');
let slider = document.getElementById('water-level');
let alertAnimation = document.getElementById('ping');
let waterLevel = 0;


btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


function checkLevel(){
    if (waterLevel >= 70){
        cidade.style.backgroundColor = '#FF1C1C'
        alertAnimation.style.backgroundColor = '#FF1C1C'
        alertAnimation.style.display = 'block'
    }
    else if (waterLevel >= 40){
        cidade.style.backgroundColor = '#FFEC1C'
        alertAnimation.style.backgroundColor = '#FFEC1C'
        alertAnimation.style.display = 'block'
    }
    else{
        cidade.style.backgroundColor = '#1CFF46'
        alertAnimation.style.backgroundColor = '#1CFF46'
        alertAnimation.style.display = 'none'
    }
}




slider.oninput = function (){
    waterLevel = this.value;
}
setInterval(checkLevel, 1000);