import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Students from '../models/Student';

const models = [Students];
const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
