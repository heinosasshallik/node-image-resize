# node-image-resize
Resize images so they're smaller

### Prequisites

- You need ImageMagick and GraphicsMagick. `brew install imagemagick graphicsmagick` if on Mac.
- Run `npm install` to install the necessary packages.

### Usage

- Place your images into the "in" folder.
- Run the script with `node convert.js`
- If you want to automatically upload your images to your AWS S3 bucket, then you can use `upload.sh` script. Use at your own risk.
