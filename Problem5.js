function vowels(str) {
    let countvowels = 0;
    for (let i = 0; i <= str.length; i++) {
      if ('aeiouAEIOU'.includes(str[i])) {
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
        }else throw new Error('Not an integer');

    }
}


let a = countervowdig('AbigaIl');
console.log(a)