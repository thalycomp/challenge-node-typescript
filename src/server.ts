import app from './app';

const { PORT } = process.env;
const port = 3333 || PORT;

app.listen(port, () => {
  console.log('Server OK');
});
