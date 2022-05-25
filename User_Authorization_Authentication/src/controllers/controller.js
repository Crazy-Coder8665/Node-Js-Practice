const modal = require('../modals/user');

const User = modal.UserModal;
const Users = modal.UserArray;

const register = (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const name = req.body.name;
  const pass = req.body.pass;
  const role = req.body.role;
  const newUser = new User(email, name, pass, role);
  req.userVerify = newUser.verify();
  if (req.userVerify !== -1) {
    console.log(req.userVerify);
    Users.push(newUser);
  }
};

const login = (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const pass = req.body.pass;
  Users.forEach((Valuser) => {
    if (Valuser.email === email && Valuser.password === pass) {
      req.loginVerify = 0;
    } else {
      req.loginVerify = -1;
    }
  });
  console.log(req.loginVerify);
};

module.exports = {
  register,
  login,
};
