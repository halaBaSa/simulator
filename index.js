const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');
const b5 = document.querySelector('#b5');
const b6 = document.querySelector('#b6');
const b7 = document.querySelector('#b7');
const b8 = document.querySelector('#b8');
const b9= document.querySelector('#b9');
const plus400 = document.querySelectorAll('.plus4');
const minus400 = document.querySelectorAll('.minus4');
const totaleCost = document.querySelector('.estimate-price')
let estiamtion = 1000;

console.log(b1);

b1.addEventListener('click', () => { 
    let estiamtion = 1000;
    estiamtion += 1500;
    totaleCost.innerText = estiamtion
});
b2.addEventListener('click', () => { 
    let estiamtion = 1000;
    estiamtion += 1400;
    totaleCost.innerText = estiamtion
});
b3.addEventListener('click', () => { 
    let estiamtion = 1000;
    estiamtion += 1300;
    totaleCost.innerText = estiamtion
});


b4.addEventListener('click', () => { 
    estiamtion += 1200;
    totaleCost.innerText = estiamtion
});
b5.addEventListener('click', () => { 
    estiamtion += 1100;
    totaleCost.innerText = estiamtion
});
b6.addEventListener('click', () => { 
    estiamtion += 1000;
    totaleCost.innerText = estiamtion
});


b7.addEventListener('click', () => { 
    estiamtion += 900;
    totaleCost.innerText = estiamtion
});
b8.addEventListener('click', () => { 
    estiamtion += 800;
    totaleCost.innerText = estiamtion
});
b9.addEventListener('click', () => { 
    estiamtion += 700;
    totaleCost.innerText = estiamtion
});


plus400.addEventListener('click', () => { 
    estiamtion += 400;
    totaleCost.innerText = estiamtion
});
minus400.addEventListener('click', () => { 
    estiamtion -= 400;
    totaleCost.innerText = estiamtion
});

