var prods = [
    { id:1, name:"Bife com batata", preco:30},
    { id:1, name:"Coxa de frango crocante", preco:25},
    { id:1, name:"Carne de panela", preco:22},
    { id:1, name:"Farofa", preco:16},
    { id:1, name:"Salada", preco:8},
    { id:1, name:"Torresmo", preco:12},
    
];

function btncalcular(){
    var quantities = document.getElementsByName("quantity")
    var output = document.getElementById("output");
    var total = 0;

    output.innerHTML = `Caro <strong>${document.getElementById("nome").value}</strong> </br></br> Seguem os dados do seu pedido. </br> Seu pedido é: </br> </br>`

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    for(var input of quantities){
        var id = input.id;

        output.innerHTML += `<li>Produto:${prods[id-1].name} - Preço: ${formatter.format(prods[id-1].preco)} - Quantidade: ${input.value} - Total: ${formatter.format(prods[id-1].preco*input.value)} </br> </li>`;
        total += prods[id-1].preco*input.value;
    }

   output.innerHTML += `</br> </br> <h2> Total: ${formatter.format(total)}</h2>  `


}