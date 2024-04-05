//Número de pares que tenham a soma igual a K dentro de uma array
function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    for(let m = 0; m < n-1; m++){
        for (let i = m+1; i < n; i++) {
            if ((ar[m] + ar[i]) % k === 0) {
                pairs++;
            }
        }
    }
    return pairs;
}