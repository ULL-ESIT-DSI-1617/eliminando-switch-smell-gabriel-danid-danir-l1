// ----------------------------------------------------- //

  function Volumen(valor,tipo)
  {
    console.log("Accedo a clase Volumen");
    Medida.call(this,valor,tipo);
  }
  Volumen.prototype = new Medida();
  Volumen.prototype.constructor = Volumen;

// ----------------------------------------------------- //
function Metro3(valor)
{
  Volumen.call(this,valor,'metro cubico');
}
Metro3.prototype = new Volumen;
Metro3.prototype.constructor = Metro3;
Metro3.prototype.toLitro = function()
{
    return this.valor * 1000;
}
Metro3.prototype.toCm3 = function()
{
    return this.valor * 1000000;
}
Metro3.prototype.toMm3 = function()
{
    return this.valor * 1000000000;
}
// ----------------------------------------------------- //
