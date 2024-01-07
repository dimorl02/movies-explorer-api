// Файл маршрута users/me
const userRouter = require('express').Router();

const {
  getUserInfoValidator,
  updateUserValidator,
} = require('../middlewares/validation');

const { getUserInfo, updateUser } = require('../controllers/users');

userRouter.get('/users/me', getUserInfoValidator, getUserInfo);
userRouter.patch('/users/me', updateUserValidator, updateUser);

module.exports = userRouter;
