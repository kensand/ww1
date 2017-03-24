var pubE = 65537;
var modulus = "1009230452304583204532045802845";
//var rsa = RSAKey();
var encode = function(encString, pubKey){
        var rsa = new RSAKey();
        rsa.setPublic(byte2Hex(modulus), byte2Hex(pubE)); 
        return rsa.encrypt(encString);

}

var decode = function(decString, privKey){
        var rsa = new RSAKey();        
        rsa.setPrivate(byte2Hex(modulus), byte2Hex(pubE), byte2Hex(RSAGenerate(1024), privKey)); 
        return rsa.decrypt(encString);

        
}
