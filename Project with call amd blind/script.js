const survey = {
    question: "What programing language would you like to learn?",
    options: ["0: JavaScript", "1: Python", "2: Ruby", "3: Java", "4: C#"],
    answers: new Array(5).fill(0),
    logNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n ${this.options.join(
                    "\n"
                )}\n(Enter option number)`
            )
        );
        if (
            typeof answer === "number" &&
            answer >= 0 &&
            answer < this.answers.length
        ) {
            this.answers[answer]++;
        }
        this.printResults();
    },
    printResults(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`Survey results: ${this.answers.join(", ")}`);
        }
    },
};
document
    .querySelector("#b")
    .addEventListener("click", survey.logNewAnswer.bind(survey));

survey.printResults.call({ answers: [7, 1, 4] });
