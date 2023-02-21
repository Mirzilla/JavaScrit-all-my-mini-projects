YuraObj = {
    name: "Yura",
    driverLicence: false,
    birthYear: 1974,
    CalcAge: function () {
        this.age = 2022 - this.birthYear;
        return 2022 - this.birthYear;
    },
    job: "programmer",
    getSummary: function () {
        return `${this.name} is a ${this.CalcAge()} - years old ${
            this.job
        } and he has ${
            this.driverLicence ? "a driver license" : "not have drriver license"
        }`;
    },
};
console.log(YuraObj.getSummary());
console.log(
    `${YuraObj.name} is a ${YuraObj.CalcAge()} - years old ${
        YuraObj.job
    } and he has ${
        YuraObj.driverLicence ? "a driver license" : "no friver license"
    }`
);
