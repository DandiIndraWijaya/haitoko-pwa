// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import merchantDetailJSON from '@src/server/data/merchantDetail.json';

export default (req, res) => {
  res.status(200).json(merchantDetailJSON);
};
