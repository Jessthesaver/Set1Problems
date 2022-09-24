function copyprop(objA,objB, props){
    let a = objA;
    let b = objB;
    let prop = props;
    if(prop != undefined){
        for(let i in prop){
            a[prop[i]]=b[prop[i]];
        }
        return a;
    }else{ 
        for(let i in b){
            a[i]=b[i];
        }
        return a;
    }
}

oba = {a:5, b:9, c:44};
obb = {c:7,d:95, p:8, z:74};

//let obc = copyprop(oba,obb);

let obd = copyprop(oba,obb,['d','p','z']);
console.log(obd);