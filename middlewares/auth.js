const jwt = require('jsonwebtoken');
const { SECRET_KEY_DEV } = require('../utils/constants');

const { NODE_ENV, SECRET_SERVER_KEY } = process.env;
const AuthError = require('../errors/AuthError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer')) {
    throw new AuthError('Необходима авторизация!');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? SECRET_SERVER_KEY : SECRET_KEY_DEV,
    );
  } catch (err) {
    next(new AuthError('Необходима авторизация!'));
    return;
  }
  req.user = payload;
  next();
};
