function achaSta(r1){
    let listaSta = []
    r1.forEach(element => {
        if(element.hospital == "Maternidade Santa Joana"){
            let soma = element.pontuacao + element.nota
            listaSta.push(soma)
            total = listaSta.reduce(function(Acumulador, valorAtual, indice, array) {
                return Acumulador + valorAtual;
              });
            console.log(element.hospital)
            console.log(soma)            
            console.log(listaSta)
            return total
        }
    });

}
function achaAng(r1){
    listaAng = []
    r1.forEach(element => {
        
        if(element.hospital == "Casa Angela"){
            let soma = element.pontuacao + element.nota
            listaAng.push(soma)
            totalAng = listaAng.reduce(function(Acumulador, valorAtual, indice, array) {
                return Acumulador + valorAtual;
              });
            console.log(element.hospital)
            console.log(soma)            
            console.log(listaAng)
            return totalAng
            }
    });

}

function achaSep(r1){
    listaSep = []
    r1.forEach(element => {
        
        if(element.hospital == "Sepaco"){
            let soma = element.pontuacao + element.nota
            listaSep.push(soma)
            totalSep = listaSep.reduce(function(Acumulador, valorAtual, indice, array) {
                return Acumulador + valorAtual;
              });
            console.log(element.hospital)
            console.log(soma)            
            console.log(listaSep)
            return totalSep
            }
    });

}
let hospitaisRanking = document.querySelector(".hospitaisRanking")

fetch('https://thespotlightapi.herokuapp.com/usuarios')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    achaSta(data)
    achaAng(data)
    achaSep(data)
    let listaHospitais = []
    listaHospitais.push(total)
    listaHospitais.push(totalAng)
    listaHospitais.push(totalSep)
    lista = listaHospitais.sort()
    ranking = lista.reverse()
    console.log(ranking)
    ranking.forEach(hospital => {
        if(hospital == 208){
            hospitaisRanking.innerHTML = `
            <div class="hospital">
            <h1>1º -  </h1>        
            <p> ${data[0].hospital} -  Pontuação: ${ranking[0]}</p>
            </div>
            <div class="hospital">
            <h1>2º - </h1>        
            <p> ${data[5].hospital} -  Pontuação: ${ranking[1]}</p>
            </div>
            <div class="hospital">
            <h1>3º - </h1>        
            <p> ${data[2].hospital} -  Pontuação: ${ranking[2]}</p>
            </div>

            `
        }
   });

})
.catch((erro)=>{
    console.log(erro)
})
