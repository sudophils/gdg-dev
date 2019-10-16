// @Description ---- This form validates form details and returns the errors
let Validator = require('fastest-validator');

// Export module
module.exports = {
  validateSignup: function(obj) {
    // set errors
    const errors = {};

    // create validator object
    const v = new Validator();

    // set the schema
    const schema = {
      fullName: { type: 'string', empty: false },
      email: { type: 'email', empty: false },
      password: {
        type: 'string',
        empty: false,
        min: 6,
        max: 15
      },
      avatar: { type: 'string', empty: true }
    };

    //validate the data
    const result = v.validate(
      {
        fullName: obj.fullName,
        email: obj.email,
        password: obj.password,
        avatar: obj.avatar
      },
      schema
    );

    // check if the data returned is an array
    if (Array.isArray(result)) {
      result.forEach(element => {
        errors[`${element.field}`] = element.message;
      });

      return errors;
    }
    return true;
  },
  validateLogin: function(obj) {
    // set errors
    const errors = {};

    // create validator object
    const v = new Validator();

    // set the schema
    const schema = {
      email: { type: 'email', empty: false },
      password: {
        type: 'string',
        empty: false
      }
    };

    //validate the data
    const result = v.validate(
      {
        email: obj.email,
        password: obj.password
      },
      schema
    );

    // check if the data returned is an array
    if (Array.isArray(result)) {
      result.forEach(element => {
        errors[`${element.field}`] = element.message;
      });

      return errors;
    }
    return true;
  },

  //validate profile creation
  validateCreateProfile: function(obj) {
    // set errors
    const errors = {};

    // create validator object
    const v = new Validator();

    // set the schema
    const schema = {
      handle: { type: 'string', empty: false, max: 40 },
      status: { type: 'string', empty: false },
      skills: { type: 'string', empty: false },
      website: { type: 'url', optional: true },
      facebook: { type: 'url', optional: true },
      youtube: { type: 'url', optional: true },
      instagram: { type: 'url', optional: true },
      linkedin: { type: 'url', optional: true },
      twitter: { type: 'url', optional: true }
    };

    //validate the data
    const result = v.validate(
      {
        handle: obj.handle,
        status: obj.status,
        skills: obj.skills,
        website: obj.website,
        facebook: obj.facebook,
        youtube: obj.youtube,
        twitter: obj.twitter,
        instagram: obj.instagram,
        linkedin: obj.linkedin
      },
      schema
    );

    // check if the data returned is an array
    if (Array.isArray(result)) {
      result.forEach(element => {
        errors[`${element.field}`] = element.message;
      });

      return errors;
    }
    return true;
  },
  validateExperience: function(obj) {
    // set errors
    const errors = {};

    // create validator object
    const v = new Validator();

    // set the schema
    const schema = {
      title: { type: 'string', empty: false },
      company: { type: 'string', empty: false },
      from: { type: 'string', empty: false }
    };

    //validate the data
    const result = v.validate(
      {
        title: obj.title,
        from: obj.from,
        company: obj.company
      },
      schema
    );

    // check if the data returned is an array
    if (Array.isArray(result)) {
      result.forEach(element => {
        errors[`${element.field}`] = element.message;
      });

      return errors;
    }
    return true;
  },
  validateEducation: function(obj) {
    // set errors
    const errors = {};

    // create validator object
    const v = new Validator();

    // set the schema
    const schema = {
      school: { type: 'string', empty: false },
      degree: { type: 'string', empty: false },
      fieldofstudy: { type: 'string', empty: false },
      from: { type: 'string', empty: false }
    };

    //validate the data
    const result = v.validate(
      {
        school: obj.school,
        fieldofstudy: obj.fieldofstudy,
        from: obj.from,
        degree: obj.degree
      },
      schema
    );

    // check if the data returned is an array
    if (Array.isArray(result)) {
      result.forEach(element => {
        errors[`${element.field}`] = element.message;
      });

      return errors;
    }
    return true;
  },
  validateCreatePost: function(obj) {
    // set errors
    const errors = {};

    // create validator object
    const v = new Validator();

    // set the schema
    const schema = {
      text: { type: 'string', max: 300, empty: false }
    };

    //validate the data
    const result = v.validate(
      {
        text: obj.text
      },
      schema
    );

    // check if the data returned is an array
    if (Array.isArray(result)) {
      result.forEach(element => {
        errors[`${element.field}`] = element.message;
      });

      return errors;
    }
    return true;
  }
};
