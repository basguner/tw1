//* ------------------------------------------------------------- */
//*                              OBJECTS                         */
//* ------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ancak daha karmaşık veriler için Object(nesne) kullanılır

//! Objectlerde key-value ( Property) yapisi kullanilir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için anahtar(key) adı kullanılır.

//? Array'lerde ilişkisel veriler
//* Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.
const ogrİsim = ["ahmet", "mehmet", "saffet"];
const ogrSoyisim = ["yılmaz", "can", "baki"];

console.log(`${ogrİsim[1]} - ${ogrSoyisim[1]} `);

//* --------------------------------------------------------------*/
//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/

//! 3 farkli yöntem ile Object oluşturulabilir
//? 1. Object() class'ından türetme

const car = new Object(); // boş bir obje üretir

car.brand = "BMW";
car.model = 1990;
car.price = 10000;
console.log(car);
console.log(car.model);

//********************** */

//? 2. Constructor metodu ile Object oluşturma
//! OOP(Object Oriented Programming)

function PersonelList(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
}
//! this keywordu iiçerisinde bulundğumuz objeyi refere eder.
//! Global alanda yazılan this ise haliyle global objeyi refere eder.
//! window tarayacının herşeyini barından temel bir objedir.
console.log(this); //? global alanda window nesnesini gösterir

const personel1 = new PersonelList(1001, "Ali", 10000);
const personel2 = new PersonelList(1002, "Osman", 15000);
console.log(personel1);
console.log(personel2);
//! her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını arttırabilir

//********************** */
//? 3. Object Literal (en çok kullanacağımız ve tercih edilen yöntem)
