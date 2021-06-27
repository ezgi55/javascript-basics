const sayHello = string => {
  let newWord = 'Hello,'
  let newHello = newWord.concat( ' ',string , '!')
      return newHello ;
  //let newHello = string.replace(('world', 'Hello, world!');
  //return newHello; (first try) (.join de denedim) 
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string.charAt(string.length1);
};

const firstCharacters = (string, n) => {
  return string.substring(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
