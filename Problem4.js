function copyprop(objA,objB, props){
    if(prop != undefined){
        for(let i in props){
            objA[props[i]]=objB[props[i]];
        }
        return objA;
    }else{ 
        for(let i in objB){
            objA[i]=objB[i];
        }
        return objA;
    }
}

oba = {a:5, b:9, c:44};
obb = {c:7,d:95, p:8, z:74};

//let obc = copyprop(oba,obb);

let obd = copyprop(oba,obb,['d','p','z']);
console.log(obd);