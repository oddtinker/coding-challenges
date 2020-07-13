function maskify (creditCard) {
  if (creditCard.length < 6) {
    return creditCard;
  }

  let nums = /[0-9]/;
  
  let cardArray = creditCard.split('');
  for (let charIndex = 1; charIndex < cardArray.length - 4; charIndex++) {
    if (nums.test(cardArray[charIndex])) {
        cardArray[charIndex] = '#';
      }
  }
  return cardArray.join('');
}

export default maskify;