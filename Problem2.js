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
            fn.apply(this,arguments);
        }else{throw new Error('You don´t have more tries')}
    }
}

let limited = limitFunc(fun, 2);
let other = limitFunc(notfun, 3);
limited (); 
limited (); 
other();
other();
limited ();
other();
other();