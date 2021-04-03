var carta1 = {
  nome: "Charizard",
  imagem: "https://ptanime.com/wp-content/uploads/2020/10/Charizard-Carta-Arte-Imagem-Destaque.jpg",
   som: "https://play.pokemonshowdown.com/audio/cries/charizard.mp3",
  atributos: {
    ataque: 95,
    defesa: 75,
    especial: 95
  }
}

var carta2 = {
  nome: "Venusaur",
  imagem: "https://i.pinimg.com/originals/dc/99/0b/dc990b02f8b8222b0dd8779d800cb12c.png",
  som: "https://play.pokemonshowdown.com/audio/cries/venusaur.mp3",
  atributos: {
     ataque: 85,
     defesa: 100,
     especial: 93
  }
}

var carta3 = {
  nome: "Blastoise",
  imagem: "https://img.pokemondb.net/artwork/original/blastoise-gen1.jpg",
  som: "https://play.pokemonshowdown.com/audio/cries/blastoise.mp3",
  atributos: {
    ataque: 90,
    defesa: 90,
    especial: 85
  }
}

var carta4 = {
  nome: "Mewtwo",
  imagem: "https://ae01.alicdn.com/kf/HTB1rPmGJ1uSBuNjSsplq6ze8pXaG.jpg",
  som: "https://play.pokemonshowdown.com/audio/cries/mewtwo.mp3",
  atributos: {
    ataque: 98,
    defesa: 95,
    especial: 100
  }
}

var carta5 = {
  nome: "Dragonite",
  imagem: "https://media.pocketmonsters.net/characters/3329.png/t/400.png",
  som: "https://play.pokemonshowdown.com/audio/cries/dragonite.mp3",
  atributos: {
    ataque: 90,
    defesa: 70,
    especial: 99
  }
}

var carta6 = {
  nome: "Gyarados",
  imagem: "https://cdn.bulbagarden.net/upload/thumb/1/14/Team_Rocket_Gyarados.png/250px-Team_Rocket_Gyarados.png",
  som: "https://play.pokemonshowdown.com/audio/cries/gyarados.mp3",
  atributos: {
    ataque: 94,
    defesa: 89,
    especial: 92
  }
}

var carta7 = {
  nome: "Gengar",
  imagem: "http://4.bp.blogspot.com/-awnKNYpjrrs/TrQmsntrw6I/AAAAAAAAAGo/bn7yN7kjLRo/s1600/gengar.jpg",
  som: "https://play.pokemonshowdown.com/audio/cries/gengar.mp3",
  atributos: {
    ataque: 93,
    defesa: 88,
    especial: 96
  }
}

var carta8 = {
  nome: "Alakazam",
  imagem: "https://static.wikia.nocookie.net/pokemon/images/2/2a/Anabel_Alakazam.png/revision/latest?cb=20160102063027",
  som: "https://play.pokemonshowdown.com/audio/cries/alakazam.mp3",
  atributos: {
    ataque: 94,
    defesa: 80,
    especial: 100
  }
}

var carta8 = {
  nome: "Alakazam",
  imagem: "https://static.wikia.nocookie.net/pokemon/images/2/2a/Anabel_Alakazam.png/revision/latest?cb=20160102063027",
  som: "https://play.pokemonshowdown.com/audio/cries/alakazam.mp3",
  atributos: {
    ataque: 94,
    defesa: 80,
    especial: 100
  }
}

var musica = new Audio('https://vgmsite.com/soundtracks/pokemon-gold-silver/lwnuxbzg/22%20trainer%20battle%20theme%201.mp3');
var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
musica.play();

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
   var html = "Quantidade de cartas no jogo: " + cartas.length
   
   divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
 var divPlacar = document.getElementById('placar')
 var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina "
 
  divPlacar.innerHTML = html
}

function sortearCarta() {
    musica.play();
    musica.loop = true;
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
     cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

    function jogar() {
        var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        var som = new Audio(cartaJogador.som)
        som.play()
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        var som = new Audio(cartaMaquina.som)
        som.play()
        htmlResultado = '<p class="resultado-final">Perdeu...</p>'
      pontosMaquina++
    } else{
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }
 

  if(cartas.length == 0 ){
     alert("Fim de jogo!")
    if (pontosJogador > pontosMaquina){
     htmlResultado = '<p class="resultado-final">Você venceu!</p>'
    } else if(pontosMaquina > pontosJogador){
       htmlResultado = '<p class="resultado-final">Perdeu...</p>'
     } else{
       htmlResultado = '<p class="resultado-final">Empatou!</p>'
     }
  } else{
   document.getElementById('btnProximaRodada').disabled = false
  }
     divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
  
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()       
    }
    
function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}