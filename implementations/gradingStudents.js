//arredondamento de notas
function gradingStudents(grades) {
    let gradeFinal = [];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            gradeFinal.push(grades[i]);
        }

        else if (grades[i] >= 38) {
            let roundUp = 5 - (grades[i] % 5);
            if (roundUp < 3) {
                gradeFinal.push(grades[i] + roundUp);
            }
            else {
                gradeFinal.push(grades[i]);
            }
        }

    }
    return gradeFinal;
}