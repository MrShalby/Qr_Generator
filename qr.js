import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';


inquirer
    .prompt([
        {
            message : "type yr url :",
            name: "url",

        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.url;

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });