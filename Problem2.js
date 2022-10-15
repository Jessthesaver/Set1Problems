function fun(){
    console.log("YEY!!!");
}
function notfun(){
    console.log('not so yey')
}

function limitFunc(fn,number){ 
    let oldfunction=fn;
    let callcount=0;
    return function(){
        if(callcount < number){
            callcount += 1;
            console.log(callcount)
            oldfunction.apply(this,arguments);
        }else{console.log('You don´t have more tries')}
    }
}

let limited = limitFunc(fun, 2);
let other = limitFunc(notfun, 3)
console.log(limited)
limited (); // executes fine
limited (); // executes fine
 // does not execute
other();
other();
limited ();
other();
other();