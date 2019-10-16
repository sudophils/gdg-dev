module.exports = {
  sign: function(payload) {
    return sails.jwt.sign(payload, sails.config.custom.secretOrKey, {
      expiresIn: '30m'
    });
  },
  verify: function(token, callback) {
    return sails.jwt.verify(token, sails.config.custom.secretOrKey, callback);
  }
};
