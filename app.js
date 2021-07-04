import dotenv from 'dotenv'; // eslint-disable-line
dotenv.config();

import './src/database'; // eslint-disable-line
import express from 'express'; // eslint-disable-line
import home from './src/routes/home'; // eslint-disable-line

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
  }
}

export default new App().app;
