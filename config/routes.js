/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //ui routes

  //API routes
  // POST Req dev registeration
  'POST /api/v1/dev/register': { action: 'devs/register' },

  // POST Req dev login
  'POST /api/v1/dev/login': { action: 'devs/login' },

  // GET Req profile
  'GET /api/v1/dev/profile/': { action: 'profile/findprofile' },
  'GET /api/v1/dev/profile/:dev_id': { action: 'profile/findById' },

  //POST Req profile
  'POST /api/v1/dev/profile/': { action: 'profile/createprofile' },

  //user posts
  'GET /api/v1/dev/post': { action: 'posts/create' }
};
