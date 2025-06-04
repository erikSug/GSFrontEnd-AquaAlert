const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
let cidade = document.getElementById('demo-cidade');
let slider = document.getElementById('water-level');
let waterLevel = 0;





function checkLevel(){
    if (waterLevel >= 70){
        cidade.style.backgroundColor = '#FF1C1C'
    }
    else if (waterLevel >= 40){
        cidade.style.backgroundColor = '#FFEC1C'
    }
    else{
        cidade.style.backgroundColor = '#1CFF46'
    }
}


btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

slider.oninput = function (){
    waterLevel = this.value;
}
setInterval( checkLevel, 2000);