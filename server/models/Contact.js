const mongoose = require('mongoose');

//test commit
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  dateOfBirth: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);
