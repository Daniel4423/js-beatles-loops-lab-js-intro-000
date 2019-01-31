// add solution here
function theBeatlesPlay(musicians, instruments) {
  var eachBeatlePlays = [];
  for (let i = 0; i < 4; i++) {
    eachBeatlePlays[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return eachBeatlePlays;
}

function johnLennonFacts(facts) {
  var index = 0
  while (facts[index] != '') {
    facts[index] = facts[index] + '!!!'
    ++index
  }
  return facts
}
