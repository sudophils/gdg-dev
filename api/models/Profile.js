module.exports = {
  tableName: 'profile',
  attributes: {
    developer: {
      model: 'developer',
      unique: true
    },
    handle: {
      type: 'string',
      required: true,
      maxLength: 40
    },
    company: {
      type: 'string'
    },
    location: {
      type: 'string'
    },
    website: {
      type: 'string'
    },
    status: {
      type: 'string',
      required: true
    },
    skills: {
      type: 'json',
      columnType: 'array',
      required: true
    },
    bio: {
      type: 'string'
    },
    githubUsername: {
      type: 'string'
    },
    experience: {
      type: 'json'
    },
    education: {
      type: 'json'
    },
    social: {
      type: 'json'
    },
    date: {
      type: 'string'
    }
  }
};
