let fibNos = [];
for (let i = 0; i <= 10; i++) {
    if(i == 0 || i == 1) 
        fibNos.push(i);
    else 
        fibNos.push(fibNos[i-1] + fibNos[i-2]);
}
console.log(fibNos); // outputs - 0 1 1 2 3 5 8 13 21 34 55