const deck = [
    { link: '<img src="./assets/abominavel.png" width="150px">', att: 5, res: 8 },
    { link: '<img src="./assets/apocalipse.webp" width="150px">', att: 6, res: 8 },
    { link: '<img src="./assets/capita_marvel.webp" width="150px">', att: 5, res: 6},
    { link: '<img src="./assets/capitao_america.webp" width="150px">', att: 3, res: 3},
    { link: '<img src="./assets/carnificina.webp" width="150px">', att: 2, res: 2},
    { link: '<img src="./assets/colossus.webp" width="150px">', att: 2, res: 3},
    { link: '<img src="./assets/cyclops.webp" width="150px">', att: 3, res: 4},
    { link: '<img src="./assets/deadpool.webp" width="150px">', att: 1, res: 1},
    { link: '<img src="./assets/doutor_destino.webp" width="150px">', att: 6, res: 5},
    { link: '<img src="./assets/doutor_estranho.webp" width="150px">', att: 3, res: 2},
    { link: '<img src="./assets/gaviao_arqueiro.webp" width="150px">', att: 1, res: 1},
    { link: '<img src="./assets/hela.webp" width="150px">', att: 6, res: 6},
    { link: '<img src="./assets/homem_de_ferro.webp" width="150px">', att: 5, res: 0},
    { link: '<img src="./assets/homem_de_gelo.webp" width="150px">', att: 1, res:2},
    { link: '<img src="./assets/homem_formiga.webp" width="150px">', att: 1, res:1},
    { link: '<img src="./assets/homem-aranha.webp" width="150px">', att: 4, res: 2},
    { link: '<img src="./assets/namor.webp" width="150px">', att: 4, res: 5},
    { link: '<img src="./assets/pantera_negra.webp" width="150px">', att: 4, res: 2},
    { link: '<img src="./assets/professor.webp" width="150px">', att: 5, res: 3},
    { link: '<img src="./assets/thanos.webp" width="150px">', att: 6, res: 8},
    { link: '<img src="./assets/thor.webp" width="150px">', att: 4, res: 6},
    { link: '<img src="./assets/venom.webp" width="150px">', att: 3, res: 1},
    { link: '<img src="./assets/visao.webp" width="150px">', att: 5, res: 7},
    { link: '<img src="./assets/viuva_negra.webp" width="150px">', att: 2, res: 1},
    { link: '<img src="./assets/wolverine.webp" width="150px">', att: 2, res: 3},
    { link: '<img src="./assets/drax.webp" width="150px">', att: 4, res: 4}
]
var mao1 = [];
var mao2 = [];
var pontos_jogador = 0
var pontos_maquina = 0

function carregamento(){
    for (let i = 0; mao1.length < 5 ;i ++){
        let sorteio1 = (Number(Math.floor(Math.random()*26)))

        if (mao1 == ``){
            mao1.push(deck[sorteio1])
        } else {
            for (let index = 0; index < mao1.length; index++){
                if (mao1.indexOf(deck[sorteio1]) == -1){
                    mao1.push(deck[sorteio1])
                    break
                } else { 
                    break
                }
            }
        }
        
    }
    for (let i = 0; mao2.length < 5 ;i ++){
        let sorteio2 = (Number(Math.floor(Math.random()*26)))

        if (mao2 == ``){
            mao2.push(deck[sorteio2])
        } else {
            for (let index = 0; index < mao2.length; index++){
                if (mao2.indexOf(deck[sorteio2]) == -1){
                    mao2.push(deck[sorteio2])
                    break
                } else {
                    break
                }
            }
        }
        
    }

    for (let index = 0; index < mao1.length; index++){
        baralhoJogador.innerHTML += mao1[index].link
        baralhoMaquina.innerHTML += mao2[index].link
    }
    console.log(deck)
}