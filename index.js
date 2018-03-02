#!/usr/bin/env node --harmony

console.log('Magic clipboard is watching your folder!');

const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

let lastFile;

const watch = require('watch');
watch.watchTree('.', function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
        // Finished walking the tree
        //console.log('tree');
    } else if (prev === null) {
        // f is a new file
        if (lastFile != f && f.indexOf('png') > -1) {
            console.log(f + ' was added!');
            lastFile = f;
            client.textDetection(f)
                .then(results => {
                    const detections = results[0].textAnnotations;
                    console.log('Text:');
                    //detections.forEach(text => console.log(text));
                    if (detections[0]) {
                        console.log(detections[0].description);
                    }
                })
                .catch(err => {
                    console.error('ERROR:', err);
                });
        }
    } else if (curr.nlink === 0) {
        // f was removed
    } else {
        // f was changed
    }
});
