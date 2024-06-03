function addLogging(fonctionOrigine){
    return function(...args){
        console.log(`arguement avant : ${args}`)
        args[0]++;
        const rest = fonctionOrigine(...args)
        console.log(`resultat : ${rest}`)
        return rest;
    }
}


function somme(a,b){
    return a+b;
}

console.log(somme(1,2));

const LoggedSum1 = addLogging(somme);

LoggedSum1(1,2);