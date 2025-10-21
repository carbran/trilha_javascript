/*
const alunos = ['João', 'Vitor', 'Maria'];

console.log(alunos);

console.log(alunos.length);

alunos.push('Renan');

console.log(alunos[3]);

alunos[3] = 'Vinicius';

console.log(alunos[3]);

console.log(alunos);

console.log(alunos.pop());

console.log(alunos);

console.log(alunos.shift());

console.log(alunos);

console.log(alunos.length);
*/
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}

const nome = 'Fernando Carlos Brandão Filho';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);    
}
*/

const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const media = soma / notas.length;

console.log(media.toFixed(2));