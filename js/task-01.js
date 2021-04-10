const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`);

itemsRef.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsQuantity = item.querySelectorAll('li').length;
    console.log(`Категория: ${title}`)
    console.log(`Количество элементов: ${elementsQuantity}`)
})
