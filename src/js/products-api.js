import axios from 'axios';
axios.defaults.baseURL = 'http://dummyjson.com';

export async function getProductsCategories() {
  try {
    const response = await axios.get('/products/category-list ');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getProducts(currentPage = 1) {
  try {
    const response = await axios.get(
      `/products?limit=12&skip=${(currentPage - 1) * 12}`
    );
    console.log(response);
    return response.data.products;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getProductsByCategory(category = smartphones) {
  try {
    const response = await axios.get(`/products/category/${category}`);
    return response.data.products;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getProductById(id = 1) {
  try {
    const response = await axios.get(`/products/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
