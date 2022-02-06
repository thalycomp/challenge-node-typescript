import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);

app.listen(3333, () => {
  console.log('Server OK');
});

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});
