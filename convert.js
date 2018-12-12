const gm = require('gm');
const ReadableStreamClone = require('readable-stream-clone');
const fs = require('fs');

readFiles().then(function(filenames) {
    resizeImages(filenames);
})

function readFiles() {
    const filenames = [];
    return new Promise((resolve, reject) => {
        fs.readdir('./in', (err, files) => {
            files.forEach(filename => {
                filenames.push(filename);
            });
            resolve(filenames);
        });
    });
}

async function resizeImages(filenames) {
    for (let filename of filenames) {
        console.log(`resizing image: ${filename}`);
        const filestream = fs.createReadStream(`./in/${filename}`);
        await resizeImage(filestream, 1000, filename);
    }
}

// Maintains aspect ratio
function resizeImage(
    filestream,
    imageWidth,
    filename
) { 
    return new Promise((resolve, reject) => {
    const stream = new ReadableStreamClone(filestream);

    gm.subClass({ imageMagick: true })(stream)
        .background('white')
        .flatten()
        .fuzz('1%')
        .resize(imageWidth)
        .autoOrient()
        .quality(80)
        .setFormat('jpg')
        .stream((err, stdout) => {
            if (!err) {
                const writeStream = fs.createWriteStream(`./out/${filename}`);
                stdout.pipe(writeStream);
                stdout.on('end', function() { resolve(); })
            } else {
                console.log(err);
            }
        });
    });
}
