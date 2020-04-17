import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.send('hello world');
  },
);

app.use('/', router);

app.listen(3000, () => {
  console.log('listing on port 3000');
});

export default app;
