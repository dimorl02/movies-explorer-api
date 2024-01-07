// Регулярное выражение
const regExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

// Секретный ключ для разработки и отладки приложения:
const SECRET_KEY_DEV = 'dev-secret-key';

const CREATED_CODE = 201;

module.exports = {
  regExp,
  SECRET_KEY_DEV,
  CREATED_CODE,
};
