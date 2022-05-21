const api = require('express').Router();
const modal = require('../modals/user');

const User = modal.UserModal;
let Users = modal.UserArray;

// get Users
api.get('/', (req, res) => {
  res.send(Users);
});
// add User by admin
api.post('/', (req, res) => {
  const Userrole = req.role;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  if (Userrole === 'admin') {
    const newUser = new User(email, name, password, role);
    Users.push(newUser);
    res.status(200).json({ message: 'Book Saved' });
  }
});
// get by name
api.get('/name', (req, res) => {
  const name = req.body.name;
  for (let user of Users) {
    if (user.name === name) {
      res.json(user.name);
      return;
    }
  }
  res.status(404).jason({ message: 'User not found' });
});
// update record
api.put('/', (req, res) => {
  const email = req.body.email;
  const name = req.body.name === undefined ? null : req.body.name;
  const password = req.body.password === undefined ? null : req.body.password;
  for (let user of Users) {
    if (user.email === email) {
      if (name != null) {
        user.name = name;
      }
      if (password != null) {
        user.password = password;
      }
      res.json(user);
      return;
    }
  }
  res.status(404).json({ message: 'User not found' });
});
// delete
api.delete('/', (req, res) => {
  const email = req.body.email;
  Users = Users.filter(user => {
    if (user.email !== email) {
      return true;
    }
    return false;
  });
  res.status(404).json({ message: 'User Deleted' });
});

module.exports = api;
