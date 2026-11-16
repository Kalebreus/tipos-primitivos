# Tipos primitivos em JavaScript

Anotações de estudo sobre os valores básicos da linguagem, com exemplos que podem ser executados no Node.js.

## Resumo

JavaScript possui sete tipos primitivos. Seus valores são imutáveis: uma variável declarada com `let` pode receber outro valor, mas isso não altera o valor primitivo original.

| Tipo | Uso | Exemplo |
| --- | --- | --- |
| `string` | Representa textos | `'Ricardo Hofstetter Dias'` |
| `number` | Representa números inteiros e decimais | `27`, `3.14` |
| `boolean` | Representa verdadeiro ou falso | `true`, `false` |
| `undefined` | Indica, por exemplo, uma variável declarada sem valor atribuído | `let idade` |
| `null` | Representa uma ausência de valor definida intencionalmente | `const telefone = null` |
| `bigint` | Representa números inteiros de precisão arbitrária | `123456789n` |
| `symbol` | Cria identificadores únicos | `Symbol('id')` |

`bigint` e `symbol` complementam a lista apresentada no material da aula. O sufixo `n` identifica um literal do tipo `bigint`; ele não é um `number`.

## Exemplos da aula revisados

Os exemplos estão em [exemplos.js](./exemplos.js), com comentários sobre as saídas esperadas.

- `nome` guarda uma `string`.
- `pi` guarda um `number` decimal.
- `userLoggedIn` guarda um `boolean`, usado na condição de um `if`.
- `let idade` declara uma variável que inicialmente vale `undefined`.
- `pessoa.idade` retorna `undefined` porque essa propriedade não existe no objeto do exemplo.

O valor de `pessoa` é um objeto, que não é um tipo primitivo. Ele aparece aqui apenas para demonstrar outro caso em que podemos obter `undefined`.

## Correções no código recebido

1. A declaração `let idade` foi movida para antes do primeiro acesso à variável. No código original, `console.log(idade)` antes dessa declaração provoca um `ReferenceError` e interrompe a execução. Isso é diferente de acessar uma variável já declarada, mas ainda sem valor atribuído.
2. O comando que vinha depois de `const pi = 3.14` foi corrigido para `console.log(pi)`.
3. O bloco do `if` recebeu uma mensagem para tornar o resultado visível no terminal.
4. Foram acrescentados exemplos de `null`, `symbol` e `typeof` para completar o resumo.

## Como executar

Com uma versão atual do Node.js instalada, execute a partir da raiz do repositório:

```bash
node exemplos.js
```

## Consultando tipos com typeof

O operador `typeof` retorna uma string indicando o tipo do valor. Por exemplo, `typeof 3.14` retorna `'number'`.

Uma particularidade histórica da linguagem é que `typeof null` retorna `'object'`. Mesmo assim, `null` é um valor primitivo. Para verificar se um valor é `null`, use `valor === null`.

## Para praticar

- Declare uma variável para cada tipo primitivo e confira o resultado de `typeof`.
- Altere `userLoggedIn` para `false` e observe o comportamento do `if`.
- Atribua `27` a `idade` depois da declaração e compare o valor e o tipo antes e depois.
