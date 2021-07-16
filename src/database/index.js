import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Students from '../models/Student';
import User from '../models/User';

const models = [Students, User];
const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
