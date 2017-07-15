var Homem = function (nome, idade) {
	this.nome = nome;
	this.idade = idade;
	this.sexo = "masculino";
}

var joao = new Homem("João", 20);
console.log(joao);