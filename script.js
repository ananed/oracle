
var generateBtn = document.querySelector("#magic-btn");

function displayMagicPhrase() {
  //con esto voy a crear la frase
  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");
  magicPhraseDisplay.value = magicPhrase;
  function makeSomeMagic() {

    if (confirm ('Echar de menos, es sentir el alma disolviéndose en el aire, es abrir los ojos y de golpe no ver nada, estirar las manos hasta el cielo y no tocar')) {
      if (confirm('Echar de menos es quemarse la razón con los recuerdos, sonreír de pronto sin tener ningún motivo o llorar como una niña en el silencio.')){
        if (confirm('Morir un poco cada día, y sin embargo, seguir viviendo, alimentándose del tiempo. Es no encontrar hogar en ningún sitio.')){
          if (confirm('Echar de menos es coger con la ilusión cientos de aviones. Saber que se te espera en mil lugares. Querer vivir, tal vez, doscientas vidas.')){
             if (confirm('Echar de menos es despertarse, y no querer abrir los ojos. Es guardar vuestras voces bajo llave.')){
              if (confirm('Es mirar hacia atrás, y estar tan cerca que me duele de pronto acostumbrarme. No saber dónde vais, qué estáis haciendo')){
                if (confirm('Es dudar que nadie pueda ya entenderme. Pasar horas mirando la bandera de un tiempo que hace poco fue tan nuestro,'));
                return "tan nuestro que al final, echar de menos es seguir caminando sin vosotros como un tren entre la niebla cuando todo el mundo duerme. Te quiero";
              }
             }
          }
        }
      }
  }else{
    return "Try again, please. It sure is worth it :)";
  }
  }
}


// Attach event listener to the magi button
generateBtn.addEventListener("click", displayMagicPhrase);
