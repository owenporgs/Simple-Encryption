function cat() {
    var q = encrypt("cat", "password");
    alert(q);
    alert(decrypt(q, "password");
}
function encrypt(input, inputKey) {
    let arrKey = [];
    let arr = [];
    let arrEncript = [];
    let key = 0;
    for (let i = 0; i < inputKey.length; i++) {
        arrKey[i] = inputKey[i];
    }

    // Key making
    for (let i = 0; i < arrKey.length; i++) {
        key += parseInt(arrKey[i].charCodeAt());
    }


    //////////////////// Message
    // From input to "arr" Array
    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i];
    }

    //  Adding key to input
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charCodeAt();
        arr[i] += key;
        arrEncript[i] = String.fromCharCode(arr[i]);
    }

    ///////////// Display
   return arrEncript.join("");
}


function decrypt(input, inputKey){
    let arrKey = [];
    let arr = [];
    let arrDecrypt = [];
    let key = 0;

    /////////////////// KEY
    // From key input to array
    for (let i = 0; i < inputKey.length; i++) {
        arrKey[i] = inputKey[i];
    }

    // Key making
    for (let i = 0; i < arrKey.length; i++) {
        key += parseInt(arrKey[i].charCodeAt());
    }


    //////////////////// Message
    // From input to "arr" Array
    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i];
    }

    //  Adding key to input
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charCodeAt();
        arr[i] -= key;
        arrDecrypt[i] = String.fromCharCode(arr[i]);
    }

    ///////////// Display
    return arrDecrypt.join("");
}
