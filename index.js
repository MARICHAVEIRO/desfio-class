// Classe genérica que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Estrutura de decisão para definir o ataque conforme o tipo
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    // Exibe a mensagem final
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso:
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Shifu", 60, "monge");
const heroi4 = new Heroi("Hanzo", 25, "ninja");

heroi1.atacar(); // Saída: O guerreiro atacou usando espada
heroi2.atacar(); // Saída: O mago atacou usando magia
heroi3.atacar(); // Saída: O monge atacou usando artes marciais
heroi4.atacar(); // Saída: O ninja atacou usando shuriken
