var User = require('../../models/users');

module.exports.signup = function(req, res) {
    var user = new User(req.body);
    user.save();
};
