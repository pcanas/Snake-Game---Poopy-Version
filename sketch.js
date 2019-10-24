var grid = 20;
var snake = new mySnake();
var food = new myFood();
var stop;
var poop;
var poops = [];

function setup (){
    createCanvas (600, 600);
    frameRate(10);
    stop = false;
    food.randomLocation();
    poop = Math.floor(Math.random() * (51) ) + 150;
    score = 0;
}

function keyPressed(){
    if(keyCode === LEFT_ARROW && !stop){
        if(snake.xspeed!==1 || snake.total===0){
            snake.dir(-1,0);
        }
    } else if(keyCode === RIGHT_ARROW && !stop){
        if(snake.xspeed!==-1 || snake.total===0){
            snake.dir(1,0);
        }
    } else if(keyCode === UP_ARROW && !stop){
        if(snake.yspeed!==1 || snake.total===0){
            snake.dir(0,-1);
        }
    } else if(keyCode === DOWN_ARROW && !stop){
        if(snake.yspeed!==-1 || snake.total===0){
            snake.dir(0,1);
        }
    } else if (keyCode === 32){
        stop = !stop;
    }
}

function draw() {

    background(51);

    if (document.getElementById('score').innerHTML != snake.total)
        document.getElementById('score').innerHTML = snake.total;

    if(!stop){
        document.getElementById('pauseLogo').style.display = "none";
        snake.update();
        snake.dies();
        snake.show();
        if (snake.eats(food)){
            snake.total ++;
            if (snake.total > 9) {
                document.getElementById('score').style.left = "530px";
            }
            food.randomLocation();
        }
        food.show();
        for (var i = 0; i<poops.length; i++){
            poops[i].show();
        }
    } else {
        snake.show();
        food.show();
        for (var i = 0; i<poops.length; i++){
            poops[i].show();
        }
        document.getElementById('pauseLogo').style.display = "block ";
    }

    poop--;
    if (poop===0){
        poops [poops.length] = new myPoop (snake.futurePoopX, snake.futurePoopY);
        poop = Math.floor(Math.random() * (51) ) + 150;
    }

}
