//printar o número de positivos, negativos, zeros no array dividos pelo tamanho do array
function plusMinus(arr) {
    let p = 0;
    let n = 0;
    let z = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            p++;
        }

        else if (arr[i] < 0) {
            n++
        }

        else {
            z++;
        }
    }

    p = (p / arr.length).toFixed(6);
    n = (n / arr.length).toFixed(6);
    z = (z / arr.length).toFixed(6);

    console.log( p, '\n', n, '\n', z);
}
