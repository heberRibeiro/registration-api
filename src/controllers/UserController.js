import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;

      res.json({ id, name, email });
    } catch (e) {
      res.status(400).json({ erros: e.errors.map(err => err.message) });
    }
  }

  async list(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.json(null);
    }
  }

  async fromID(req, res) {
    try {
      const users = await User.findByPk(req.userId);
      res.json(users);
    } catch (error) {
      res.json(null);
    }
  }

  async update(req, res) {
    try {
      const users = await User.findByPk(req.userId);

      if (!users) {
        res.status(400).json({
          erros: ['Usuário não existe'],
        });
      }

      const newData = await users.update(req.body);

      res.json(newData);
    } catch (error) {
      res.json(null);
    }
  }

  // delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const users = await User.findByPk(req.params.id);

      if (!users) {
        res.status(400).json({
          erros: ['Usuário não existe'],
        });
      }

      await users.destroy();

      res.json(null);
    } catch (error) {
      res.json(null);
    }
  }
}

export default new UserController();
