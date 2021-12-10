import productsJSON from '@src/server/data/products.json';

export default (req, res) => {
  const productCategory = req.query.category;
  const productList = productsJSON.response;
  const productBasedOnID = productList.filter((prod) => prod.kategori.toLowerCase() === productCategory.toLowerCase());

  if (productBasedOnID.length > 0) {
    res.statusCode = 200;
    res.json(productBasedOnID.pop());
  } else {
    res.statusCode = 404;
    res.send('Not found - ID is not related to any products');
  }
};
