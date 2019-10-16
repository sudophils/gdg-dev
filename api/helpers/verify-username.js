module.exports = {
  friendlyName: 'verify username',
  description: ' check if username  already exist',
  inputs: {
    username: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'verified'
    },
    usernameExist: {
      description: 'this developer username is taken'
    }
  },

  fn: async function(inputs, exits) {
    const developer = Developer.findOne({ username: inputs.username });

    if (developer !== 'undefined') {
      return exits.usernameExist(
        `A developer with this ${inputs.username} exists`
      );
    }

    return exits.success(developer);
  }
};
