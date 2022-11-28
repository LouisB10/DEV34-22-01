var bouton = document.querySelector("button");
// var nombreRdm = document.querySelector();
var message = document.querySelector(".indice")



bouton.addEventListener("click", function(event){


    if(chiffreUser  > chiffreRdm ){
        message.textContent = "C'est plus cher !"
    }
    else if (chiffreUser < chiffreRdm){
        message.textContent = "C'est moins cher !"
    }
    else if(chiffreUser === chiffreRdm){
        message.textContent = "C'est le juste prix !!!"
    }
   

} )


function randomz() {
    let chiffreRdm = Math.floor((Math.random() * 1000));
    return chiffreRdm
}