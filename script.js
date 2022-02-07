/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//encriptar:

var botonEncriptar = document.querySelector("#btn-encriptar");
var imput = document.querySelector("#input-texto");
var textoInput = document.querySelector("#msg");

function encriptar() {
  var texto = imput.value;
  textoEncriptar = texto
    .replace(/[e]/g, "enter")
    .replace(/[i]/g, "imes")
    .replace(/[a]/g, "ai")
    .replace(/[o]/g, "ober")
    .replace(/[u]/g, "ufat");
  textoInput.value = textoEncriptar;
  imput.value = "";
}

botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  encriptar();
});

//desencriptar:

var botonDesencriptar = document.querySelector("#btn-desencriptar");

function desencriptar() {
  var texto = imput.value;
  textoDesencriptar = texto
    .replace(/\enter/g, "e")
    .replace(/\imes/g, "i")
    .replace(/\ai/g, "a")
    .replace(/\ober/g, "o")
    .replace(/\ufat/g, "u");
  textoInput.value = textoDesencriptar;
  imput.value = "";
}

botonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    desencriptar();
  });

//botón copiar

var buttonCopy = document.querySelector("#btn-copy");

function copiar() {
  var textoCopiado = document.getElementById("msg");
  textoCopiado.select();
  document.execCommand("copy");
}

buttonCopy.addEventListener("click", (e) => {
  e.preventDefault();
  copiar();
});
