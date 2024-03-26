//subtração da diagonal principal pela diagonal secundária sem uso de fórmula
function diagonalDifference(arr) {  
    let d1 = 0; // sum diagonal 1
    let d2 = 0; // sum diagonal 2
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i===j){
                d1 += arr[i][j];
            }
            
            if(i+j === arr.length-1){
                d2 += arr[i][j];
            }
        }
    }
    let diagonalDifference = d1-d2;
    return Math.abs(diagonalDifference);
}