// script.js
const PRODUCTS = [ 
  {id:1,title:'Surre Slim Fit',category:'suits',price:28,colors:['Black','Blue'],sizes:['S','M','L'],img:'https://picsum.photos/seed/p1/600/400'},
  {id:2,title:'Tishet Classic',category:'shirts',price:15,colors:['White','Black'],sizes:['S','M','L'],img:'https://picsum.photos/seed/t1/600/400'},
  {id:3,title:'Ufata Qorra Parka',category:'jackets',price:55,colors:['Black'],sizes:['M','L'],img:'https://picsum.photos/seed/j1/600/400'},
  {id:4,title:'Borsa Elegant',category:'men',price:12,colors:['Brown','Black'],sizes:['One Size'],img:'https://picsum.photos/seed/b1/600/400'}
];

function renderProductsFor(cat) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const list = PRODUCTS.filter(p => p.category === cat);
  list.forEach(p => {
    const d = document.createElement('div');
    d.className = 'product';
    d.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h4>${p.title}</h4>
      <div class="price">$${p.price}</div>
      <div class="select-row">
        <select>${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select>
        <select>${p.colors.map(c=>`<option>${c}</option>`).join('')}</select>
      </div>
    `;
    grid.appendChild(d);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  const cat = window.PAGE_CATEGORY || '';
  if(['shirts','suits','jackets','men'].includes(cat)){
    renderProductsFor(cat);
  }
});

