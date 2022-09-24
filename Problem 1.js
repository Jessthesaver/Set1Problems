function consonants(str) {
    var countConsonants = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" && str[i] !== " " ) {
        countConsonants += 1;
      }
    }
    return (countConsonants);
};

function sortarray(array,method="ascending"){
    switch(method){
        case "ascending":
            return array.sort();
        case "descending":
            array.sort();
            return array.reverse();
        case "length ascending":
            return array.sort(function(a, b){
                return a.length - b.length;
              });

        case "length descending":
            return array.sort(function(a, b){
                return b.length - a.length;
                });
        case "number of consonants ascending":
            return array.sort(function(a, b){
                return consonants(a) - consonants(b);
                });

        case "number of consonants descending":
            return array.sort(function(a, b){
                return consonants(b) - consonants(a);
                });
    }
}
arr=["lprwd","Abby", "Pedros"];
console.log(sortarray(arr,"number of consonants descending"));