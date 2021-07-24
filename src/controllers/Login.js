import jwt from 'jsonwebtoken';
import User from '../models/User';

class Login {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      res.status(401).json({
        erros: ['Credenciais Inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({
        erros: ['Usuário não existe'],
      });
    }

    if (!await user.isPasswordValid(password)) {
      res.status(401).json({
        erros: ['Senha Inválida'],
      });
    }

    const { id } = user;
    const payload = { id, email };
    const options = { expiresIn: process.env.TOKEN_EXPIRATION };

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, options);

    res.json({ token, user: { name: user.name, id, email } });
  }
}

export default new Login();
