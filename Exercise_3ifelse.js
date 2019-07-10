var nama = 'Dodit';
var peran = 'Penyihir';
var greets = `Selamat datang di dunia Proxyta, Halo ${peran} ${nama}`

if(nama === '' ){
  greets = 'Nama harus diisi';
  
}else if(peran === ''){
  greets =`Halo ${nama}, Pilih peranmu untuk memulai game!\n`;
  
}else if(peran === 'Ksatria'){
  greets += ', kamu dapat menyerang dengan senjatamu!'

}else if(peran === 'Tabib'){
  greets +=', kamu akan membantu temanmu yang terluka.';
  
}else if(peran === 'Penyihir'){
  greets += ', ciptakanlah keajaiban yang membantu kemenanganmu!';
};

console.log(greets);
