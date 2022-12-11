const deck = [
  { link: '<img src="./assets/abominavel.png" width="150px">', att: 5, res: 8 },
  {
    link: '<img src="./assets/apocalipse.webp" width="150px">',
    att: 6,
    res: 8,
  },
  {
    link: '<img src="./assets/capita_marvel.webp" width="150px">',
    att: 5,
    res: 6,
  },
  {
    link: '<img src="./assets/capitao_america.webp" width="150px">',
    att: 3,
    res: 3,
  },
  {
    link: '<img src="./assets/carnificina.webp" width="150px">',
    att: 2,
    res: 2,
  },
  { link: '<img src="./assets/colossus.webp" width="150px">', att: 2, res: 3 },
  { link: '<img src="./assets/cyclops.webp" width="150px">', att: 3, res: 4 },
  { link: '<img src="./assets/deadpool.webp" width="150px">', att: 1, res: 1 },
  {
    link: '<img src="./assets/doutor_destino.webp" width="150px">',
    att: 6,
    res: 5,
  },
  {
    link: '<img src="./assets/doutor_estranho.webp" width="150px">',
    att: 3,
    res: 2,
  },
  {
    link: '<img src="./assets/gaviao_arqueiro.webp" width="150px">',
    att: 1,
    res: 1,
  },
  { link: '<img src="./assets/hela.webp" width="150px">', att: 6, res: 6 },
  {
    link: '<img src="./assets/homem_de_ferro.webp" width="150px">',
    att: 5,
    res: 0,
  },
  {
    link: '<img src="./assets/homem_de_gelo.webp" width="150px">',
    att: 1,
    res: 2,
  },
  {
    link: '<img src="./assets/homem_formiga.webp" width="150px">',
    att: 1,
    res: 1,
  },
  {
    link: '<img src="./assets/homem-aranha.webp" width="150px">',
    att: 4,
    res: 2,
  },
  { link: '<img src="./assets/namor.webp" width="150px">', att: 4, res: 5 },
  {
    link: '<img src="./assets/pantera_negra.webp" width="150px">',
    att: 4,
    res: 2,
  },
  { link: '<img src="./assets/professor.webp" width="150px">', att: 5, res: 3 },
  { link: '<img src="./assets/thanos.webp" width="150px">', att: 6, res: 8 },
  { link: '<img src="./assets/thor.webp" width="150px">', att: 4, res: 6 },
  { link: '<img src="./assets/venom.webp" width="150px">', att: 3, res: 1 },
  { link: '<img src="./assets/visao.webp" width="150px">', att: 5, res: 7 },
  {
    link: '<img src="./assets/viuva_negra.webp" width="150px">',
    att: 2,
    res: 1,
  },
  { link: '<img src="./assets/wolverine.webp" width="150px">', att: 2, res: 3 },
  { link: '<img src="./assets/drax.webp" width="150px">', att: 4, res: 4 },
  { link: '<img src="./assets/falcão.webp" width="150px">', att: 2, res: 3 },
  { link: '<img src="./assets/gambit.webp" width="150px">', att: 3, res: 1 },
  { link: '<img src="./assets/groot.webp" width="150px">', att: 3, res: 3 },
  {
    link: '<img src="./assets/jurggernaut.webp" width="150px">',
    att: 3,
    res: 3,
  },
  {
    link: '<img src="./assets/mulher_invisivel.webp" width="150px">',
    att: 2,
    res: 2,
  },
  {
    link: '<img src="./assets/senhor_fantastico.webp" width="150px">',
    att: 3,
    res: 2,
  },
];
var mao1 = [];
var mao2 = [];
var pontos_jogador = 0;
var pontos_maquina = 0;

function carregamento() {
  for (let i = 0; mao1.length < 5; i++) {
    let sorteio1 = Number(Math.floor(Math.random() * 32));

    if (mao1 == ``) {
      mao1.push(deck[sorteio1]);
    } else {
      for (let index = 0; index < mao1.length; index++) {
        if (mao1.indexOf(deck[sorteio1]) == -1) {
          mao1.push(deck[sorteio1]);
          break;
        } else {
          break;
        }
      }
    }
  }
  for (let i = 0; mao2.length < 5; i++) {
    let sorteio2 = Number(Math.floor(Math.random() * 32));

    if (mao2 == ``) {
      mao2.push(deck[sorteio2]);
    } else {
      for (let index = 0; index < mao2.length; index++) {
        if (mao2.indexOf(deck[sorteio2]) == -1) {
          mao2.push(deck[sorteio2]);
          break;
        } else {
          break;
        }
      }
    }
  }

  for (let index = 0; index < mao1.length; index++) {
    baralhoJogador.innerHTML += mao1[index].link;
    baralhoMaquina.innerHTML += mao2[index].link;
  }
  console.log(mao1);
  console.log(mao2);
}

function simular() {
  let sorteio1 = Number(Math.floor(Math.random() * 5));
  let sorteio2 = Number(Math.floor(Math.random() * 5));

  if (mao1[sorteio1] == `` || mao2[sorteio2] == ``) {
    simular();
  } else {
    fase1.style = "display: none;";
    fase2.style = "display: block;";

    combate.innerHTML = `${mao1[sorteio1].link} <img src="assets/vs.png" alt="" width="100px" style="margin-bottom: 50px;"> ${mao2[sorteio2].link}`;

    if (
      mao1[sorteio1].att - mao2[sorteio2].res ==
      mao2[sorteio2].att - mao1[sorteio1].res
    ) {
      pontos_jogador++;
      pontos_maquina++;
      jogador1.innerHTML = pontos_jogador;
      maquina1.innerHTML = pontos_maquina;
      jogador2.innerHTML = pontos_jogador;
      maquina2.innerHTML = pontos_maquina;
      resultado.innerHTML = `<h1 style="color: blue;">Houve um empate!</h1>`;
    } else if (
      mao1[sorteio1].att - mao2[sorteio2].res >
      mao2[sorteio2].att - mao1[sorteio1].res
    ) {
      pontos_jogador += 3;
      jogador1.innerHTML = pontos_jogador;
      jogador2.innerHTML = pontos_jogador;
      resultado.innerHTML = `<h1 style="color: green;">Jogador venceu!</h1>`;
    } else {
      pontos_maquina += 3;
      maquina1.innerHTML = pontos_maquina;
      maquina2.innerHTML = pontos_maquina;
      resultado.innerHTML = `<h1 style="color: red;">Maquina venceu!</h1>`;
    }

    for (let i = sorteio1; i < mao1.length - 1; i++) {
      if (mao1[i] != ``) {
        mao1[i] = mao1[i + 1];
      }
    }
    for (let i = sorteio2; i < mao2.length - 1; i++) {
      if (mao2[i] != ``) {
        mao2[i] = mao2[i + 1];
      }
    }

    if (mao1[mao1.length - 1] != ``) {
      mao1[mao1.length - 1] = ``;
    }
    if (mao2[mao2.length - 1] != ``) {
      mao2[mao2.length - 1] = ``;
    }

    baralhoJogador.innerHTML = ``;
    baralhoMaquina.innerHTML = ``;

    for (let index = 0; index < mao1.length; index++) {
      if (mao1[index] != ``) {
        baralhoJogador.innerHTML += mao1[index].link;
        baralhoMaquina.innerHTML += mao2[index].link;
      }
    }

    if (mao1[0] == ``) {
      podioRes();
    } else {
      setTimeout(() => {
        fase1.style = "display: block;";
        fase2.style = "display: none;";
      }, "3000");
    }
  }
}
function podioRes() {
  if (pontos_jogador == pontos_maquina) {
    podio.innerHTML = `<h1 style="color: blue;">Oloco meo! Ambos são igualmente bons!</h1>`;
  } else if (pontos_jogador > pontos_maquina) {
    podio.innerHTML = `<h1 style="color: green;">O jogador é o grande vencedor da partida com ${pontos_jogador} pontos!</h1>`;
  } else {
    podio.innerHTML = `<h1 style="color: red;">O adversário venceu a partida com ${pontos_maquina} pontos! Vai lá treinar mais um pouquinho, jogador!</h1>`;
  }

  setTimeout(() => {
    fase1.style = "display: none;";
    fase2.style = "display: none;";
    fase3.style = "display: block;";
  }, "3000");
}
