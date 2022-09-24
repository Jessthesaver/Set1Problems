var callcount =0;

function fun(){
    console.log("YEY!!!");
}

function limitFunc(fn,number){ 
    return function(){
        if(callcount < number){
            callcount += 1;
            return fn();
        }
    }
}

var limited = limitFunc(fun, 2);

limited (); // executes fine
limited (); // executes fine
limited (); // does not execute