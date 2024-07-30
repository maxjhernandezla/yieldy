import { sqrt, exp, pow, erf } from 'mathjs';

function prima(rend_esp, rend_ind)
{
  var mu = rend_esp;
  var incertidumbre = 0.45; // esto hay que elegirlo/determinarlo 
  var sigma = rend_esp * incertidumbre;
  var pdfv = 1 / (sqrt(2 * Math.PI) * sigma) * exp(-(pow(rend_ind - mu, 2) / (2 * pow(sigma, 2))));
  var cdfv = 1 / 2 * (1 + erf(((rend_ind - mu) / sigma) / sqrt(2)))
  var prima = (rend_ind - mu) * cdfv + sigma * sigma * pdfv;
  var tasa = prima / rend_esp + 0.02;//
  return tasa;
}

export default prima