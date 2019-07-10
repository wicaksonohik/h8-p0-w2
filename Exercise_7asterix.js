var row1 = 5;
for(var i = 1; i <= row1; i++){
  console.log('*'); 
}
console.log('\n');

var row2 = '';
for(var i = 1; i <= row1; i++){
  var line = '';
  for(var j = 1; j <= row1; j++ ){
    line += '*';  
  }
  if(i !== row1){
    row2 += line + '\n';
    }
   
}
console.log(row2);
console.log('\n');

var row3 =''
for(var i = 0; i < row1; i++){
  var asterix ='*'
  console.log(row3 += asterix);
  
}