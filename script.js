const imagem = document.querySelectorAll('img');
const botao = document.querySelectorAll('button');
const nomeDoPersonagem = document.querySelectorAll('#nome');
const especie = document.querySelectorAll('#especie');
const condicao = document.querySelectorAll('#status');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagem = () => {
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
        imagem.src = data.imagem;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagem;