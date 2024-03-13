//comparação de 3 pontos de Alice e Bob
function compareTriplets(a, b) {
    let pAlice = 0;
    let pBob = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            pAlice += 1;
        }

        else if (a[i] < b[i]) {
            pBob += 1;
        }

    }

    let pontos = [pAlice, pBob];
    return pontos;
}