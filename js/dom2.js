const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsElements=document.querySelector('#ingr');
//   console.log(ingredientsElements);

  const makeIngredients=array=>array.map(item =>{
      const ingrItemEl=document.createElement('li');
      ingrItemEl.textContent=item;
      console.log(ingrItemEl);
      return ingrItemEl;
}
)
const elements=makeIngredients(ingredients);
  // console.log(elements);
  ingredientsElements.append(...elements);
