/**
 * 03-02-01.js - a simple JavaScript file that gets loaded with
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
const canvas1 = ( /** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
const context1 = canvas1.getContext('2d');
trisquare.drawTriSquare(context1);

/** @type {HTMLCanvasElement} */
const canvas2 = ( /** @type {HTMLCanvasElement} */ document.getElementById("canvas2"));
const context2 = canvas2.getContext('2d');
context2.scale(2, 2);
trisquare.drawTriSquare(context2);

/** @type {HTMLCanvasElement} */
const canvas3 = ( /** @type {HTMLCanvasElement} */ document.getElementById("canvas3"));
const context3 = canvas3.getContext('2d');
context3.scale(0.5, 0.5);
trisquare.drawTriSquare(context3);
