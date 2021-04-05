const btnRender=document.querySelector('[data-action="render"]');
const btnDestroy=document.querySelector('[data-action="destroy"]');
const divBoxes=document.querySelector('#boxes');
const input=document.querySelector('#controls input');
input.addEventListener('input',onGetAmount);
function onGetAmount (event){
    let amount=event.currentTarget.value;
    console.log(amount);
    createBoxes(amount);
}

btnRender.addEventListener('click',onGetAmount);
btnDestroy.addEventListener('click',destroyBoxes);
function createBoxes (amount){
let firstSize=30;
for (let i=0; i<amount; i+=1){
    let size=firstSize + i*10;
let nextDiv=document.createElement("div");
nextDiv.style.cssText=`width: ${size}px; height: ${size}px; background-color: rgba(${random()}, ${random()}, ${random()})`;
divBoxes.appendChild(nextDiv);
}
}
function destroyBoxes(){
    divBoxes.innerHTML='';

}
function random(){
    return Math.round(Math.random()*255);
}
