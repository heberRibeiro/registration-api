import Student from '../models/Student';

class StudentController {
  async list(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }
}

export default new StudentController();
