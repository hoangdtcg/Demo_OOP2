class GameManage {
    constructor(canvas) {
        this.canvas = canvas;
        this.player = null;
        this.enemy = [];
        this.score = 0;
        this.live = 3;
    }

    start(){
        let player = new Circle(canvas.width/2, canvas.height - 50,100,'black',0);
        this.createCircle(1);
    }

    createCircle(number) {
        for (let i = 0; i < number; i++) {
            let x = randomNumber(0,canvas.width);
            let y = -1 * randomNumber(10,50);
            let r = randomNumber(10,30);
            let color = randomColor();
            let speed = randomNumber(5,20);
            let circle = new Circle(x,y,r,color,speed);
            this.enemy.push(circle);
        }
        display();
    }
}
