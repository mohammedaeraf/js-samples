let f = [];
for (let i = 0; i < 30; i++) 
    (i == 0 || i == 1) ? f.push(i) : f.push(f[i-1] + f[i-2]);
console.log(f);

// 0 1 1 2 3 5 8 13

