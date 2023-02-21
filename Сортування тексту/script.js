const string = "Люблю алгоритми";
const collator = new Intl.Collator("ru");

function sortAndReverse(string) {
    return string
        .split("")
        .sort((a, b) => collator.compare(a, b))
        .reverse()
        .join("");
}

const animals = [
    " Акула",
    " Слон",
    " Пес",
    " Кіт",
    " Корова",
    " Кінь",
    " Пташка",
];

const sorted = animals.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
});
console.log(sortAndReverse(string));
console.log(sorted.toString());
