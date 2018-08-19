function ubahHuruf(kata) {
    // you can only write your code here!
    var alfabet = 'abcdefghijklmnopqrstuvwxyz';
    var foundAlfa = 0;
    var nextAlfa = '';
    
    for(var i = 0; i < kata.length; i ++) {
      foundAlfa = alfabet.indexOf(kata[i]);
      nextAlfa += alfabet[foundAlfa + 1];
    }
    return nextAlfa;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu