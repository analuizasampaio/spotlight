let btnEnviar = document.querySelector(".enviar")
let nomeHospital = document.querySelector(".nomeHospital")
let endereco = document.querySelector(".endereco")
let nota = document.querySelector(".nota")
let relato = document.querySelector(".relato")
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
            'hospital':nomeHospital.value,
            'endereco' : endereco.value,
            'pontuacao': result,
            'nota': nota.value,
            'relato': relato.value

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