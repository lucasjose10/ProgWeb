//operadores lógicos and &&,or ||,not!
//operador logico and &&
var x=6;
alert((x>=1) && (x<=10));
var y=prompt("Entre com um numero");
alert((y>=1) && (y<=10));
//operador logico or ||
var x=6;
alert((x>=1) || (x<=5));
var y=prompt("entre com um numero");
alert((y>=1) || (y<=5));
//operador not !
var a=6;
alert(!(a>=1));
//operador ternário
//expressao?verdadeiro:falso
var idade=prompt("qual e a sua idade");
var x=(idade>=18)?"maior idade":"menor idade";
alert(x);
//operador delete -para remover um atributo do obejto
pessoa={
  nome:"Lucas"
}
alert(nome.nome);
delete Pessoa.nome;
alert(Pessoa.nome);
//operador in - indica se existte a propriedade especifica
Pessoa={
  nome:"Paula"
}
alert("nome" in Pessoa);
alert("email" in Pessoa);
//operador this -mostra o titulo da pagina
alert(this.document.title);
//parseInt
var num1=parseInt(prompt("Entre com o 1 valor"));
var num2=parseInt(prompt("Entre com o 2 valor"));
var soma=num1+num2;
alert(" a soma eh :"+soma);
