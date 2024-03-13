//divisão da conta do restaurante sem incluir um item que uma das pessoas não pediu
function bonAppetit(bill, k, b) {
    let sumBill = 0;

    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            sumBill += bill[i];
        }
    }
    if (sumBill / 2 === b) {
        console.log('Bon Appetit');
    }

    else if (sumBill / 2 !== b) {
        let refund = b - sumBill / 2;
        console.log(refund);
    }
}