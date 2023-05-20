function removeCharacterFromString(str, char) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== char) {
        result += str[i];
      }
    }
    return result;
  }

    console.log(removeCharacterFromString('Orxan','x'));

 