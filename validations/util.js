const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;

const checkForSpecialChars = (data) => {
  if (!data) {
    return false;
  }

  if (typeof data === 'object') {
    for (const key in data) {
      if (typeof data[key] === 'string' && specialCharsRegex.test(data[key])) {
        return true;
      }
    }
  } else if (typeof data === 'string' && specialCharsRegex.test(data)) {
    return true;
  }

  return false;
};

module.exports = {
  checkForSpecialChars,
};
