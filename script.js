//pegando uma API para pegar as informações externar
const key = "a0dcd14f7f427f1ae1bd5ff8f888231e"
async function buscaCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    console.log(dados)
    dadosTela(dados)
}
function dadosTela(dados){
    const title = document.getElementById('cidade_title')
    title.innerHTML = dados.name // pega o nome
    title.classList.add('verde-titulo') // adiciona o verde no titulo
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C" // pega a temperatura 
    document.querySelector('.text-previsao').innerHTML = dados.weather[0].description // descrição
    document.querySelector('#umidade').innerHTML = dados.main.humidity + "%" // pega a umidade 
    document.querySelector('.img-previsao').src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}
function pegaInput() {
   const cidade = document.getElementById('input').value
   buscaCidade(cidade)
   //console.log(input)
}