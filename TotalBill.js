function TotalBill(billamt) {
    const tip = billamt * 0.10;
    const totalBill = billamt + tip;
    console.log(`The total bill amount is: ${totalBill}.`);
}
TotalBill(10000);