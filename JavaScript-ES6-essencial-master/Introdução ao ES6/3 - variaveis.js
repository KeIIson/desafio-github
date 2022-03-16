const name = "Kellson";

// Não podemos alterar o valor
// name = "Kellson";

const user = {
  name: "Kellson"
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Outro nome";

// Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//  name: "Kellson"
//};

const persons = ["Kellson", "Romulo", "Anna"];

// Podemos adicionar novos itens
persons.push("Romulo");

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = "Anna";

console.log("\n Array após as alterações: ", persons);