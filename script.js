var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

function start() {
    block.style.animation = "block 1s infinite linear";
}

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: ");
        counter=0;
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML;
    }
}, 10);