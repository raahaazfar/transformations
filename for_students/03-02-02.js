/**
 * 03-02-02.js - a simple JavaScript file that gets loaded with
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
/* jshint -W069, -W141, esversion:6 */
export {};

import * as trisquare from "./03-02-TriSquare.js";

/** @type {HTMLCanvasElement} */
const canvas = ( /** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
const context = canvas.getContext('2d');
trisquare.drawTriSquare(context);

const slider = /** @type {HTMLInputElement} */ (document.getElementById("slider1"));

const text = /**@type {HTMLInputElement} */ (document.getElementById("text1"))

function sliderChange() {
    const val = slider.value;
    text.value = val;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.scale(Number(val), Number(val));
    trisquare.drawTriSquare(context);
    context.restore();
}
slider.oninput = sliderChange;
sliderChange();
