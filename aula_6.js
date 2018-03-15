//Estrutura return//

function dividir(x,y)
{
	return x/y
}

var x=prompt("entre com o valor 1");
var y=prompt("entre com o valor 2");
alert(dividir(x,y));

//multiplicar
function multiplicar(x,y)
{
	return x*y
}
alert(multiplicar(x,y));

//somar
function somar(x,y) 
{

return x+y

}

//abs - transforma o numero negativo em positivo
valor=Math.abs(-123);
alert(valor);

//min-retornar o menor valor
var valor=Math.min(2,6)
alert(valor);

//pow-potencia,numero elevado
var valor=Math.pow(4,2);
alert(valor);

//round - para arrendodar as casas decimais
var valor=Math.ceil(13,2);
alert(valor);
var valor=Math.round(12,2);
alert(valor);
var valor=Math.floor(12,8);
alert(valor);