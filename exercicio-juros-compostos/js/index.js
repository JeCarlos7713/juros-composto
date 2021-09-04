//alert ('olá mundo')

function resultado (){
    var nome, taxa;
    
    //Entrada de Dados 
    taxa = 0.03;
    nome = String(document.getElementById("nome").value);
    pmt = Number(document.getElementById("mensalidade").value);
    n = Number(document.getElementById("tempo").value);
    
    var vf, pmt, i, n;

    i = 0.03;

    vf = (pmt * (1+i) *((Math.pow(1+i,n)-1)/i)).toFixed(2)

    //Processamento de dados

 



    //Saída de dados
    document.getElementById("nameresult").innerHTML = `${nome}`;
    document.getElementById("mensalresult").innerHTML = `${pmt}`;
    document.getElementById("formula").innerHTML = `${vf}`;
    document.getElementById("data").innerHTML = `${n}`;
    document.getElementById("infos").classList.add("d-none");
    document.getElementById("result").classList.remove("d-none");

}

function voltar () {
    $("input").val("");
    document.getElementById("infos").classList.remove("d-none");
    document.getElementById("result").classList.add("d-none");


}
