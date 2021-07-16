import Student from '../models/Student';

class Home {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'José',
      lastName: 'da Silva',
      email: 'jose@jose.com',
      age: 50,
    });

    res.json(newStudent);
  }
}

export default new Home();
