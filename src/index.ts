import express from 'express';
import * as bodyParser from 'body-parser';
const mysql = require('mysql');

const app = express();
const router = express.Router();
const mysqlCon = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ts_server_db',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const select = 'select * from users;';
    mysqlCon.query(select, function (err: any, result: any) {
      if (err) throw err;
      res.send(result);
    });
  },
);

app.use('/', router);

app.listen(3000, () => {
  console.log('listing on port 3000');
});

mysqlCon.connect(function (err: any) {
  if (err) throw err;
  console.log('Connected!');
});

export default app;
