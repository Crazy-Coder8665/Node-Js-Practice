const api = require('express').Router();
const modal = require('../modals/user');

const User = modal.UserModal;

// get Users
api.get('/', (req, res) => {
  User.fetchAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
// add User by admin
api.post('/', (req, res) => {
  const Userrole = 'admin';
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.pass;
  const role = req.body.role;
  if (Userrole === 'admin') {
    const newUser = new User(email, name, password, role).save();
    res.status(200).json({ message: 'Account Created' });
  }
  res.status(404).json({ message: 'not admin' });
});
// get by email
api.get('/:email', (req, res) => {
  const email = req.body.email;
  User.fetchOne(email)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});
// update record
api.put('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.pass;
  const role = req.body.role;
  const newUser = new User(email, name, password, role).save();
  res.status(200).json({ message: 'Account Updated' });
});
// delete
api.delete('/', (req, res) => {
  const email = req.body.email;
  Users = Users.filter((user) => {
    if (user.email !== email) {
      return true;
    }
    return false;
  });
  res.status(404).json({ message: 'User Deleted' });
});

module.exports = api;
