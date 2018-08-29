/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator
Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password
(harus berurutan):
Ganti semua huruf vokal menggunakan function changeVocals dengan aturan
huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita
manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces)
diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/


function changeVocals (str) {
  //code di sini
        
  var arrStr = str.split('');
  var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var hurufVokal = 'aiueoAIUEO';
  var indeks;
  var hasil = [];
  
  for (var i = 0; i < arrStr.length; i++) {
    for (var j = 0; j < hurufVokal.length; j++) {
      if (arrStr[i] === hurufVokal[j]) {
        indeks = alfabet.indexOf(arrStr[i]) + 1;
        arrStr[i] = alfabet[indeks];
      }
    }
    hasil.push(arrStr[i]);
  }
  
  return hasil;
}

function reverseWord (str) {
  //code di sini
  var balik = [];
  
  for (var i = str.length - 1; i >=0; i--) {
    balik.push(str[i]);
  }
  
  return balik;
}

function setLowerUpperCase (str) {
  //code di sini
  var hasil = '';
  
  for (let i = 0; i < str.length; i++) {
    uppercase = str[i].toUpperCase();
    lowercase = str[i].toLowerCase();
    
    if (str[i] === uppercase) {
      hasil += lowercase;
    } else if (str[i] === lowercase) {
      hasil += uppercase;
    } else {
      hasil += str[i];
    }
  }
  
  return hasil;
}

function removeSpaces (str) {
  //code di sini
  var hasil = str.replace(/\s+/g, '');
  
  return hasil;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    var ubahHurufVokal = changeVocals(name);
    var balikKata = reverseWord(ubahHurufVokal);
    var balikLowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(balikLowerUpper);
    return hapusSpasi;
  }
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'