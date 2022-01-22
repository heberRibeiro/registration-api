// global
import dotenv from 'dotenv';
import { resolve } from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// config
import './src/database';
// local
import user from './src/routes/user';
import login from './src/routes/login';
import student from './src/routes/student';
import file from './src/routes/file';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/users/', user);
    this.app.use('/login/', login);
    this.app.use('/students/', student);
    this.app.use('/files/', file);
  }
}

export default new App().app;
