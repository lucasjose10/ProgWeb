var idade=10;
if(idade<15)
{
  alert("Criança");

}
var  numero= 17;
if((numero%2)==0){

  alert("par");
}
  var passou=true;
  if(passou){
    alert("Aprovado");
  }
//exemplos de Else

var idade=12;
if(idade<15)
{
  alert("criança");
}
else{
  alert("adulto");

}
var passou=false;
if(passou)
{
  alert("Aprovado");
}
else{
  alert("Estuda mais um pouco!!!");
}
//exemplo de if dentro do else
var idade=61;
if(idade<=11){
  alert("criança");
}
else if(idade>11 && idade <=16)
{
  alert("adolescente");
}
else if(idade>16 && idade<60)
{
  alert("adulto");
}
else if (idade>60) {
  alert("idoso");
}
//exemplo if dentro de outro if
var nota=6;
if(nota>=7)
{
alert("aprovado");
}
else{
  alert("reprovado");
    if(nota==6){
      alert("vc está em recuperção");
    }
    }
