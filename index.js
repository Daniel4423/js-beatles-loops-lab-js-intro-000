// add solution here
function theBeatlesPlay(musicians, instruments) {
  var eachBeatlePlays = [];
  for (let i = 0; i < 4; i++) {
    eachBeatlePlays[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return eachBeatlePlays;
}

function johnLennonFacts(facts) {
  var maxLength = facts.length
  var index = 0;
  while (index <= maxLength) {
    facts[index] = facts[index] + '!!!';
    index = index + 1;
  }
  return facts;
}
