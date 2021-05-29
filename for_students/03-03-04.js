/**
 * 03-03-04.js - a simple JavaScript file that gets loaded with
 * page 3 of Workbook 3 (CS559).
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

/**
 *
 * @param {CanvasRenderingContext2D} context
 */
function picture(context) {
    trisquare.drawTriSquare(context);
}

// note we use the braces to get new scopes so we can re-use variable names
{ // box 1 - regular canvas coordinate system
    const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
    const context = canvas.getContext("2d");
    picture(context);
}

{ // box 2 - flip coordinate system, translate first
    const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas2"));
    const context = canvas.getContext("2d");
    context.translate(0, canvas.height);
    context.scale(1, -1);
    picture(context);
}

{ // box 3 - flip coordinate system, scale first
    const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas3"));
    const context = canvas.getContext("2d");
    context.scale(1, -1);
    context.translate(0, -canvas.height);
    picture(context);
}
