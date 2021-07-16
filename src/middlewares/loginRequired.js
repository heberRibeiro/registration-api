import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      erros: ['Login Required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = data;
    req.userId = id;
    req.userEmail = email;

    next();
  } catch (error) {
    res.status(401).json({
      erros: ['Token Expirado ou Inválido'],
    });
  }
};