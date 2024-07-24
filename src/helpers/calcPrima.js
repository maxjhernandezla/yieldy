import { sqrt, exp, pow, erf } from 'mathjs';

function prima(rend_esp, rend_ind)
{
  var mu = rend_esp;
  var incertidumbre = 0.35; // esto hay que elegirlo/determinarlo 
  var sigma = rend_esp * incertidumbre;
  var pdfv = 1 / (sqrt(2 * Math.PI) * sigma) * exp(-(pow(rend_ind - mu, 2) / (2 * pow(sigma, 2))));
  var cdfv = 1 / 2 * (1 + erf(((rend_ind - mu) / sigma) / sqrt(2))); // Estas dos funciones usan la libreria en js/math.js 
  var prima = (rend_ind - mu) * cdfv + sigma * sigma * pdfv; // esto calcula la esperanza E[(y-yk)^+] (Artículo nuestro, y coincide con fórmula artículo "2104.08686" pie de pag.3)
  var tasa = prima / rend_esp; //
  return tasa;
}


export default prima


// function prima(rend_esp, rend_ind)
// {
//   var mu = rend_esp;
//   var incertidumbre = 0.35; // esto hay que elegirlo/determinarlo 
//   var sigma = rend_esp * incertidumbre;
//   var pdfv = 1 / (math.sqrt(2 * Math.PI) * sigma) * math.exp(-(math.pow(rend_ind - mu, 2) / (2 * math.pow(sigma, 2))));
//   var cdfv = 1 / 2 * (1 + math.erf(((rend_ind - mu) / sigma) / math.sqrt(2))) // Estas dos funciones usan la libreria en js/math.js 
//   //var pdfv = pdf( rend_ind, mu, sigma ); // Esto usa una funcion de la librería stdlib, hay que instalarla/importarla ej.: var pdf = require( '@stdlib/stats/base/dists/normal/pdf' );
//   //  var cdfv = cdf((rend_ind-mu)/sigma); // Esto usa otra funcion de la libreria stdlib, var cdf = require( '@stdlib/stats/base/dists/normal/cdf' );
//   var prima = (rend_ind - mu) * cdfv + sigma * sigma * pdfv; // esto calcula la esperanza E[(y-yk)^+] (Artículo nuestro, y coincide con fórmula artículo "2104.08686" pie de pag.3)
//   var tasa = prima / rend_esp; //
//   return tasa;
// }