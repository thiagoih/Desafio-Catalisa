const imagem = document.querySelectorAll('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelectorAll('.nome');
const especie = document.querySelectorAll('.especie');
const condicao = document.querySelectorAll('.status');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagem = () => {
    console.log("pegarPersonagem")
    let numeroAleatorio1 = gerarValorAleatorio();
    let numeroAleatorio2 = gerarValorAleatorio();
    let numeroAleatorio3 = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio1},${numeroAleatorio2},${numeroAleatorio3}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        data.forEach((element, index) => {
            console.log(element.image)
            imagem[index].src = element.image;
            imagem[index].alt = element.name;
            nomeDoPersonagem[index].innerHTML = element.name;
            especie[index].innerHTML = element.species;
            condicao[index].innerHTML = element.status;
        });
    });
}

botao.onclick = pegarPersonagem;