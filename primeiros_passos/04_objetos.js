// const pessoa = {
//     nome: 'Fernando',
//     idade: 31,

//     descrever : function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// console.log(pessoa.nome);
// console.log(pessoa.idade);

// pessoa.altura = 1.72;

// console.log(pessoa.altura);

// pessoa.descrever();

// // acesso dinâmico
// console.log(pessoa['nome']);

// const atributo = 'idade';

// console.log(pessoa[atributo]);

/**
 * CLASSE é o molde ou protótipo, um modelo abstrato que define 
 * características (atributos) e comportamentos (métodos) de um 
 * tipo de objeto. OBJETO é uma instância concreta e única criada 
 * a partir dessa classe, possuindo seus próprios valores para os 
 * atributos, mas herdando a estrutura e os métodos definidos na 
 * classe. 
 */

// Classe
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// Instância
const vitor = new Pessoa('Vitor', 26);
const fernando = new Pessoa('Fernando', 31);

// vitor.descrever();
// fernando.descrever();

// console.log(vitor);d

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + ' é mais velho que ' + p2.nome);
    } else if (p2.idade > p1.idade) {
        console.log(p2.nome + ' é mais velho que ' + p1.nome);
    } else {
        console.log(p1.nome + ' e ' + p2.nome + ' tem a mesma idade');
    }
}

compararPessoas(fernando, vitor);