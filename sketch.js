
var play,how,about
var gameState="wait"

function preload(){
treasureimg=loadImage("treasure.gif")
waitbg=loadImage("splash.gif")
}


function setup(){

    createCanvas(windowWidth,windowHeight)

play=createImg("Play.png")
play.position(100,100)
//play.size(150,150)

about=createButton("About")
about.position(100,200)


how=createButton("How")
how.position(100,300)




}


function draw(){


if (gameState==="wait"){
    background(waitbg)
}



drawSprites()
}