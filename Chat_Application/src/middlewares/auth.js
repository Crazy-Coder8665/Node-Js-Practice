const api = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const passportInit = require('../config/passportConfig');

passportInit(passport);

const users = [];

api.post('/login', (req, res) => {
  res.json('login');
});

api.post('/register', async (req, res) => {
  try {
    const hashPass = await bcrypt.hash(req.body.password, 10);
    users.push({
      email: req.body.email,
      password: hashPass,
      name: req.body.name,
    });
    res.redirect('/login');
  } catch {
   res.redirect('/register');
  }
  console.log(users);
});

module.exports = api;
