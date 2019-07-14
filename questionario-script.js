let btnEnviar = document.querySelector(".enviar")
let pontos = document.querySelectorAll("input[type=checkbox]")
let result 

btnEnviar.addEventListener("click", ()=>{
    for(let i = 0; i <= pontos.length; i++){
        if (pontos[i].checked){

            for(let j = 0; j <= pontos.length-1;j++){
            result = Number(pontos[j].value) + Number(pontos[j].value)
            console.log(pontos[j].value)
            console.log(result)   
            }
            
        }
    }
    
    
})