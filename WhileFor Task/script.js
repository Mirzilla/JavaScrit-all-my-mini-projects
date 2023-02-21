const calculateTips = (bills) => (bills < 20 ? bills * 0.2 : bills * 0.15);

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calculateTips(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
console.log(bills, tips, totals);

const calculateAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
};
console.log(calculateAverage(totals));
