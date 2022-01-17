import app from './app';

const dotenv = require('dotenv');

dotenv.config();

const { env } = process;

const port = env.BACKEND_SERVER_PORT;
const host = env.BACKEND_SERVER_HOST;

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`Server running http://${host}:${port}/`);
});
