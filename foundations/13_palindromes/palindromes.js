const palindromes = function (string) {
    let arr =  string.toLowerCase().split("");

    arr = arr.filter(function(word){
        if(word >= "a" && word <= "z" || word >= "0" && word <= "9"){
            return word;
        };
    })

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[arr.length - i - 1]){
            return false
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
