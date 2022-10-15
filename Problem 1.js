function consonants(str) {
    var countConsonants = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" && str[i] !== " " ) {
        countConsonants += 1;
      }
    }
    return (countConsonants);
};

function sortarray(array,method="asc"){
    switch(method){
        case "asc":
            return array.sort();
        case "des":
            array.sort();
            return array.reverse();
        case "len asc":
            return array.sort(function(a, b){
                return a.length - b.length;
              });

        case "len des":
            return array.sort(function(a, b){
                return b.length - a.length;
                });
        case "cons asc":
            return array.sort(function(a, b){
                return consonants(a) - consonants(b);
                });

        case "cons des":
            return array.sort(function(a, b){
                return consonants(b) - consonants(a);
                });
    }
}
arr=["lprwd","Abby", "Pedros"];
console.log(sortarray(arr,'len des'));