class User {
  constructor(email, name, password, role) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.role = role;
  }
  verify() {
    const emailVerify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.email !== emailVerify) {
      return -1;
    }
    if (this.password.length <= 8) {
      return -1;
    }
    return 0;
  }
}
let Users = [];
module.exports = {
  UserModal: User,
  UserArray: Users,
};
