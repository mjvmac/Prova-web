const devoluçoes = []

const livro1 = {
    titulo:"Adoráveis Mulheres",
    autor: "fulana",
    atrasado: true
};

const livro2 = {
    titulo: "Chapeuzinho amarelo",
    autor: "fulano2",
    atrasado: true
};

const livro3 = {
    titulo: "Como eu era antes de você",
    autor: "fulaninha",
    atrasado: true
};

devoluçoes.push(livro1)
console.log(livro1)
devoluçoes.push(livro2)
console.log(livro2)
devoluçoes.push(livro3)
console.log(livro2)
console.log(devoluçoes)

devoluçoes.pop()
console.log("Livro removido: ", livro3)
devoluçoes.pop()
console.log("Livro removido: ", livro2)
devoluçoes.pop()
console.log("Livro removido: ", livro1)
console.log(devoluçoes)