
var plusBtn = document.querySelectorAll('.plus')
console.log(plusBtn)
var moinsBtn = document.querySelectorAll('.minus')
var tab = document.querySelectorAll('.price')
console.log(tab)

// var zéro = document.querySelectorAll('p')
// console.log(zéro)

function handleButton(event){
var specificBtn = event.target
console.log(specificBtn.className)
var diiiv= specificBtn.parentElement 
console.log(diiiv)
var numéro= diiiv.querySelector('p').innerHTML
console.log(numéro) 
var num=Number(numéro)
if (specificBtn.className==="minus" && num >0){
    num--
}else if(specificBtn.className==="plus"){

    num++
}


diiiv.querySelector('p').innerHTML = num
console.log(num)


var trr= diiiv.parentElement
var tdd=trr.parentElement
var price = tdd.querySelector('.price').innerHTML
var up = tdd.querySelector('.unitPrice').innerHTML
var num1 = Number(up)
var num2 = Number(price)
num2= num1*num
tdd.querySelector('.price').innerHTML = num2

var som=0;
for (let i = 0; i < tab.length; i++) {
   var price = Number(tab[i].innerHTML);
   som+=price
    
}
document.getElementById('total').innerHTML=som
}



for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click',handleButton)


}
for (let j = 0; j < moinsBtn.length; j++) {
    moinsBtn[j].addEventListener('click',handleButton)
}

var color =document.querySelectorAll('.like')
console.log(color)


for (let i = 0; i < color.length; i++) {
   color[i].addEventListener('click',coeur)
}


function coeur (event1){
    var spcButtom = event1.target
    if (spcButtom.style.color == ('red')){
        spcButtom.style.color =('#424242')
    }
    else {
    spcButtom.style.color = ('red')
    }
   
    
    
    
    




    

    
    

}
