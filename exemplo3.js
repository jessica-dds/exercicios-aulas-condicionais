const temIngresso = true;
const censura = 16;
const idade = 12;
const estaComOsPais = false;

// Tem igresso  E
// tem idade maior ou igual a censura OU está com os pais

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar.");
    } else {
        console.log("Barrada.");
    }
} else {
    console.log("Barrada.");
}