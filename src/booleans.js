const negate = a => {
  return !a;
};

const both = (a, b) => {
  return (a && b);
};

const either = (a, b) => {
  return (a || b);
};

const none = (a, b) => {
  return (!a && !b);
};

const one = (a, b) => {
  return (!a && b) || (a && !b);
};

const truthiness = a => {
  return !!a; 
  Boolean(a); 
};

const isEqual = (a, b) => {
  return (a==b);
};

const isGreaterThan = (a, b) => {
  return (a>b);
};

const isLessThanOrEqualTo = (a, b) => {
  return (a<b) || (a==b);
};

const isOdd = a => {
  return (a % 2 === 1);
};

const isEven = a => {
  return (a % 2 === 0);
};

const isSquare = a => {
  return (a > 0 && Math.sqrt(a) % 1 === 0) || (a==0);
};

const startsWith = (char, string) => {
  return string.startsWith ("a", char); 
};

const containsVowels = string => {
  let x = [...string].find(char => {
    return ['a','e','i','o','u','A','E','I','O','U'].includes(char);
  }) 
  
  return Boolean(x);
};

const isLowerCase = string => {
  return string.toLowerCase() === string ;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
