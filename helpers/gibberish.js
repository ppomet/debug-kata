function  gibberrishOne(length, iterations) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var retourLigne = "\n";
    for (var idx = 0; idx < iterations; idx++) {
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        result += retourLigne;
    }
    return result;
}

module.exports = {gibberrishOne}