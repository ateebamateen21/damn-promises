// //promises

// let a = false;

function prom(a:any) {

    return new Promise(function (resolve, reject) {
        if (a === true) {
            resolve(1);
        }
        else {
            reject(0);
        }
    })
}

prom(true).then((a)=>{
console.log(a);
}

).catch((b)=>{
    console.log(b);
    }

)