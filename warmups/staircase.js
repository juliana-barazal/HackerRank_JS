//impressão de uma escada formada por hashs
function staircase(n) {
    let hash = '#';
    let space = ' ';

    for (let i = n - 1; i >= 0; i--) {
        console.log(space.repeat(i) + hash.repeat(n - i));
    }
}