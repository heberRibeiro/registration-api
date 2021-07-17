import Student from '../models/Student';
import File from '../models/File';

class StudentController {
  async list(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'lastName', 'email', 'age'],
      order: [['id', 'DESC'], [File, 'id', 'DESC']],
      include: {
        model: File,
        attributes: ['filename'],
      },
    });
    res.json(students);
  }

  async create(req, res) {
    try {
      const student = await Student.create(req.body);
      res.json(student);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const studentUpdated = student.update(req.body);

      res.json(studentUpdated);
    } catch (e) {
      res.status(400).json({
        errors: ['Erro na atualização'],
      });
    }
  }

  async fromID(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const student = await Student.findByPk(id, {
        attributes: ['id', 'name', 'lastName', 'email', 'age'],
        order: [['id', 'DESC'], [File, 'id', 'DESC']],
        include: {
          model: File,
          attributes: ['filename'],
        },
      });
      res.json(student);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      await Student.destroy();
      res.json('Apagado');
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default new StudentController();
