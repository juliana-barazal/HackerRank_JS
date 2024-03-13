//verificar quantas poções mágicas o jogador precisa tomar para pular todas as barreiras
function hurdleRace(k, height) {
    //k -> height the character jumps naturally
    //height[n] -> height of each hurdle
    let higher = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > higher) {
            higher = height[i]
        }
    }
    if (higher > k) {
        return higher - k;
    }
    else {
        return 0;
    }
}