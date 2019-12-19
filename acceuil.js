
/**
 * Increment button
 */
let btnIncriment = document.querySelectorAll('.svg-increment');
let tabSvg = Array.from(btnIncriment);

for (let i in tabSvg) {
    tabSvg[i].addEventListener("click", () => {
        let plus = tabSvg[i].nextElementSibling
        plus.value = (Number(plus.value) + 1)
        TotalPrix();

    })
};


/*
*Decrement button
*/
let btnDecrement = document.querySelectorAll('.svg-decrement');
let tabSvgDec = Array.from(btnDecrement);
for (let i in tabSvgDec) {
    tabSvgDec[i].addEventListener("click", () => {
        let moins = tabSvgDec[i].previousElementSibling
        if (moins.value > 0) {
            moins.value = (Number(moins.value) - 1)
            TotalPrix();

        }
    })
};

/*
Total Prix
*/

function TotalPrix() {
    let total = document.querySelectorAll('.qte-input');
    let price = document.querySelectorAll('.price');
    let inputTotal = document.querySelector('.input-total');
    let somme = 0;
    for (let i = 0; i < price.length; i++) {
        somme = somme + Number(total[i].value) * Number(price[i].innerHTML);
    }
    inputTotal.value = somme;
}

/**
Remove product
*/

let btnDelete = document.querySelectorAll('.delete');
let arr = Array.from(btnDelete);
for (let i in arr) {
    arr[i].addEventListener('click', () => {
        
        let element=document.querySelectorAll(".product" + i);
        element.forEach(e =>e.parentNode.removeChild(e));
        console.log("succés");
        TotalPrix();
    


    });

}

/**
 * Function Like/Dislike
 */
let btnLike = Array.from(document.querySelectorAll('.heart'));
for (let i in btnLike) {
    btnLike[i].addEventListener('click', () => {
        if (btnLike[i].getAttribute('fill') == 'black') {
            btnLike[i].setAttribute('fill', 'red');

        }
        else {
            btnLike[i].setAttribute('fill', 'black');
        }
    })
}

