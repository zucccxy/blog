import random from "./random.js";

let textArray = ["It\'s a sunny day~","Have a good mood","A nice day is coming","Open your window to see the beautiful world",
    "Sunshine is good of you","The sun warm, years static good."];
class Sun {
    constructor(context,w,h) {
        this.w = w;   /*画布宽度*/
        this.h = h;  /*画布高度*/
        this.context = context;
    }
    draw (img) {
        let imgWidth = img.width;
        let imgHeight = img.height;
        let ratio = 1;
        if(imgHeight > imgWidth) {   /*竖图*/
            ratio = imgHeight/this.h;
        } else {
            ratio = imgWidth/this.w;
        }
        let drawWidth = imgWidth/ratio;
        let drawHeight = imgHeight/ratio;
        this.context.drawImage(img,0,0,drawWidth,drawHeight);
    }
    rotate() {
        this.context.clearRect(0,0,this.w,this.h);
        this.context.translate(this.w/2,this.h/2);
        this.context.rotate(Math.PI/18);
        this.context.translate(-this.w/2,-this.h/2);
    }

}

class SunnyDoll {
    constructor(context,w,h) {
        this.x = random(0.2*w,0.8*w);
        this.y = random(0.6*h,0.6*h);
        this.vx = random(10,30);
        this.pictureHeight = 0.15*w;
        this.pictureWidth = 0.15*w;
        this.context = context;
        this.w = w;/*画布宽度*/
        this.h = h;  /*画布高度*/
    }
    draw(img) {
        let imgWidth = img.width;
        let imgHeight = img.height;
        let ratio = 1;
        if(imgHeight > imgWidth) {   /*竖图*/
            ratio = imgHeight/this.pictureHeight;
        } else {
            ratio = imgWidth/this.pictureWidth;
        }
        let drawWidth = imgWidth/ratio;
        let drawHeight = imgHeight/ratio;
        this.context.drawImage(img,this.x,this.y,drawWidth,drawHeight);
        this.context.fillStyle = "#000";
        this.context.font = "30px sans-serif";
        this.context.fillText(textArray[Math.floor(random(0,4))],this.x+drawWidth,this.y-10);
    }
    move () {
        this.context.clearRect(0,0,this.w,this.h);
        if(this.x >= 0.8*this.w) {
            this.vx = -this.vx;
        } else if(this.x <= 0.2*this.w) {
            this.vx = -this.vx;
        }
        this.x +=this.vx
    }
}

export {Sun,SunnyDoll};