const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const imageContainer = document.querySelector(".images");

let currentImage;
const createImageElement = function (imagePath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    imgEl.src = imagePath;

    imgEl.addEventListener("load", function () {
      imageContainer.append(imgEl);
      resolve(imgEl);
    });

    imgEl.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

createImageElement("img/image1.jpg")
  .then((image) => {
    currentImage = image;
    console.log("First image download");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImageElement("img/image2.jpg");
  })
  .then((image) => {
    currentImage = image;
    console.log("Second image download");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImageElement("img/image3.jpg");
  })
  .then((image) => {
    currentImage = image;
    console.log("Third image download");
    return wait(2);
  })
  .catch((e) => console.error(e));
