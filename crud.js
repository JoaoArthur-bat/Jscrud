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
    
}

criarcliente();

