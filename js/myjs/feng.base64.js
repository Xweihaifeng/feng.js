/*base64加密解密*/
const Base64 = {
    encode: function(name) {
        var str=CryptoJS.enc.Utf8.parse(name);
        var base64=CryptoJS.enc.Base64.stringify(str);
        return base64;
    },
    decode: function(name) {
        var words  = CryptoJS.enc.Base64.parse(name);
        return words.toString(CryptoJS.enc.Utf8);
    }
}