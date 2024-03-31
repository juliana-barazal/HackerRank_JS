function timeConversion(s) {

    let t = s.substr(0, 2);
    let period = s.substr(8, 2);
    t = 0 + parseFloat(t);

    if (period === "PM") {
        if (t < 12) {
            t += 12;
        }
        else {
            t = t;
        }
    }

    else {
        if (t < 12) {
            t = "0" + t;
        }

        else {
            t = "00";
        }
    }

    let time = t + s.substr(2, 6);
    return time;
}