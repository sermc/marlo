window.onload = function () {

    let chats = document.getElementsByClassName("chatM");
    
    console.log(chats);
    for(let i=0; i<chats.length; i++){
        chats[i].onclick = function(){
            deseleccionarChats(chats);
            desactivarChats();
            activarchat(chats[i]);
        }
    }
        
}

function activarchat(chat){
    console.log(chat.id);
    switch(chat.id){
        case ("Diego"):
            document.getElementById("Diego").classList.add("seleccionado");
            document.getElementById("uno").classList.remove("invisible");
            document.getElementById("uno").classList.add("visible");
        break;
        case ("Raquel"):
            document.getElementById("Raquel").classList.add("seleccionado");
            document.getElementById("dos").classList.remove("invisible");
            document.getElementById("dos").classList.add("visible");
        break;
        case ("Alvaro"):
            document.getElementById("Alvaro").classList.add("seleccionado");
            document.getElementById("tres").classList.remove("invisible");
            document.getElementById("tres").classList.add("visible");
        break;
        case ("Paula"):
            document.getElementById("Paula").classList.add("seleccionado");
            document.getElementById("cuatro").classList.remove("invisible");
            document.getElementById("cuatro").classList.add("visible");
        break;
        case ("MariaJ"):
            document.getElementById("MariaJ").classList.add("seleccionado");
            document.getElementById("cinco").classList.remove("invisible");
            document.getElementById("cinco").classList.add("visible");
        break;
    }
}

function desactivarChats(){
    let textos = document.getElementsByClassName("col2");
    for(let i=0; i<textos.length; i++){
            textos[i].classList.remove("visible");
            textos[i].classList.add("invisible");
    }
}

function deseleccionarChats(chats){
    for(let i=0; i<chats.length; i++){
        chats[i].classList.remove("seleccionado");
}
}