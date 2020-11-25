let valorCusto = 10;
let valorVenda = 15;
let imposto; 
let valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {

    console.log ("Erro - valor invalido")

}
    else {

        imposto = valorCusto * 0.2;
        valorCustoTotal = valorCusto + imposto;
        console.log ((valorVenda - valorCustoTotal) * 1000);

    }