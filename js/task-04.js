
const counter={
    value:0,
    increment(){
        this.value+=1;
    },
    decrement(){
        this.value-=1;
    },
};
const counterValue =document.querySelector('#value');
const decrementBtn=document.querySelector('[data-action="decrement"]')
decrementBtn.addEventListener('click',()=>{
counter.decrement();
counterValue.textContent=counter.value;
})

const incrementBtn=document.querySelector('[data-action="increment"]')
incrementBtn.addEventListener('click',()=>{
    counter.increment();
    counterValue .textContent=counter.value;
});