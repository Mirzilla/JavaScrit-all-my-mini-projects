const birtYears = [1974, 1994, 2000, 2003];
const ages = [];

for (let i = 0; i < birtYears.length; i++) {
    ages[i] = 2022 - birtYears[i];
}
console.log(ages);
