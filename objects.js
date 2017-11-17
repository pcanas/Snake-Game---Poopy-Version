function myPoop (posX, posY){
    this.x = posX;
    this.y = posY;
    
    this.show = function (){
        fill(112,53,22);
        rect (this.x, this.y, grid, grid);
    };
}


function myFood() {
    this.x=0;
    this.y=0;
    
    this.randomLocation = function(){
        this.x = floor(random (0, 600/grid));
        this.x *= grid;
        this.y = floor(random (0, 600/grid));
        this.y *= grid;
        
        for (var i=0; i<snake.tail.length; i++){
            if(dist(this.x, this.y, snake.tail[i].x, snake.tail[i].y)<1){
                this.randomLocation();
                break;
            }
        }
    };
    
    this.show = function (){
        fill(255,0,0);
        rect (this.x, this.y, grid, grid);
    };
}
