//total de velas assopradas(somente as de altura maior)
function birthdayCakeCandles(candles) {
    let higher = 0;
    let units = 0;
    for (let i = 0; i < candles.length; i++) {

        if (candles[i] > higher) {
            higher = candles[i];
            units = 1;
        }

        else if (candles[i] === higher) {
            units++;
        }
    }
    return units;
}