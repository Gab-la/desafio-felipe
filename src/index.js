let nivelHeroi = 999999
let rankHeroi
let nomeHeroi = "Gabriel do Js"

if(nivelHeroi<=1000){
 rankHeroi="Ferro"
}else if(nivelHeroi<=2000){
rankHeroi="Bronze"
}else if(nivelHeroi<=5000){
rankHeroi="Prata"
}else if(nivelHeroi<=7000){
rankHeroi = "Ouro"  
}else if(nivelHeroi<=8000){
rankHeroi="Platina"
}else if(nivelHeroi<=9000){
rankHeroi= "Ascendente"
}else if(nivelHeroi<=10000){
rankHeroi="Imortal"
}else{ (nivelHeroi>=10001)
rankHeroi= "Radiante"}

console.log("O Herói de nome "+ nomeHeroi, ("Está no Rank:")+rankHeroi, ("com ")+nivelHeroi, ("pontos"))








