function mySnake(){
    this.x = 0;
    this.y = 0;
    
    this.xspeed = 1;
    this.yspeed = 0;
    
    this.total = 0;
    this.tail = [];
    
    this.futurePoopX = 0;
    this.futurePoopY = 0;
    
    this.update = function(){
        
        if(this.total===0) {
            this.futurePoopX = this.x;
            this.futurePoopY = this.y;
        }
           
           
        if (this.total == this.tail.length){
            for (var i=0; i<this.total-1; i++){
                if(i===0){
                    this.futurePoopX = this.tail[i].x;
                    this.futurePoopY = this.tail[i].y;
                }
                this.tail[i]=this.tail[i+1];
            }
        }
        this.tail[this.total-1]=createVector(this.x, this.y);
        
        if(this.x === 0 && this.xspeed === -1){
            this.x= 600 - grid;
        } else { 
            this.x=this.x + this.xspeed*grid;
        }
        
        if(this.y === 0 && this.yspeed === -1){
            this.y= 600 - grid;
        } else { 
            this.y=this.y + this.yspeed*grid;
        }
        
        
        if(this.x === 600){
            this.x=0;
        }
        if(this.y === 600){
            this.y=0;
        }
        

    };
    
    this.dir = function(x,y){
        this.xspeed=x;
        this.yspeed=y;
    };
    
    this.show = function (){
        fill(255);
        for (var i=0; i<this.tail.length; i++){
            rect (this.tail[i].x, this.tail[i].y, grid, grid);
        }
        rect (this.x, this.y, grid, grid);
    };
    
    this.eats = function (anObject){
        var d = dist(this.x, this.y, anObject.x, anObject.y);
        if(d<1){
            return true;
        } else {
            return false;
        }
    }
    
    this.dies = function (){
        for (var i=0; i<this.tail.length; i++){
            if(dist(this.x, this.y, this.tail[i].x, this.tail[i].y)< 1){
                this.total = 0;
                this.tail = [];
                poops = [];
                poop = Math.floor(Math.random() * (51) ) + 150;
                return;
            }
        }
        for (var i=0; i<poops.length; i++){
            if(dist(this.x, this.y, poops[i].x, poops[i].y)< 1){
                this.total = 0;
                this.tail = [];
                poops = [];
                poop = Math.floor(Math.random() * (51) ) + 150;
                return;
            }
        }
    }
}