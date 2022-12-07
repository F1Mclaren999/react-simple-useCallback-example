function generateRandomWords(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateWords(totalWords) {
  const total = [];
  for (let i = 0; i < totalWords; i++) {
    const result = generateRandomWords(5);
    total.push(result);
  }
  return total;
}

export default {
  generateRandomWords,
  generateWords,
};
