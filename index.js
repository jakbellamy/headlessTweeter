import express from 'express';
import bodyParser from 'body-parser';

const PORT = 7565;
const router = express.Router();

const app = express()
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Headless Tweeter is Live!!');
});

app.listen(PORT, () => console.log(`Headless Tweeter is listening on port ${PORT}!`));
