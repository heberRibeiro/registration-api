import Student from '../models/Student';

class Home {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'José',
      lastName: 'da Silva',
      age: 50,
    });

    res.json(newStudent);
  }
}

export default new Home();
