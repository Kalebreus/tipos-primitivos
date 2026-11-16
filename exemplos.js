// String: representa um texto.
const nome = 'Ricardo Hofstetter Dias';
console.log(nome); // Ricardo Hofstetter Dias

// Undefined: a variável foi declarada, mas ainda não recebeu um valor.
// A declaração precisa vir antes de qualquer acesso a idade.
let idade;
console.log(idade); // undefined

// Number: representa números inteiros e decimais.
const pi = 3.14;
console.log(pi); // 3.14

// BigInt: representa inteiros de precisão arbitrária; o literal termina em n.
const bigNumber = 123456789n;
console.log(bigNumber); // 123456789n

// Boolean: representa verdadeiro ou falso.
const userLoggedIn = true;

if (userLoggedIn) {
  console.log('Usuário autenticado.');
}

// Null: ausência de valor definida intencionalmente.
const telefone = null;
console.log(telefone); // null

// Symbol: cada chamada a Symbol cria um identificador único.
const id = Symbol('id');
console.log(id); // Symbol(id)
console.log(id === Symbol('id')); // false

// Objetos não são primitivos. Aqui, o objeto demonstra uma propriedade ausente.
const pessoa = { nome: 'João' };
console.log(pessoa.idade); // undefined

// typeof retorna uma string que indica o tipo de um valor.
console.log(typeof nome); // string
console.log(typeof idade); // undefined
console.log(typeof pi); // number
console.log(typeof bigNumber); // bigint
console.log(typeof userLoggedIn); // boolean
console.log(typeof id); // symbol
console.log(typeof pessoa); // object

// Particularidade histórica: typeof null retorna 'object'.
// null continua sendo um valor primitivo.
console.log(typeof telefone); // object
console.log(telefone === null); // true
