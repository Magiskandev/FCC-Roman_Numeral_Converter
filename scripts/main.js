'use strict';

/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman() {
    let numero = prompt('Ingrese el número a convertir:');
    let original = numero;

    function obtenerNumero(digito, cadenaUno, cadenaDos, cadenaTres) {
      switch (true) {
        
        case digito <= 3:
          return cadenaUno.repeat(digito);
        
        case digito === 4:
          return cadenaUno + cadenaDos;
        
        case digito <= 8:
          return cadenaDos + cadenaUno.repeat(digito - 5);
        
        default:
          return cadenaUno + cadenaTres;
      }
    }
  
    let cadena = '';
  
    cadena += 'M'.repeat(Math.floor(numero/1000));
    numero %= 1000;
  
    cadena += obtenerNumero(Math.floor(numero/100), 'C', 'D', 'M')
    numero %= 100;
  
    cadena += obtenerNumero(Math.floor(numero/10), 'X', 'L', 'C')
    numero %= 10;
  
    cadena += obtenerNumero(numero, 'I', 'V', 'X')
  
    alert(`${original} en números romanos equivale a: ${cadena}.`);

    return cadena;
  }
  
  convertToRoman();