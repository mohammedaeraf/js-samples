function calcFact(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact = fact * i;
    }
    return fact; //24
}


let ans = calcFact(4); 
console.log(ans);



