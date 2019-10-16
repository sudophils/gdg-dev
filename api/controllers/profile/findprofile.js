// @route POST api/v1/dev/post
// @desc get developer Profile
// @access Private

module.exports = async function findprofile(req, res) {
  const userProfile = await Profile.findOne({
    developer: req.developer.id
  }).populate('developer');

  if (!userProfile) {
    return res.status(404).json({ status: 'No developer profile found' });
  } else {
    return res.json(userProfile);
  }
};
