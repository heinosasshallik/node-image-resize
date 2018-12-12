# node-image-resize
Resize images so they're smaller. They will be resized so the width is 1000px. The height-width ratio will stay the same.

### Prequisites

- You need ImageMagick and GraphicsMagick. `brew install imagemagick graphicsmagick` if on Mac. Note that the `gm` module doesn't throw an error if GraphicsMagick is not correctly installed. One way to tell it's not installed correctly is if the images are converting very very fast. Each one should take a bit of time.
- Run `npm install` to install the necessary packages.

### Usage

- Place your images into the "in" folder.
- Run the script with `node convert.js`
- If you want to automatically upload your images to your AWS S3 bucket, then you can use `upload.sh` script. Use at your own risk.
