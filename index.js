const matchOne = (pattern, text) => {
  if (pattern === '') return true;
  if (text === '') return false;
  if (pattern === '.') return true;

  return pattern === text;
};

const matchQuestion = (pattern, text) => {
  if (matchOne(pattern[0], text[0])) {
    return match(pattern.slice(2), text.slice(1));
  }
  return match(pattern.slice(2), text);
};

const matchStar = (pattern, text) => {
  if (matchOne(pattern[0], text[0])) {
    return match(pattern, text.slice(1));
  }
  return match(pattern.slice(2), text);
};

const match = (pattern, text) => {
  if (pattern === '') return true;
  if (pattern[1] === '?') {
    return matchQuestion(pattern, text);
  }
  if (pattern[1] === '*') {
    return matchStar(pattern, text);
  }

  return (
    matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))
  );
};

const search = (pattern, text) => {
  return text.split('').some((_, i) => match(pattern, text.slice(i)));
};

module.exports = {
  matchOne,
  match,
  search,
};
