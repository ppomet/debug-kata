const {custom}  = require("./logger");

function randomError() {
    if (Math.random() < 0) {
        throw Error("erreur aleatoire");
    }
}

function noError () {
    debugger;
    const bidu= "badu";
    custom.remind("pas d'erreur ici");
    debugger;
}

function undefinedAccession() {
    debugger;
    var Bob = {ONE: {noError, nested: {randomError}}, TWO: {noError, nested: {randomError, TWO: "two"}}};
    debugger;
    var {ONE, TWO} = Bob;
    delete(Bob.TWO);
    debugger;
    console.log(Object.keys(Bob));
    console.log(Bob.TWO.nested)
    // console.log(Bob)
    console.log("ici");
    // Bob.functionOne();
    console.log("la");

    return undefined;
}

function wrongTypeOperation(number) {
    JSON.stringify(Math.floor(number));
}

module.exports = {randomError, noError, undefinedAccession, wrongTypeOperation}