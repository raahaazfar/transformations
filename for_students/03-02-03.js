/**
 * 03-02-03.js - a simple JavaScript file that gets loaded with
 * page 2 of Workbook 3 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 *
 */

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
/* jshint -W069, esversion:6 */
export {};

import * as trisquare from "./03-02-TriSquare.js";

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
const context = canvas.getContext('2d');
const sliderX = /** @type {HTMLInputElement} */ (document.getElementById("slider1"));
const sliderY = /** @type {HTMLInputElement} */ (document.getElementById("slider2"));
const textX = /** @type {HTMLInputElement} */ (document.getElementById("text1"));
const textY = /** @type {HTMLInputElement} */ (document.getElementById("text2"));

function sliderChange() {
    const valX = sliderX.value;
    const valY = sliderY.value;
    textX.value = valX;
    textY.value = valY;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.scale(Number(valX), Number(valY));
    trisquare.drawTriSquare(context);
    context.restore();
}
sliderX.oninput = sliderChange;
sliderX.value = "1";
sliderY.oninput = sliderChange;
sliderY.value = "1";
sliderChange();
