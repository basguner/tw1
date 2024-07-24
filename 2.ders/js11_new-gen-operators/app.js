
//! Object Destructuring

const product = {
    id : "12345",
    brand : "Samsung",
    type : "Smart Phone",
    price: 2000
}


//? . notasyonu
// console.log(product.id)

//? [] square bracket notasyonu
// console.log(product["brand"])

let ids = product.id

ids = "67890" // Yapılan değişiklik objeyi etkilemez
// console.log(ids)
// console.log(product.id)

let brands = product["brand"]


const product2 = {
    id : "67890",
    brand : "Apple",
    type : "Smart Phone",
    price: 3000
}

// console.log(product2)


//^ Object Destructuring

// const {id, price} = product2
const {brand, price, type, id2} = product2 // id2 olmadığı için undefined döner

// console.log(brand, price,type,id2)


//^ Varsayılan değer

const person = {
    personName: "Jean-Jacques",
    surname: "Rousseau"
}

let { personName, surname, age = 66} = person // Dest. yaparken nesnede olmayan bir özelliği varsayılan değer olarak tanımlayabiliriz.

age = 56

// console.log(personName, surname, age)


const person2 = {
    personName: "John",
    surname: "Doe"
}

let { personName: userName, surname: userSurname, UserAge = 66} = person2
//Nesne özelliklerini tanımladıüımız değişken isimlerinden farklı isimlerde kullanabiliriz

// console.log(userName, userSurname, UserAge)



//^ Fonksiyonlarda object destr.

const person3 = {
    personName: "Jane",
    surname: "Doe"
}

const printPerson = (insan) => { //klasik yöntem
    console.log(`Name: ${insan.personName} Surname: ${insan.surname}`)
}

// printPerson(person3)
// printPerson(person2)

// Destructuring Kullanılarak: Nesne özelliklerini doğrudan fonksiyon parametreleri içinde çıkarabilir ve daha okunabilir bir kod elde edersiniz.
const printPerson2 = (person) => { //destructuring ile
    const {personName,surname} = person
    console.log(`Name: ${personName} Surname: ${surname}`)
}

// printPerson2(person2)
// printPerson2(person3)


// Destructuring kullanarak, fonksiyon parametrelerinin içinde doğrudan nesnenin özelliklerini çıkardığımız için, 
// person nesnesinin özelliklerine daha kısa ve okunabilir bir şekilde erişmiş oluruz.
// Bu da kodun okunabilirliğini ve yazma hızını artırarak daha temiz ve anlaşılır bir kod yazmanızı sağlar.
const printPerson3 = ({personName,surname}) => { //on assignment destructuring ile

    console.log(`Name: ${personName} Surname: ${surname}`)
}

printPerson3(person2)
printPerson3(person3)