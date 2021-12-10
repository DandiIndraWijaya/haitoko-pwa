import productsJSON from '@src/server/data/products.json';

const getProducts = (category) => {
  const productCategory = category;
  const productList = productsJSON.response;
  const productBasedOnID = productList.filter((prod) => prod.kategori.toLowerCase() === productCategory.toLowerCase());
  return productBasedOnID;
};
export default getProducts;
