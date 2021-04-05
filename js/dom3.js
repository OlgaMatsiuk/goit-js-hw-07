const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const ulEl=document.querySelector('#gallery');

  const makeImagesFun=array=>array.map(item=>{
    const itemImg=document.createElement('li');
    itemImg.classList.add('galler');
    // const imageEl=document.createElement('img');
    // imageEl.src=item.url;
    // imageEl.alt=item.alt;
    // itemImg.appendChild(imageEl);
    itemImg.insertAdjacentHTML("afterbegin",`<img src=${item.url} alt=${item.alt} width='370'>`);
    return itemImg;
    console.log(itemImg);
  })

  const elements=makeImagesFun(images);
  console.log(elements);
  ulEl.append(...elements);

  
  
