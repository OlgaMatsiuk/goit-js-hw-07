const input= document.querySelector('#validation-input');
input.addEventListener('change',onInputChange);
input.addEventListener('focus', onInputFocus);
const symbolsQuantity = Number(input.getAttribute('data-length'));

function onInputChange (event){
   if (event.currentTarget.value.length===symbolsQuantity){
    input.classList.add("valid");
}
    else input.classList.add("invalid");
    
}
function onInputFocus() {
    input.classList.remove('valid', 'invalid');
}