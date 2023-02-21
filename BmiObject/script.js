firstPerson = {
    name: "Jack",
    lastName: "White",
    weight: 79,
    height: 1.7,
};

secondPerson = {
    name: "Mike",
    lastName: "Black",
    weight: 91,
    height: 1.93,
};

calculateBmi = {
    JackBmi: function () {
        return firstPerson.weight / (firstPerson.height * firstPerson.height);
    },
    MikeBmi: function () {
        return (
            secondPerson.weight / (secondPerson.height * secondPerson.height)
        );
    },
    higherBmi: `${firstPerson.name} ${firstPerson.lastName} BMI (${
        this.JackBmi
    }) is ${this.JackBmi() > this.MikeBmi() ? " " : "not"} higher tnan ${
        secondPerson.name
    } ${secondPerson.lastName} (${this.MikeBmi()})`,
};

// const higherBmi = `${firstPerson.name} ${firstPerson.lastName
//     } BMI (${calculateBmi.JackBmi()}) is ${calculateBmi.JackBmi > calculateBmi.MikeBmi ? " " : "not"} higher tnan ${secondPerson.name
//     } ${secondPerson.lastName} (${calculateBmi.MikeBmi()})`;
console.log(calculateBmi.JackBmi(), calculateBmi.MikeBmi());
console.log(calculateBmi.higherBmi);

// const higherBmi = `${firstPerson.name} ${
//     firstPerson.lastName
// } BMI (${calculateBmi.JackBm()}) is ${
//     calculateBmi.JackBmi > calculateBmi.MikeBmi ? "" : "not"
// } higher tnan ${secondPerson.name} ${
//     secondPerson.lastName
// } (${calculateBmi.MikeBmi()})`;

// console.log(higherBmi);
