import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response): void => {
  res.send(`
    <div>
      <h1>Hi There</h1>
    </div>
  `);
});

app.listen(3000, () => {
  console.log('Listenin on Port 3000');
});
