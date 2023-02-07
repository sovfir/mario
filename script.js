const mario = document.getElementById("mario");
const wall = document.getElementById("wall");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump()
{
    if (mario.classList != "jump")
    {
       mario.classList.add("jump") 
    }
    setTimeout(function() {
        mario.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval( function() {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue("left"));
    if (wallLeft < 50 && wallLeft > 0 && marioTop >= 140)
    {
        alert("GAME OVER!!!")
    }
}, 10)