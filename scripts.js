const key = "f71fc8b7568771c82376a222809cf4ba"

const icone = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

function colocandoDados(dados){
    document.querySelector(".cidade").innerHTML = dados.name + ", " + dados.sys.country
    //document.querySelector(".icone-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)
    document.querySelector(".info-tempo").innerHTML = dados.weather[0].description
    document.querySelector(".p-umidade").innerHTML = dados.main.humidity + "%"

    if (dados.weather[0].description === "nublado")
        {
            document.querySelector(".icone-tempo").src = "img/galoRosa.png"
        }
    if (dados.weather[0].description === "céu limpo")
        {
            document.querySelector(".icone-tempo").src = "img/galoAzul.png"
        }
}

async function buscaCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())


    if (cidade === ""){
        document.querySelector(".cidade").innerHTML = "Nenhuma Cidade"
        document.querySelector(".icone-tempo").src  = ""
        document.querySelector(".temp").innerHTML = 0
        document.querySelector(".info-tempo").innerHTML = "Sem Informação"
        document.querySelector(".p-umidade").innerHTML = "0%"
        document.querySelector(".galinho").src = ""
    }

    colocandoDados(dados)
} 

function clickBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscaCidade(cidade)
}
