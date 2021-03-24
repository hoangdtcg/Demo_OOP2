class Player{
    constructor(x,y,radius,color,speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.img = new Image();
    }

    drawRect(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.rect(this.x,this.y,this.radius,this.radius);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }
    moveLeft(){
        this.x -= this.speed;
    }
    moveRight(){
        this.x += this.speed;
    }

    drawImg(canvas){
        this.img.src = 'car.png';
        let pen = canvas.getContext('2d');
        pen.drawImage(this.img,this.x,this.y,this.radius,this.radius*1.8);

    }
}
