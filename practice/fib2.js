let f = [];
for (let i = 0; i < 10; i++) {
   f.push( i == 0 || i == 1 ? i : f[i-1] + f[i-2])
}
console.log(f);