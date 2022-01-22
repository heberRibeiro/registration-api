require('dotenv').config();

const host = process.env.BACKEND_SERVER_HOST;
const port = process.env.BACKEND_SERVER_PORT;

export default {
  url: `http://${host}:${port}`,
};
