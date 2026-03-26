console.log("O programa iniciou com sucesso!");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let cliente = [];

//create
function criarcliente(){
   readline.question('Qual é o seu nome? ', (nome) => {
    readline.question('Qual é sua idade? ', (idade) => {
      readline.question('Qual é seu gênero? ', (genero) => {
        
        let novoCliente = { nome, idade, genero };

        cliente.push(novoCliente);
        console.log("\n--- Cliente Cadastrado ---");
        readline.close();
        
        lercliente()
      });
    });
  });
}

//read
function lercliente(){
      console.table(cliente);

}

//update
function atualizarcliente(){
    console.table(cliente);

    readline.question('digite o numero (index) do cliente: ') , (index) => {
if (cliente[index]){
    readline.question("Escreva o novo nome: ",(novoNome) => {
      readline.question("Escreva a nova idade: ", (novaIdade) =>{
        readline.question("Escreva o novo genero: ", (novoGenero) =>{

          cliente[index]= {
            nome: novoNome,
            idade: novaIdade,
            genero: novoGenero
          };
          console.log ("Cliente atualizado");
          lercliente();
        });
      });
    });
} else {
  console.log("Erro");
  lercliente();
}
    }

    function apagarcliente(){
      readline.question("digite o index do cliente que deseja apagar:", (index) => {
let i= parseInt(index);

if (i>= 0 && i < cliente.length){

  let removido = cliente.splice(i,1);
  console.log (`O cliente "${removido[0].nome}" foi removido.`);

  lercliente();

}else {
  console.log("Erro");
}
      });
    }

  }

  criarcliente();