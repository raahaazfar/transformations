/**
 * 03-01-03.js - a simple JavaScript file that gets loaded with
 * page 1 of Workbook 3 (CS559).
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

/**
 * 
 * This is for drawTriSquare - it loads in a separate module that holds the code for the function
 * so we can put that code into a separate file (called "03-01-TriSquare.js")
 * 
 * Now is a good time to learn about modules!
 * 
 * Check your favorite JavaScript book (if it is up to date with ES6).
 * https://github.com/nzakas/understandinges6/blob/master/manuscript/13-Modules.md
 * is a nice tutorial.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * is an official reference
 */
export {};

import * as trisquare from "./03-01-TriSquare.js";

/**
 * Draw the triangle and square at a specific X position
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {number} xval 
 */
function drawTriSquareTransform(context, xval) {
    context.save();
    context.translate(xval, 0);
    trisquare.drawTriSquare(context);
    context.restore();
}

/** @type {HTMLCanvasElement} */
const canvas = ( /** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
const context = canvas.getContext('2d');


/** @type {HTMLInputElement} */
const slider = ( /** @type {HTMLInputElement} */ document.getElementById("slider1"));

// draw the initial things
const xval = Number(slider.value);
// draw the boxes
drawTriSquareTransform(context, xval);

/** Set up the callback function to move the squares */
slider.oninput = function () {
    // clear the canvases
    context.clearRect(0, 0, canvas.width, canvas.height);
    // get the X position and convert to a number
    const xval = Number(slider.value);
    // draw the boxes
    drawTriSquareTransform(context, xval);
};
