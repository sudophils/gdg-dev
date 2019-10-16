//const validateLoginInput = require('../../services/register');
module.exports = {
  friendlyName: 'Create',
  description: 'Create a new Developer account',

  // needed user input for signup
  inputs: {
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },

  exits: {
    loginFailed: {
      statusCode: 409,
      description: 'Login has failed due to bad auth token'
    },
    passwordLength: {
      statusCode: 309,
      description:
        'Password length not consistent. min of 6 and max of 16 chars'
    }
  },
  fn: async function(inputs, exits) {
    // extract the required data
    const { email, password } = this.req.allParams();

    const validator = FormValidator.validateLogin({ email, password });

    if (typeof validator === 'object') {
      return res.status(400).json(validator);
    }

    // Get a developer using his/her email
    const developer = await Developer.findOne({ email: inputs.email });

    // throw 404 if developer not found
    if (!developer) {
      return this.res.status(404).json({
        status: `This developer account with this ${inputs.email} does not exist, you can create with it`
      });
    }

    // get the old pass and compare to new one by the user
    const match = await sails.bcrypt.compare(
      inputs.password,
      developer.password
    );

    // if !not matched  throw error
    if (!match) {
      return this.res.status(400).json({ status: 'invalid login credentials' });
    } else {
      //get payload data
      const payload = {
        id: developer.id,
        email: developer.email,
        date: developer.date,
        name: developer.name,
        avatar: developer.avatar
      };

      // sign the developer data and get back a token
      const token = await verifyToken.sign(payload);

      return this.res.status(200).json({
        isLoggedIn: true,
        token: 'Bearer ' + token
      });
    }
  }
};
