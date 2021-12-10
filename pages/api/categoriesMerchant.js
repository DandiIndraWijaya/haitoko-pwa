// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import categoriesMerchantJSON from '@src/server/data/categoriesMerchant.json';

export default (req, res) => {
  res.status(200).json(categoriesMerchantJSON);
};
