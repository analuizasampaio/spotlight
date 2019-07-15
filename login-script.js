let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let btnEnviar = document.querySelector('.enviar');

btnEnviar.addEventListener("click", ()=>{
    fetch('https://thespotlightapi.herokuapp.com/usuarios/login',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'email': email.value,
            'senha': senha.value

        })
    })
    .then((response)=>{
        return response.json()
        })
    .then((data)=>{

        console.log(data)
        console.log("foi")

        fetch('https://thespotlightapi.herokuapp.com/usuarios')
        .then((response)=>{
            return response.json()
            })
        .then((API)=>{
            console.log(API)
            let acheiemail = (email.value).toString()
            console.log(acheiemail)
            for(let i = 0; i<= API.length-1; i++){
                if(API[i].email == acheiemail){
                    console.log(API[i]._id)
                    window.location = "./perfil.html"
                 }
            }    
        })
        .catch(function(erro){
            console.log(erro)
        })
    
    })
    .catch(function(erro){
        console.log(erro)
    })
})
