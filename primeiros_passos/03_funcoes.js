function sayMyName(name) {
    console.log('Meu nome é ' + name);
}

// function main() {
//     sayMyName('Fernando');
// }

// main();

// Função invocada imediatamente: é criada e executada imediatamente
(function () {
    sayMyName('Fernando');
})();