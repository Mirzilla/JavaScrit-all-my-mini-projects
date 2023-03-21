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

// const loadAndWait = async function () {
//   try {
//     let image = await createImageElement("img/image1.jpg");
//     console.log("First image download");
//     await wait(2);
//     image.style.display = "none";

//     image = await createImageElement("img/image2.jpg");
//     console.log("Second image download");
//     await wait(2);
//     image.style.display = "none";

//     image = await createImageElement("img/image3.jpg");
//     console.log("Third image download");
//     await wait(2);
//     image.style.display = "none";
//   } catch (e) {
//     console.log(e);
//   }
// };

const loadAllImages = async function (imagePathsArray) {
  try {
    const images = imagePathsArray.map(
      async (imagePath) => await createImageElement(imagePath)
    );
    console.log(images);

    const imageElements = await Promise.all(images);
    console.log(imageElements);
    imageElements.forEach((img) => img.classList.add("parallel"));
  } catch (e) {
    console.error(e);
  }
};

loadAllImages(["img/image1.jpg", "img/image2.jpg", "img/image3.jpg"]);
loadAndWait();
