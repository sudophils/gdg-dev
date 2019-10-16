module.exports = {
  tableName: 'developer',
  attributes: {
    fullName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      isEmail: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    avatar: {
      type: 'string'
    },
    date: {
      type: 'string'
    },
    profile: {
      collection: 'profile',
      via: 'developer'
    }
  }
};
