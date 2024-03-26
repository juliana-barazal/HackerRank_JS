function miniMaxSum(arr) {
    let min = arr[0]
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
        
        else if (arr[i] > max){
            max = arr[i];
        }
        
        sum += arr[i];
    }
  
    let sumMax = sum - min;
    let sumMin = sum - max;
    
    console.log(sumMin, sumMax);

}