function kredihesapla() {
  var cekilecektutar, vadesayisi;
  var ayliktaksit, odenecektoplamtutar;

  cekilecektutar = document.getElementById("txtkreditutari").value;
  var liste = document.getElementById("listevade");
  vadesayisi = liste.options[liste.selectedIndex].value;

  if (vadesayisi == 12) {
    odenecektoplamtutar = cekilecektutar * 1.1;
  } else if (vadesayisi == 24) {
    odenecektoplamtutar = cekilecektutar * 1.2;
  } else if (vadesayisi == 36) {
    odenecektoplamtutar = cekilecektutar * 1.3;
  } else if (vadesayisi == 48) {
    odenecektoplamtutar = cekilecektutar * 1.4;
  }

  ayliktaksit = odenecektoplamtutar / vadesayisi;
 faiztutari= odenecektoplamtutar - cekilecektutar;  
  document.querySelector("#sonuc").innerHTML =
    "Geri ödeme toplamı : " +
    odenecektoplamtutar.toFixed(3) +
    "<br>" +
    "Aylık taksit tutarınız : " +ayliktaksit.toFixed(2) 
    + 
    "<br>"
     + 
     "Faiz Tutarı : " + faiztutari.toFixed(3);
}
