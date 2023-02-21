const greet = (gretingText) => (name) => console.log(`${gretingText} ${name}`);

const hi = greet("Zdorow");
hi("Miroslav");

const callBack = function (func, name) {
    console.log(`Hi its me ${func}`);
};

const d = function (arr) {
    arr = [1, 2, 3];
};

callBack(d);
