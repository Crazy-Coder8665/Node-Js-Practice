const api = require('express').Router();
const controller = require('../controllers/controller');

api.post('/register', (req, res) => {
  controller.register(req, res);
  if (req.userVerify === -1) {
    res.status(404).json({ message: 'email or password is invalid' });
  } else {
    res.status(200).json({ message: 'Register Success' });
  }
});

api.post('/login', (req, res) => {
  controller.login(req, res);
  if (req.loginVerify === -1) {
    res.status(404).json({ message: 'email or password is invalid' });
  } else {
    res.status(200).json({ message: 'Login Success' });
  }
});

module.exports = api;
