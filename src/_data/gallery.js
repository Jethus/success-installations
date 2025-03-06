const fs = require("fs");
const path = require("path");

module.exports = function () {
  const smallDir = path.join(__dirname, "../assets/images/gallery/small");

  const smallFiles = fs
    .readdirSync(smallDir)
    .filter((file) => file.match(/\.(jpe?g|png|gif|webp)$/i));

  const galleryItems = smallFiles.map((filename) => {
    const largeFilename = filename.replace("sm", "lg");
    return {
      small: `/assets/images/gallery/small/${filename}`,
      large: `/assets/images/gallery/large/${largeFilename}`,
    };
  });

  // Return the array of image paths
  return galleryItems;
};
