console.log(`

`)

const {custom, loggerFile} = require("./helpers/logger")
const {randomError, noError, undefinedAccession, wrongTypeOperation} = require("./helpers/errors")
const {gibberrishOne} = require("./helpers/gibberish")

var txt = "";

txt += "bob";
txt += "\n";
txt += "va";
txt += " ";
txt += "a";
txt += " ";
txt += "la";
txt += " ";
txt += "plage";

// throw new Error("un erreur manuelle")
debugger;
randomError();
debugger;
undefinedAccession();
debugger;
console.log(gibberrishOne(255,6));
noError();
noError();
console.log(gibberrishOne(255,6));
noError();
custom.log("info interressante");
console.log(gibberrishOne(255,6));
noError();
noError();
noError();
console.log(gibberrishOne(255,6));


console.log(txt)