const categories = document.querySelectorAll('.item').length;
console.log(`В списке ${categories} категории`);

const animalsTitle = document.querySelector('.animalsTitle').textContent;
console.log(`Категория: ${animalsTitle}`);
const animals = document.querySelectorAll('.animals').length;
console.log(`Количество элементов: ${animals}`);

const productsTitle = document.querySelector('.productsTitle').textContent;
console.log(`Категория: ${productsTitle}`);
const products = document.querySelectorAll('.products').length;
console.log(`Количество элементов: ${products}`);

const technologiesTitle = document.querySelector('.technologiesTitle').textContent;
console.log(`Категория: ${technologiesTitle}`);
const technologies = document.querySelectorAll('.technologies').length;
console.log(`Количество элементов: ${technologies}`);
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Пиши код ниже этой строки
//   const totalPrice = pricePerDroid * orderedQuantity;
//     if customerCredits>totalPrice {
//       message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits-totalPrice} кредитов`; }
//       else {
//         message = 'Недостаточно средств на счету!';
//       }
//     // Пиши код выше этой строки
//     return message;
//   }
//   console.log (makeTransaction(3000, 5, 23000));
