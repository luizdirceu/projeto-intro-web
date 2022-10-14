let time1 = {
    nome: "Palmeiras",
    idade: 107,
    venceuLibertadores: true,
    principaisTitulos: ["Brasileirão", "Libertadores", "Copa do Brasil"],
    img: "./palmeiras.jpg",
    link: "https://pt.wikipedia.org/wiki/Sociedade_Esportiva_Palmeiras"
}
console.log("nome:", time1.nome.toUpperCase(), "\n", "idade:", time1.idade, "\n", "Venceu Libertadores:", time1.venceuLibertadores, "\n", "Principais Titulos:", time1.principaisTitulos)

let time2 = {
    nome: "Atletico MG",
    idade: 115,
    venceuLibertadores: true,
    principaisTitulos: ["Brasileirão", "Libertadores", "Copa do Brasil"],
    img: "./atleticomg.jpg",
    link: "https://pt.wikipedia.org/wiki/Clube_Atl%C3%A9tico_Mineiro"
}
console.log("nome:", time2.nome.toUpperCase(), "\n", "idade:", time2.idade, "\n", "Venceu Libertadores:", time2.venceuLibertadores, "\n", "Principais Titulos:", time2.principaisTitulos)

let time3 = {
    nome: "Fluminense",
    idade: 120,
    venceuLibertadores: false,
    principaisTitulos: ["Brasileirão", "Copa do Brasil"],
    img: "./fluminense.jpg",
    link: "https://pt.wikipedia.org/wiki/Fluminense_Football_Club"
}
console.log("nome:", time3.nome.toUpperCase(), "\n", "idade:", time3.idade, "\n", "Venceu Libertadores:", time3.venceuLibertadores, "\n", "Principais Titulos:", time3.principaisTitulos)

let time4 = {
    nome: "Gremio",
    idade:119,
    venceuLibertadores: true,
    principaisTitulos: ["Brasileirão", "Libertadores", "Copa do Brasil", "Mundial"],
    img: "./gremio.jpg",
    link: "https://pt.wikipedia.org/wiki/Gr%C3%AAmio_Foot-Ball_Porto_Alegrense"
}
let time5={
    nome: "Botafogo",
    idade: 118,
    venceuLibertadores: false,
    principaisTitulos: ["Brasileirão", "Copa do Brasil"],
    img: "./BOTAFOGO.jpg",
    link: "https://pt.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas"
}
let time6={
    nome: "Fortaleza",
    idade:103,
    venceuLibertadores: false,
    principaisTitulos: ["Copa do Nordeste"],
    img: "./fortaleza.jpg",
    link: "https://pt.wikipedia.org/wiki/Fortaleza"
}




arrayTimes = []
//AO FINAL DO PROJETO EU ADICIONEI MAIS TIMES, POREM, FIQUEI COM PREGUIÇA DE FAZER TODOS IFS E TODOS CONSOLES DELES...
if (time1.venceuLibertadores === true) { arrayTimes.push(time1) }
// else{alert("Time 1 não adicionado.")}
if (time2.venceuLibertadores === true) { arrayTimes.push(time2) }
// else{alert("Time 2 não adicionado.")}
if (time3.venceuLibertadores === true) { arrayTimes.push(time3) }
// else{alert("Time 3 não adicionado.")}
// arrayTimes.push(time1, time2, time3)
// console.log(arrayTimes)

const valor = (time1.idade + time2.idade + time3.idade) / 3
console.log(valor)

const verificação = time1.venceuLibertadores && time2.venceuLibertadores && time3.venceuLibertadores
console.log(verificação)

// consoles da semana 5 ..
console.log(`nome: ${arrayTimes[0].nome} 
idade: ${arrayTimes[0].idade}
Venceu libertadores: ${arrayTimes[0].venceuLibertadores}
Principais titulos: "${arrayTimes[0].principaisTitulos[0]}, ${arrayTimes[0].principaisTitulos[1]}, ${arrayTimes[0].principaisTitulos[2]}."`)

console.log(`nome: ${arrayTimes[1].nome} 
idade: ${arrayTimes[1].idade}
Venceu libertadores: ${arrayTimes[1].venceuLibertadores}
Principais titulos: "${arrayTimes[1].principaisTitulos[0]}, ${arrayTimes[1].principaisTitulos[1]}, ${arrayTimes[1].principaisTitulos[2]}."`)

console.log(`nome: ${time3.nome} 
idade: ${time3.idade}
Venceu libertadores: ${time3.venceuLibertadores}
Principais titulos: "${time3.principaisTitulos[0]}, ${time3.principaisTitulos[1]}."`)

arrayTimes.push(time3,time4, time5, time6)

for (i of arrayTimes) {

    for (propriedade in i) {

        console.log(`${propriedade}: ${i[propriedade]}`)

    }
}

// semana 6

// time1EmString = (time1) => {
//     return `o time ${time1.nome} foi criado a ${time1.idade} anos, foi vencedor da libertadores e seus principais titulos são: ${time1.principaisTitulos}`
// }
// console.log(time1EmString(time1))

// funcaoRetornaObjIgualSDtring = (arrayDeObj, valorString) => {

//     let objARetornar = {};

//     for (let i = 0; i < arrayDeObj.length; i++) {

//         if (arrayDeObj[i].nome === valorString) {

// objARetornar.nome = arrayDeObj[i].nome 
// objARetornar.habilidades = arrayDeObj[i].habilidade 
// objARetornar.posição = arrayDeObj[i].posição 
// objARetornar.nacionalidade = arrayDeObj[i].nacionalidade 

//             objARetornar = { ...arrayDeObj[i] };
//         }
//     }

//     if (objARetornar.nome !== valorString) {
//         alert("Não encontrou time");
//     } else {
//         return objARetornar
//     }
// }

// const palmeiras = funcaoRetornaObjIgualSDtring(arrayTimes, "PALMEIRAS")
// console.log(palmeiras)

function trueEFalse(boleano) {
    if (boleano === true) {
        boleano = 'Sim'
        return boleano;
    }
  else {return boleano = "Não"
}
}

function criarTimes(array) {
    const div = document.getElementById('listadetimes')
    div.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        div.innerHTML += `<section>
                <ul >
                    <img src="${array[i].img}" alt="foto" id="fotos">
                    <p><a href="${array[i].link}"
                            id="palmeiras-linkDeReferencia" target="_blank"> ${array[i].nome}</a><br><br>
                        Idade : ${array[i].idade} <br>
                        Venceu Libertadores : ${trueEFalse(array[i].venceuLibertadores)} <br>
                        Principais Titulos : ${array[i].principaisTitulos}</p>
                </ul>
            </section> 
`
    }
}
criarTimes(arrayTimes)

function timeFiltrado(input) {
    const timeEscolhido = arrayTimes.filter((item) => { return item.nome.toUpperCase() === input.value.toUpperCase() })
    // console.log(`${timeEscolhido}` ? timeEscolhido : )
    if (timeEscolhido.length = 1) {
        return timeEscolhido
    } else {
        return arrayTimes
    }
}


function buscarTime() {
    const input = document.getElementById('input')
    console.log(input.value)
    const timeEscolhido = timeFiltrado(input)
    console.log(`${timeEscolhido}` ? timeEscolhido : alert('Time não encontrado'))
    criarTimes(timeEscolhido)
}

