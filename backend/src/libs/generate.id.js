const crypto = require('crypto')

const generateId = argument => {
	return crypto.randomBytes(12).toString('hex');
}

module.exports = generateId;
