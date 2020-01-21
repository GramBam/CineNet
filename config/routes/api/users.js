const express = require('./node_modules/express');
const router = express.Router();
const { check, validationResult} = require('./node_modules/express-validator')

// @route   POST api/users
// @desc    Test route
// @access  Public
router.post('/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
  ],
(req, res) => {
  const errors = validationResult(req);
  console.log(req.body);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  res.send('User route');
});

module.exports = router;