module.exports = {
  friendlyName: 'verify Email',
  description: ' check if email  already exist',
  inputs: {
    email: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'email verified'
    },
    emailExists: {
      description: 'this developer email is in use'
    }
  },

  fn: async function(inputs, exits) {
    const developer = await Developer.findOne({ email: inputs.email });

    if (developer) {
      return exits.emailExists();
    }

    return exits.success(developer);
  }
};
