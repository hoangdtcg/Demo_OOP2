class Circle {
    constructor(x,y,radius,color,speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.img = new Image();
        this.imgName = 'egg2.png'
    }

    draw(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x, this.y, this.radius,0,2*Math.PI);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    moveDown(){
        this.y += this.speed;
    }

    drawImg(canvas){
        this.img.src = this.imgName;
        let pen = canvas.getContext('2d');
        pen.drawImage(this.img,this.x,this.y,this.radius,this.radius*1.8);

    }
}
