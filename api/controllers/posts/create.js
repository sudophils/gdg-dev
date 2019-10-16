module.exports = {
  friendlyName: 'Create post',
  description: 'This is a post console for a developer',
  inputs: {},
  exits: {
    invalidAuth: {
      description: 'You are not allowed here'
    },
    validatedUser: {
      description: 'Welcome user, you can now perform high privelege operations'
    }
  },

  //main functions
  fn: function(inputs, exits) {
    const user = this.req.params;
    return this.res.json(this.req.user);
  }
};
