"use strict";
// ex_02
// Storing a person’s name in a variable
var personName = ("Zain Ul Abedin");
// print person’s name in LowerCase
console.log("LowerCase :", personName.toLowerCase());
//  print that person’s name in UpeerCase
console.log("UpperCase :", personName.toUpperCase());
// print that person’s name in TitleCase
let firstletter = personName.charAt(0).toUpperCase();
let restletters = personName.slice(1).toLowerCase();
let TitleCase = firstletter + restletters;
console.log("TitleCase :", TitleCase);
