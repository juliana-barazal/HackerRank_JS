//soma dos inteiros de uma array
function simpleArraySum(ar) {
    let soma = 0;
    for (let i = 0; i < ar.length; i++) {
        soma = soma + ar[i];
    }
    return soma;
}
