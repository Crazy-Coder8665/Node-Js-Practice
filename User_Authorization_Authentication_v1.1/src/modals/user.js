const mongodb = require('mongodb');
const getDb = require('../config/database').getDb;

class User {
  constructor(email, name, password, role, _id) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.role = role;
    this._id = _id;
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
  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db.collection('user')
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
    } else {
      dbOp = db.collection('user').insertOne(this);
    }
    dbOp.then((result) => {
      console.log(result);
    })
      .catch((err) => {
        console.log(err);
      });
  }
  static fetchAll() {
    const db = getDb();
    return db.collection('user')
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static fetchOne(Useremail) {
    const db = getDb();
    return db.collection('user')
      .find({email: Useremail})
      .toArray()
      .then((user) => user)
      .catch((err) => {
        console.log(err);
      });
  }
  static login(Useremail, pass) {
    const db = getDb();
    return db.collection('user')
      .find({email: Useremail, password: pass })
      .toArray()
      .then((user) => user)
      .catch((err) => {
        console.log(err);
      });
  }
  static delete(id) {
    const db = getDb();
    return db.collection('user')
      .delete({ _id: new mongodb.ObjectId(id)})
      .then((user) => user)
      .catch((err) => {
        console.log(err);
      });
  }
}
exports.UserModal = User;
