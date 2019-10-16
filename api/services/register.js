const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
  const error = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!sails.validator.isLength(data.name, { min: 2, max: 30 })) {
    error.name = 'Name must be between 2 and 30 characters';
  }

  // check if name is empty
  if (sails.validator.isEmpty(data.name)) {
    error.name = 'Name field is required';
  }

  //check if email is empty
  if (sails.validator.isEmpty(data.email)) {
    error.email = 'Email field is required';
  }

  //check if its email
  if (!sails.validator.isEmail(data.email)) {
    error.email = 'Email is invalid';
  }

  // check if password is empty
  if (sails.validator.isEmpty(data.password)) {
    error.password = 'password field is required';
  }

  // check if pass is above 6 chars
  if (!sails.validator.isLength(data.password, { min: 6, max: 30 })) {
    error.password = 'password must be at least 6 characters';
  }

  if (sails.validator.isEmpty(data.password2)) {
    error.password2 = 'confirm password field is required';
  }

  if (!sails.validator.equals(data.password, data.password2)) {
    error.password2 = 'Both paswords must match';
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};
