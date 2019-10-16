// @route POST api/v1/dev/post
// @desc Create or Edit Profile
// @access Private

module.exports = async function createProfile(req, res) {
  const error = {};
  const {
    skills,
    handle,
    company,
    location,
    status,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    website
  } = req.allParams();

  // validate the required once
  const validator = FormValidator.validateCreateProfile({
    handle,
    skills,
    status,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    website
  });

  if (typeof validator === 'object') {
    return res.status(400).json(validator);
  }

  // holds profile fields data
  const profileFields = {};

  // holds profile socisl links
  profileFields.social = {};

  profileFields.developer = req.developer.id;
  if (handle) profileFields.handle = handle;
  if (company) profileFields.company = company;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;
  if (status) profileFields.status = status;
  if (githubusername) profileFields.githubusername = githubusername;

  // skills come in comma separated value into array

  if (typeof skills !== 'undefined') {
    profileFields.skills = skills.split(',');
  }

  //social
  if (youtube) profileFields.social.youtube = youtube;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (instagram) profileFields.social.instagram = instagram;

  //retrieve an developer
  const profile = await Profile.findOne({
    developer: req.developer.id
  }).populate('developer');

  if (profile) {
    //update the profile if found
    try {
      profile = await Profile.updateOne({ developer: req.developer.id }).set(
        profileFields
      );
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(profile);
  } else {
    // check for handle with the current handle name supplied
    const handle = await Profile.findOne({
      handle: profileFields.handle
    }).populate('developer');

    // if handle is there throw error
    if (handle) {
      error.handle = 'This handle already exist';
      return res.status(400).json(error);
    }

    // if no dev with such handle create a fresh dev profile
    const profileNew = await Profile.create({
      developer: req.developer.id,
      ...profileFields
    }).fetch();

    // return new profile that was just created
    if (profileNew) {
      return res.status(200).json(profileNew);
    }
  }
};
