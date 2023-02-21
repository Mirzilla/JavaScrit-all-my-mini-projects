const weight = prompt("Enter your weight in kilograms:");
const height = prompt("Enter your height in meters:");
const Bmi = weight / (height * height);
if (Bmi >= 25) {
    alert(`Yes, your BMI is more than normal by ${Bmi}`);
    console.log(`Yes, your BMI is more than normal by ${Bmi}`);
} else {
    alert("No, your weight is normal");
    console.log("No, your weight is normal");
}
