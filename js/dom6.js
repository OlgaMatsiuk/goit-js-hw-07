const input= document.querySelector('#validation-input');
input.addEventListener('change',onInputChange);
function onInputChange (event){
   if (event.currentTarget.value.length===6){
    input.classList.add("valid");
}
    else input.classList.add("invalid");
    
}