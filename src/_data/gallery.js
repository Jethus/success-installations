const fs = require("fs");
const path = require("path");

module.exports = function () {
  // Adjust this path as needed:
  const galleryDir = path.join(__dirname, "../assets/images/gallery");

  // Read all files in galleryDir
  let files = fs.readdirSync(galleryDir);

  // Filter out non-image files or hidden files if needed:
  files = files.filter((file) => {
    // Basic check for .jpg/.jpeg/.png, etc.
    return file.match(/\.(jpe?g|png|gif|webp)$/i);
  });

  // Convert each filename to a relative path for your site
  // so Eleventy can copy them or refer to them.
  let filePaths = files.map((filename) => {
    return `/assets/images/gallery/${filename}`;
  });

  // Return the array of image paths
  return filePaths;
};
