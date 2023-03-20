// const lotteryPromise = new Promise(function (res, rej) {
//   console.log("Lottery has started");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       res("You won!");
//     } else {
//       rej(new Error("You loose"));
//     }
//   }, 3000);
// });
// lotteryPromise.then((res) => console.log(res)).catch((e) => console.log(e));

// const wait = function (sec) {
//   return new Promise(function (res) {
//     setTimeout(res, sec * 1000);
//   });
// };

// wait(3).then(() => {
//   console.log("3 Seconds");
//   return wait(10).then(() => {
//     console.log("10 seconds");
//   });
// });

const getUserPoition = function () {
  return new Promise(function (res, rej) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        res(position);
      },
      (e) => rej(e)
    );
  });
};
console.log(getUserPoition);
