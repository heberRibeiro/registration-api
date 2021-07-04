import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      lastName: Sequelize.STRING,
      age: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }
}
