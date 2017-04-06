// ----------------------------------------------------- //

  function Distancia(valor,tipo)
  {
    console.log("Accedo a clase Distancia");
    Medida.call(this,valor,tipo);
  }
  Distancia.prototype = new Medida();
  Distancia.prototype.constructor = Distancia;

  // ----------------------------------------------------- //

    function Kilometro(valor)
    {
      Distancia.call(this,valor,'Km');

    }
    Kilometro.prototype = new Distancia;
    Kilometro.prototype.constructor = Kilometro;
    Kilometro.prototype.toM = function()
    {
      return this.valor * 1000;
    }
    Kilometro.prototype.toCm = function()
    {
      return this.valor * 10000;
    }
    Kilometro.prototype.toMm = function()
    {
      return this.valor * 1000000;
    }

  // ----------------------------------------------------- //

    function Centimetro(valor)
    {
      Distancia.call(this,valor,'cm');

    }
    Centimetro.prototype = new Distancia;
    Centimetro.prototype.constructor = Centimetro;
    Centimetro.prototype.toM = function()
    {
      return this.valor / 100;
    }
    Centimetro.prototype.toKm = function()
    {
      return this.valor / 10000;
    }
    Centimetro.prototype.toMm = function()
    {
      return this.valor * 10;
    }
    Centimetro.prototype.toIn = function()
    {
      return this.valor * 0.39370;
    }

  // ----------------------------------------------------- //

    function Metro(valor)
    {
      Distancia.call(this,valor,'m');
    }
    Metro.prototype = new Distancia;
    Metro.prototype.constructor = Metro;
    Metro.prototype.toKm = function()
    {
      return this.valor / 1000;
    }
    Metro.prototype.toCm = function()
    {
      return this.valor * 100;
    }
    Metro.prototype.toMm = function()
    {
      return this.valor * 1000;
    }

  // ----------------------------------------------------- //

    function Pulgada(valor){
      Distancia.call(this,valor,'in');
    }
    Pulgada.prototype = new Distancia;
    Pulgada.prototype.constructor = Pulgada;
    Pulgada.prototype.toCm = function()
    {
        return this.valor / 0.39370;
    }

  // ----------------------------------------------------- //

  
