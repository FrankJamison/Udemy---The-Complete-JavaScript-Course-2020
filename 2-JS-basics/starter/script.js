/*jslint browser: true */
/*global window */

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var massMark = 78; // kg
var massJohn = 92; // kg
var heightMark = 1.69; // meters
var heightJohn = 1.95; // meters

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var markHasHigherBMI = bmiMark > bmiJohn;

// Console
var console = window.console = {};

console.log("Is Mark's BMI Higher than John's? " + markHasHigherBMI);