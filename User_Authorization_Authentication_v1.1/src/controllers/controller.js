const modal = require('../modals/user');

const User = modal.UserModal;

const register = (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const name = req.body.name;
  const pass = req.body.pass;
  const role = req.body.email;
  const newUser = new User(email, name, pass, role);
  req.userVerify = 0;
  if (req.userVerify !== -1) {
    console.log(req.userVerify);
    newUser.save();
  }
};

const login = (req, res) => {
  req.loginVerify = -1;
  const email = req.body.email;
  const pass = req.body.pass;
  User.login(email, pass)
    .then((user) => {
      console.log(user);
      req.loginVerify = 0;
    })
    .catch((err) => {
      req.loginVerify = -1;
      console.log(err);
    });
};

module.exports = {
  register,
  login,
};
