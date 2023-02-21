const calculateTips = (bill) => (bill < 20 ? bill * 0.2 : bill * 0.15);
const bills = [11, 20, 47];
const tips = [
    calculateTips(bills[0]),
    calculateTips(bills[1]),
    calculateTips(bills[2]),
];
const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totalBills);
