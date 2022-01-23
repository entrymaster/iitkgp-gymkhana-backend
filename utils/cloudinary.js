const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'ayush-sri',
  api_key: '331464676698953',
  api_secret: 'b60wfGEsOToMvg1fbZ_7mdXP1IU',
});

module.exports = cloudinary;