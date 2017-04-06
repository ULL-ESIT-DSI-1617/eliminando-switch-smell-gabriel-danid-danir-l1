(function(exports) {
  "use strict";
  console.log("Carga de la funcion principal");

  function match_regexp(valor)
  {
    console.log("match_regexp");
    console.log("valor->"+valor);
    //var regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:e[+-]?\d+)?)\s*([kmc]?m(3)?|(in)|k([e]|(e)[l]?|(el)[v]?|(elv)[i]?|(elvi)[n]?)?|[c]([e]|[e][l]?|(el)[s]?|(els)[i]?|(elsi)[u]?|(elsiu)[s]?)?|[f]([a]|[a][r]?|(ar)[e]?|(are)[n]?|(aren)[h]?|(arenh)[e]?|(arenhe)[i]?|(arenhei)[t]?)?)\s*(to)?\s+([c]([e]|[e][l]?|(el)[s]?|(els)[i]?|(elsi)[u]?|(elsiu)[s]?)?|[f]([a]|[a][r]?|(ar)[e]?|(are)[n]?|(aren)[h]?|(arenh)[e]?|(arenhe)[i]?|(arenhei)[t]?)?|k([e]|(e)[l]?|(el)[v]?|(elv)[i]?|(elvi)[n]?)?|[kmc]?m(3)?|l(i(t(r(o(s)?)?)?)?)?|(in))$/i;
    /*Global XRegExp */
    var regexp = XRegExp('^(\\s*)                                         ' +
                    '(?<valor> [-+]?[0-9]+(?:\\.[0-9]+)?(?:e[+-]?[0-9]+)?) ' +
                    '(\\s*)                                               ' +
                    '(?<tipo> ([fck]|in|(k|m|c)?m(3)?))                   ' +
                    '(\\s*)                                               ' +
                    '(to)?                                                ' +
                    '(\\s*)                                               ' +
                    '(?<to> ([fck]|(k|m|c)?m(3)?|in|l))                   ' +
                    '(\\s*)$','ix');
    //res = valor.match(regexp);
    var res = XRegExp.exec(valor,regexp);
    console.log("Res->"+res);
    return res;
  }

  exports.Medida = function Medida(valor,tipo)
  {
    console.log("Accedo a clase Medida");
    if(valor)
    {
      if(tipo)
      {
        this.valor = valor || 0;
        //this.tipo  = tipo  || "Sin tipo";
        this.tipo  = tipo  || "Sin tipo";
      }
      else
      {
        console.log("Else sin tipo");
        var expresion;
        expresion = match_regexp(valor);
        console.log("Expresion:"+expresion);
        var numero = expresion[1];
        numero = parseFloat(numero);
        var tipo = expresion[2];
        tipo = tipo.toLowerCase();
        this.valor = numero;
        this.tipo = tipo;
        console.log("Valor: " + this.valor + ", Tipo: " + this.tipo);
      }
    }
  }
  Medida.constructor = Medida;

// ----------------------------------------------------- //


  exports.convertir = function() {

  var valor = document.getElementById('convert').value;
  var elemento = document.getElementById('converted');
  valor = match_regexp(valor);

  if (valor) {
    var numero = valor.valor;
    var tipo = valor.tipo;
    tipo = tipo.toLowerCase();
    var destino = valor.to;
    destino = destino.toLowerCase();

    numero = parseFloat(numero);
    console.log("Valor: " + numero + ", Tipo: " + tipo+", Destino:" + destino);

    switch (tipo) {
          case 'c':
              var celsius = new Celsius(numero);

              if(destino == "k")
                  elemento.innerHTML = celsius.toKelvin().toFixed(2) + " Kelvin";
              if(destino == "f")
                  elemento.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
              break;

          case 'f':
              var farenheit = new Farenheit(numero);

              if(destino == "c")
                  elemento.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";
              if(destino == "k")
                  elemento.innerHTML = farenheit.toKelvin().toFixed(2) + " Kelvin";
              break;

          case 'k':
              var kelvin = new Kelvin(numero);

              if(destino == "c")
                elemento.innerHTML = kelvin.toCelsius().toFixed(2) + " Celsius";
              if(destino == "f")
                elemento.innerHTML = kelvin.toFarenheit().toFixed(2) + " Farenheit";
              break;

          case 'm':
              var metro = new Metro(numero);

              if(destino == "km")
                elemento.innerHTML = metro.toKm() + " Km.";
              if(destino == "cm")
                elemento.innerHTML = metro.toCm() + " cm.";
              if(destino == "mm")
                elemento.innerHTML = metro.toMm() + " mm.";
              if(destino == "m")
                elemento.innerHTML = metro.valor + " m.";
              break;

           case 'cm':
              var centimetro = new Centimetro(numero);

              if (destino == "km")
                  elemento.innerHTML = centimetro.toKm() + " Km."
              if (destino == "m")
                  elemento.innerHTML = centimetro.toM() + " m.";
              if (destino == "mm")
                  elemento.innerHTML = centimetro.toMm() + " mm.";
              if (destino == "in")
                  elemento.innerHTML = centimetro.toIn() + " In."
              break;

            case 'km':
              var kilometro = new Kilometro(numero);

              if(destino == "m")
                  elemento.innerHTML = kilometro.toM() + " m";
              if(destino == "cm")
                  elemento.innerHTML = kilometro.toCm() + " cm";
              if(destino == "mm")
                  elemento.innerHTML = kilometro.toMm() + " mm.";
              break;

            case 'in':
              var pulgada = new Pulgada(numero);
              if (destino == "cm")
                elemento.innerHTML = pulgada.toCm().toFixed(4) + " cm";
              break;

            case 'm3':
              var metro3 = new Metro3(numero);

              if(destino == "l")
                  elemento.innerHTML = metro3.toLitro() + " Litros";
              if(destino == "cm3")
                  elemento.innerHTML = metro3.toCm3() + " cm3";
              if(destino == "mm3")
                  elemento.innerHTML = metro3.toMm3() + " mm3.";
              break;

  	        default:
                elemento.innerHTML = "La unidad de medida de conversión introducida es desconocida. Inténtelo de nuevo";
      }
  }
  else
    elemento.innerHTML = "Error! Pruebe algo como '3C to K' o '3C Kelvin'";
  }
})(this);
