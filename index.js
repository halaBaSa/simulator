/*const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');
const b5 = document.querySelector('#b5');
const b5value = document.getElementById("b5").getElementsByClassName("valeur")[0];
const b5v = document.querySelector("#b5input").value;
const b6 = document.querySelector('#b6');
const b7 = document.querySelector('#b7');
const b8 = document.querySelector('#b8');
const b9 = document.querySelector('#b9');
const plus400 = document.querySelectorAll('.plus4');
const minus400 = document.querySelectorAll('.minus4');
const totaleCost = document.querySelector('.estimate-price')
const plus = document.querySelector(".plus");*/






const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");
const s6 = document.getElementById("s6");
const totaleCost = document.querySelector('.estimate-price')


let estimation = 0;



s2.addEventListener('click', () => {
    estimation += 1000;
    totaleCost.innerHTML = estimation;
});

s3.addEventListener('click', () => {
    estimation += 1500;
    totaleCost.innerHTML = estimation;
});

s4.addEventListener('click', () => {
    estimation += 2000;
    totaleCost.innerHTML = estimation;
});

s5.addEventListener('click', () => {
    estimation += 2500;
    totaleCost.innerHTML = estimation;
});

s6.addEventListener('click', () => {
    estimation += 3000;
    totaleCost.innerHTML = estimation;
});

/*
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

*/



/*var OnClickEventFn = function(Element, PriceAction) {
        Element.addEventListener('click', () => {
            estimation = estimation + parseInt(PriceAction, 10);
            totaleCost.innerText = estimation;
        });
    }
    //OnClickEventFn(b5, b5v);

var OnClickEventS = function(Element, PriceAction) {
    Element.addEventListener('click', () => {
        estimation = estimation + parseInt(PriceAction, 10);
        totaleCost.innerText = estimation;
    });
}

var startSum = function() {
    let onServices = document.getElementsByClassName("on");
    console.log(onServices);

    for (i = 0; i <= onServices.length; i++) {
        /*var price = onServices[i].querySelector(".valeur");
        estimation = estimation + parseInt(price, 10);
        totaleCost.innerText = estimation;
        console.log(estimation, price);

}
}

plus.addEventListener('click', () => {
    event.preventDefault();
    var parentTarget = event.target;
    var parent = parentTarget.parentElement;
    parent.classList.remove("off");
    parent.classList.add("on");




});

startSum();*/

// input 

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const lInput = document.querySelector("input[name ='quantite']");
var event = new Event('change');

lInput.addEventListener('change', () => {
    var count = lInput.value;
    estimation = count * 500;
    totaleCost.innerHTML = estimation;
    console.log(count);

})

minus.addEventListener('click', () => {
    var count = parseInt(lInput.value) - 1;
    count = count < 0 ? 0 : count;
    lInput.value = isNaN(count) ? 0 : count;
    lInput.dispatchEvent(event);

})

plus.addEventListener('click', () => {
    var count = parseInt(lInput.value) + 1;
    lInput.value = isNaN(count) ? 0 : count;
    lInput.dispatchEvent(event);

})