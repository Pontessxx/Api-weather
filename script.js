//pegando uma API para pegar as informações externar
const key = 'a0dcd14f7f427f1ae1bd5ff8f888231e'
async function buscaCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`)
    
}
function pegaInput() {
   const cidade = document.getElementById('input').value
   buscaCidade(cidade)
   //console.log(input)
}