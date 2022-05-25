const mongodb = require('mongodb');

const client = mongodb.MongoClient;
const uri = 'mongodb+srv://talha8665:root@cluster0.n7gdw.mongodb.net/users?retryWrites=true&w=majority';
let db;

const mongoConnect = (callback) => {
  client.connect(uri)
    .then((result) => {
      console.log('Connected to database');
      db = result.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};
const getDb = () => {
  if (db) {
    return db;
  }
  return -1;
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
