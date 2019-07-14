let btnEnviar = document.querySelector(".enviar")
let pontos = document.querySelectorAll(".custom-control-input[type=checkbox]")
let result = 0
let lista = []

btnEnviar.addEventListener("click", () => {
    pontos.forEach(ponto => {
        if (ponto.checked) {
            lista.push(Number(ponto.value))

        }
    });
    console.log(lista)
    lista.forEach(elemento => {
        result = result + elemento
    })
    console.log(result) 

    fetch('https://thespotlightapi.herokuapp.com/usuarios/5d2a4f03bc19990004ebcc8c',{
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'pontuacao': result

        })
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{

        console.log(data)
        window.location.reload()
    
    })
    .catch(function(erro){
        console.log(erro)
    })
    

})