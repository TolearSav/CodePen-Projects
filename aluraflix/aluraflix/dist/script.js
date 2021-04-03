function adicionarFilme() {
  var campoFilme = document.querySelector('#filme')
  var filmeFavorito = campoFilme.value
  if (filmeFavorito.endsWith('.jpg')){
  listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem inválida")
  }
  campoFilme.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">" 
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}