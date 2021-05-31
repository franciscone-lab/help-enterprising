function publicar() {
    //   aguardar();
    var formulario = new URLSearchParams(new FormData(form_publicar));
    var idUsuario = sessionStorage.id_usuario_meuapp;
    console.log(idUsuario);
    fetch(`/publicacoes/publicar/${idUsuario}`, {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {
            div_cadastro_ok.style.display = 'block';
        } else {
            console.log('Erro ao publicar!');
            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }
    });

    return false;
}

function obterPublicacoes() {
    //   aguardar();
    fetch("/publicacoes")
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    atualizarFeed(resposta);

                    //   finalizarAguardar();
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                //   finalizarAguardar("Nenhum resultado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção das publicações: ${error.message}`);
        });
}

function atualizarFeed(publicacoes) {
    var feed = document.getElementById("feed_container");
    console.log('Entrei na function para atualizar o feed!');
    
    feed.innerHTML = "";
    for (let i = 0; i < publicacoes.length; i++) {
        var publicacao = publicacoes[i];

        var divPublicacao = document.createElement("div")
        var tituloNome = document.createElement("h1")
        var subtituloNome = document.createElement("h4")
        var paragrafoDescricao = document.createElement("p")

        tituloNome.innerHTML = `${publicacao.tituloPost}`;
        subtituloNome.innerHTML += `Autor: ${publicacao.nomeUsuario}<hr>`;
        paragrafoDescricao.innerHTML += `${publicacao.textoPost}`;

        divPublicacao.className = "cards";

        divPublicacao.appendChild(tituloNome);
        divPublicacao.appendChild(subtituloNome);
        divPublicacao.appendChild(paragrafoDescricao);

        feed.appendChild(divPublicacao);
    }
}