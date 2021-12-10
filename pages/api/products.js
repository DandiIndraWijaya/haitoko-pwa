// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productslJSON from '@src/server/data/products.json';

export default (req, res) => {
  res.status(200).json(productslJSON);
};
