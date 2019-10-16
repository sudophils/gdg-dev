module.exports = {
  friendlyName: 'Create',
  description: 'Create a new Developer account',

  // needed user input for signup
  inputs: {
    fullName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true,
      maxLength: 15,
      minLength: 6
    },
    avatar: {
      type: 'string'
    }
  },

  // needed function responses
  exits: {
    createUser: {
      responseType: ''
    },
    failure: {
      statusCode: 409,
      description: 'Failed to create this developer account'
    }
  },
  fn: async function(inputs, exits) {
    // Extract the users data
    const { fullName, email, password } = this.req.allParams();

    // validate  data
    // This returns error message after validation

    // generate avata from email
    const avatar = sails.gravatar.url(email, {
      s: '200', //size
      r: 'pg', //rating
      d: 'mm' // default
    });
    const validator = await FormValidator.validateSignup({
      fullName,
      email,
      password,
      avatar
    });

    if (typeof validator === 'object') {
      return this.res.badRequest(validator);
    }

    // create a new dev acc
    let developer = undefined;

    // get todays date
    const getToday = () => {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      return today;
    };

    //hash password
    const hashedPass = await sails.bcrypt.hash(password, 10);

    try {
      //create a developer
      developer = await Developer.create({
        fullName: inputs.fullName,
        email: inputs.email,
        password: hashedPass,
        avatar,
        date: getToday()
      }).fetch();
    } catch (err) {
      return this.res.json({
        status: err.message
      });
    }

    if (!developer) {
      return exits.failure();
    }
    //set session here if on web

    // create a web token with
    return this.res.json(developer);
  }
};
