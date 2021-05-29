// empty shell for students to do their quadcopter
// exercise

// we do enable typescript type checking - see
// https://graphics.cs.wisc.edu/Courses/559-sp2020/pages/typed-js/
// and
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
// @ts-check

/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, -W141, esversion:6 */
export {};

// somewhere in your program you'll want a line
// that looks like:
//const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let context = canvas.getContext("2d");
let speed1 = 300;
let speed2 = 100;

function drawpropellers(angle) {
    context.save();
    context.translate(0, 70);
    context.rotate(angle);
    
    for (let i = 0; i < 2; i++) {
        context.fillStyle = "gray";
        context.fillRect(-2, 30, 10, 30);
        context.fill();
        context.stroke();
        context.rotate(Math.PI);
    }
    context.restore();
}

function drawquadcopter(angle, x, y, speed) {
    let angel1 = performance.now()/speed;
    context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.save();
            context.translate(15, 120);
            context.rotate(Math.PI/4);
            for (let i = 0; i < 4; i++) {
                context.fillStyle = "black" 
                context.fillRect(-2, 10, 10, 80);
                drawpropellers(angel1);
                context.rotate(Math.PI/2);
            }
            context.rotate(-Math.PI/4);
            context.beginPath();
            context.fillRect(-15,-15,30,30);
            context.arc(-1, -1, 20, 0, 2 * Math.PI);
            context.fillStyle = "yellow";
            context.fill();
            context.stroke();
        context.restore();
    context.restore();
}


// and you will want to make an animation loop with something like:
/**
 * the animation loop gets a timestamp from requestAnimationFrame
 * 
 * @param {DOMHighResTimeStamp} timestamp 
 */
function loop(timestamp) {
        let angel2 = timestamp/speed1;
        context.clearRect(0,0,canvas.width,canvas.height);
        context.save();
        context.scale(1, -1);
        context.translate(1, -canvas.height);
        context.save();
        drawquadcopter(angel2, 300, 300, speed2);
        context.restore();
        context.restore();
    window.requestAnimationFrame(loop);
};

// and then you would start the loop with:
window.requestAnimationFrame(loop);