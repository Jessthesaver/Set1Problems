function vowels(str) {
    var countvowels = 0;
    for (var i = 0; i <= str.length; i++) {
      if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
        countvowels += 1;
      }
    }
    return (countvowels);
};

function countervowdig(value){
    let counter;
    let type=typeof(value);
    switch(type){
        case ('string'):
            counter = vowels(value); 
            return counter;
        case ('number'):
            if(Number.isInteger(value)){ 
            counter = Math.trunc(Math.log10(value) + 1); 
            return counter;
        }else return 'Not an integer';

    }
}


let a = countervowdig(70004.01);
console.log(a)