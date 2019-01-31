// add solution here
function theBeatlesPlay(musicians, instruments) {
  var eachBeatlePlays = [];
  for (let i = 0; i < 5; i++) {
    eachBeatlePlays[i] = `${musicians[i]} plays ${instruments[i]}`; 
  }
  return eachBeatlePlays;
}