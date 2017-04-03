var len = 1024;
var pubE = "10001";
//var rsa = RSAKey();
var encode = function(encString, pubMod){
        var rsa = new RSAKey();
        rsa.setPublic(pubMod, pubE); 
    return linebrk(rsa.encrypt(linebrk(encString, 64)), 64);
}

var decode = function(decString, privKey, mod){
    var rsa = new RSAKey();        
    rsa.setPrivate(mod, pubE, privKey); 
    return rsa.decrypt(decString);

        
}

var generate = function(){

    var rsa = new RSAKey();
    rsa.generate(len, pubE);
    return rsa;
}
