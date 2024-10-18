/*Kullanıcıya kaç adet meyve girmek istediğini soralım.
Söylediği adet kadar meyve ismini prompt ile eklesin.
Yazılan her bir meyveyi diziye ekleyelim
Eklenen meyvelerin hepsini console'a yazdıralım.*/

let adet = prompt('Kaç adet meyve eklemek istiyorsunuz? Lütfen sayı şeklinde girin.');
let meyveList = [];

for (let i = 0; i < adet; i++) {
 let meyve = prompt('Lütfen bir meyve ismi gir ->');
  meyveList.push(meyve); 
  console.log('Eklenen meyveler->');
  console.table(meyveList);
}

//console.log'ları dışında yazdığımızda sadece sonuçtaki listeyi çıkartıyor. kullanıcı her girdiğini kontrol etsin
//diye içine yazdım. seçenek.






