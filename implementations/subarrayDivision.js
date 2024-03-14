function birthday(s, d, m) {
    let sum = 0;
    let ways = 0;

    for (let i = 0; i <= s.length - m; i++) {
        sum = 0;
        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum === d) {
            ways++;

        }
    }
    return [ways];
}