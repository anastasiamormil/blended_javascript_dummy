import {
  getProductsCategories,
  getProducts,
  getProductsByCategory,
  getProductById,
} from './js/products-api';
import { categoriesList, productsList, modalWindow } from './js/refs';

import {
  renderCategoriesMarkup,
  renderProductsMarkup,
  createModalMarkup,
} from './js/render-function';
async function renderCategories() {
  try {
    const categories = await getProductsCategories();
    const allCategories = ['All', ...categories];
    renderCategoriesMarkup(allCategories);
  } catch (error) {
    console.log(error.message);
  }
}
renderCategories();
getProducts();

async function renderProducts() {
  try {
    const products = await getProducts();
    renderProductsMarkup(products);
  } catch (error) {
    console.log(error.message);
  }
}
renderProducts();
categoriesList.addEventListener('click', handlerClick);

async function handlerClick(event) {
  const clickedBtn = event.target.closest('.categories__btn');
  if (!clickedBtn) {
    return;
  }
  const buttons = document.querySelectorAll('.categories__btn');
  buttons.forEach(el => {
    el.classList.remove('categories__btn--active');
  });
  clickedBtn.classList.add('categories__btn--active');
  const categoryName = clickedBtn.textContent;
  let products = [];
  console.log(categoryName);
  if (categoryName === `All`) {
    products = await getProducts();
  } else {
    products = await getProductsByCategory(categoryName);
  }
  renderProductsMarkup(products);
}
productsList.addEventListener('click', handlerProductListClick);
async function handlerProductListClick(event) {
  const productCard = event.target.closest('.products__item');
  console.log(productCard);
  if (!productCard) {
    return;
  }
  const productId = productCard.dataset.id;
  console.log(productId);
  const product = await getProductById(productId);
  createModalMarkup(product);
  modalWindow.classList.add('modal--is-open');
}
// getProductById();
