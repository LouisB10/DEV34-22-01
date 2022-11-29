var bouton = document.querySelector("button");
var message = document.querySelector(".indice")
var compt = document.querySelector(".nb");
var chiffreUser = document.querySelector("#number").value;
var restart = document.querySelector(".rec");
var drapo = false;
let chiffreRdm;

bouton.addEventListener("click", function(){
    if(drapo === false ){
        start();
        randomz();
        console.log("Le jeu vient de commencer")
        drapo = true;
    }
    else{
        justpri();
    }
});

restart.addEventListener("click",function(){
    drapo = false;
    compt.textContent="Le nombre aléatoire est généré entre 1 et 1000"
    console.log("Le jeu vient de recommencer");
})





function randomz() {
    chiffreRdm = Math.floor((Math.random() * 1000));
    compt.textContent = `Le nombre aléatoire est : ?`;
    console.log(chiffreRdm);
}
function start(){
    bouton.textContent = "Donner sa réponse"
}

function justpri(){
    var chiffreUser = document.querySelector("#number").value;
    if(chiffreUser  > chiffreRdm ){
        message.textContent = "C'est moins cher !"
    }
    else if (chiffreUser < chiffreRdm){
        message.textContent = "C'est plus cher !"
    }
    else if(chiffreUser == chiffreRdm){
        message.textContent = "C'est le juste prix !!!"
    }
}