//?Selectors

//* ekle formu

const ekleBtn = document.querySelector("#ekle-btn");
const gelirInput = document.querySelector("#gelir-input");
const ekleFormu = document.querySelector("#ekle-formu");

//*sonuç tablosu

const gelirinizTable = document.getElementById("geliriniz");
const giderinizTable = document.getElementById("gideriniz");
const kalanTable = document.getElementById("kalan");

//?variables
let gelirler = 0;
let harcamaListesi = [];

//* Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//* harcama tablosu
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

//! ilk formu doldurma

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); //reload u engellemek için

  const yeniHarcama = {
    tarih: tarihInput.value,
    miktar: miktarInput.value,
    aciklama: harcamaAlaniInput.value,
    id: new Date().getTime(),
  };

  harcamaListesi.push(yeniHarcama);

  //ekrana bastır
  harcamayiShowScreen(yeniHarcama);
});

//! harcamaları dom daki table a bastır

const harcamayiShowScreen = ({ id, miktar, tarih, aciklama }) => {
  // const{id,miktar,tarih,aciklama}=harcamaListesi

  harcamaBody.innerHTML += `
<tr>
<td>${tarih} </td>
<td></td>
<td></td>
<td></td>
</tr>


`;
};
