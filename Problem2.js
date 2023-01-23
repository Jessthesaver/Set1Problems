function fun(){
    console.log("YEY!!!");
}
function notfun(){
    console.log('not so yey')
}

function limitFunc(fn,number){ 
    let callcount=0;
    return function(){
        if(callcount < number){
            callcount += 1;
            return fn.apply(this,arguments);
        }else{throw new Error('You don´t have more tries')}
    }
}
function sun (a,b){ return a+b; } 
let limited = limitFunc(sun, 2);

console.log(limited (3,1)); 
console.log(limited (5,2)); 
console.log(limited (3,1)); 
console.log(limited (5,2)); 