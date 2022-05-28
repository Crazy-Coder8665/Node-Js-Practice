const LocalStrategy = require('passport-local').Strategy;

function authenticateUser() {

}

function initialize(passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }), authenticateUser)
}

module.exports = initialize;
