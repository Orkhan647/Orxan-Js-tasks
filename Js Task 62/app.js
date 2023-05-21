function isValidNumber(phoneNumber) {
    if (phoneNumber.length === 12 && phoneNumber.startsWith("+7")) {
      return true;
    }
    return false;
  }
  console.log(isValidNumber('+74445552322'));
  console.log(isValidNumber('+744455523322'));
