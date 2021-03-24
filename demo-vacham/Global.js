function randomNumber(min,max) {
    let rand = Math.floor(Math.random()*(max-min))+min;
    return rand;
}
function randomColor() {
    let r = randomNumber(0,255);
    let b = randomNumber(0,255);
    let g = randomNumber(0,255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

function isCrash(obj1, obj2) {
    let left1 = obj1.x - obj1.radius;
    let right1 = obj1.x + obj1.radius;
    let top1 = obj1.y - obj1.radius;
    let bottom1 = obj1.y + obj1.radius;

    let left2 = obj2.x - obj2.radius;
    let right2 = obj2.x + obj2.radius;
    let top2 = obj2.y - obj2.radius;
    let bottom2 = obj2.y + obj2.radius;

    if(right1 < left2 || left1 > right2 || top1 > bottom2 || bottom1 < top2){
        return false;
    }else {
        return true;
    }
}

function isCrash2(player, circle) {
    let left1 = player.x;
    let right1 = player.x + player.radius*2;
    let top1 = player.y;
    let bottom1 = player.y + player.radius*2;

    let left2 = circle.x - circle.radius;
    let right2 = circle.x + circle.radius;
    let top2 = circle.y - circle.radius;
    let bottom2 = circle.y + circle.radius;

    if(right1 < left2 || left1 > right2 || top1 > bottom2 || bottom1 < top2){
        return false;
    }else {
        return true;
    }
}
