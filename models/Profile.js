const mongoose = require('mongoose');

const ProfileSchema =  new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  status: {
    type: String
  },
  skills: {
    type: [String]
  },
  bio: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String,
      },
    }
  ],
  social: {
    youtube: {
      type:String
    },
    twitter: {
      type:String
    },
    facebook: {
      type:String
    },
    linkedin: {
      type:String
    },
    instagram: {
      type:String
    },
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);