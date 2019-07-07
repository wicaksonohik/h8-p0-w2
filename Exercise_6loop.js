var str = 'I love coding'
var num = 1
var str2 = 'I will become full stack developer'
var num2 = 20

console.log('LOOPING PERTAMA');

while(num <= 20){
  console.log(`${num} - ${str}`);
  num ++  
}
console.log('LOOPING KEDUA')

while (num2 > 0){
  if(num2 % 2 == 0){
    console.log(`${num2} - ${str2}`);
  } 
  num2 --
}
console.log('\n');
console.log('LOOPING PERTAMA');

for(var i = 1; i <= 20; i++){
  console.log(`${i} - ${str}`);  
}
console.log('LOOPING KEDUA');

for(var i = 20; i > 0; i--){
  console.log(`${i} - ${str2}`)
}
console.log('\n');

let counter = 1
while(counter <= 100){
  if(counter % 2 == 0){
    console.log(`${counter} adalah bilangan GENAP`);
    counter ++
  }else if(counter % 2 == 1){
    console.log(`${counter} adalah bilangan GANJIL`);
    counter ++
  }
}
console.log('\n');
console.log('------- PERTAMBAHAN COUNTER 2 KELIPATAN 3 ---------');


for(let i = 1; i <= 100; i += 2){
  if(i % 3 == 0){
    console.log(`${i} merupakan KELIPATAN 3`);
  }else{
    console.log(`conter sekarang ${i}`);   
  }  
}
console.log('------- PERTAMBAHAN COUNTER 5 KELIPATAN 6 ---------');

for(let i = 1; i <= 100; i += 5){
  if(i % 6 == 0){
    console.log(`${i} merupakan KELIPATAN 6`);
  }else{
    console.log(`conter sekarang ${i}`);   
  }
}
console.log('------- PERTAMBAHAN COUNTER 9 KELIPATAN 610 ---------');

for(let i = 1; i <= 100; i += 9){
  if(i % 10 == 0){
    console.log(`${i} merupakan KELIPATAN 10`);
  }else{
    console.log(`conter sekarang ${i}`);   
  }
}




