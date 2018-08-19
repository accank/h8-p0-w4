function cariModus(arr) {
  var mostFrek = 0;
  var modus = 0;
  
  for(var i = 0; i<arr.length; i++){
     var frek = 0;
    for(var j = i+1; j<arr.length; j++){
      if(arr[i]===arr[j]){
        frek++;
        if(frek>mostFrek){
          mostFrek=frek;
          modus = i;
        }
      }
    }
  }
  if(mostFrek===0){
    return -1;
  }
  var angka = 0;
  for(var k=0; k<arr.length; k++){
    angka+=arr[k];
    if((angka/arr.length)===arr[k]){
      return -1;
    }
  }
  return arr[modus];
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1