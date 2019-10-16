const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
  const error = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  //check if its email
  if (!sails.validator.isEmail(data.email)) {
    error.email = 'Email is invalid';
  }

  //check if email is empty
  if (sails.validator.isEmpty(data.email)) {
    error.email = 'Email field is required';
  }

  // check if password is empty
  if (sails.validator.isEmpty(data.password)) {
    error.password = 'password field is required';
  }

  // check if pass is above 6 chars
  if (!sails.validator.isLength(data.password, { min: 6, max: 30 })) {
    error.password = 'password must be at least 6 characters';
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};
