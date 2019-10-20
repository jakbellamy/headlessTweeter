import express from 'express';
import bodyParser from 'body-parser';

import {scraper} from './lib/scraper.js';

const PORT = 7565;
const router = express.Router();

const app = express()
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Headless Tweeter is Live!!');
});

app.route('/scrape_user')
  .post(async function (req, res, next) {
    let user = req.body.user
    let tweets = await scraper(user)
    res.send({tweets: tweets})
  });

app.listen(PORT, () => console.log(`Headless Tweeter is listening on port ${PORT}!`));
