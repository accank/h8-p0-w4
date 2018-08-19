function hitungHuruf(kata) {
    var pisahKata = kata.split(' ');
    var banding = 0;
    var checkKata = '';
    
    for(var i = 0; i < pisahKata.length; i ++) {
      checkKata = pisahKata[i];
      var huruf = 0;
      for(var j = 0; j < pisahKata[i].length; j++) {
        var checkHuruf = checkKata[j];
        for(var k = 0; k < checkKata.length; k++) { 
          if((j !== k) && (checkHuruf === checkKata[k])) { 
            huruf++;
          }
        }
      }
      if(huruf > banding) { 
        banding = huruf;
        pisahKata = checkKata;
      }
    }
    if (banding > 0) {
        return pisahKata;
    }
    else {
      return -1;
    }
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau