const fs = require("fs")
const inquirer = require("inquirer")

// array of questions for user
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter your project description",
            name: "description",
        },
        {
            type: "input",
            message: "Enter installation instructions",
            name: "installation",
        },
        {
            type: "input",
            message: "Enter Usage instructions",
            name: "usage",
        },
        {
            type: "input",
            message: "Please enter link to deployed webpage",
            name: "live"
        },
        {
            type: "input",
            message: "Please enter link to repository",
            name: "repository"
        },
        {
            type: "input",
            message: "Who do you want to give credit to",
            name: "credits",
        },
        {
            type: "list",
            message: "Choose a license",
            name: "license",
            choices: ["MIT", "Apacho", "GNU"]
        }
    ])

    .then((data) => {
        switch (data.license) {
            case "MIT": {
              licenseImage =
                "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
              // console.log(licenseImage);
              break;
            }
            case "Apache 2.0": {
              licenseImage =
                "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
              // console.log(licenseImage);
              break;
            }
            case "GNU GPLv3": {
              licenseImage =
                "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
              // console.log(licenseImage);
              break;
            }
            default:
              break;
          }



        fs.writeFile("README.md",
        "# " + `${data.title}\n\n` +
        licenseImage + 
        "## Description\n" +
        `${data.description}\n\n` +
        "## Table of Contents\n" +
        "* [Installation](#installation)\n" +
        "* [Usage](#usage)\n" +
        "* [Links](#links)\n" +
        "* [Credits](#credits)\n" +
        "* [License](#license)\n\n" +
    
        "## Installation\n" +
        `${data.installation}\n\n` +
        "## Usage\n" +
        `${data.usage}\n\n` +
        "## Links\n" +
        `* [Live Webpage](${data.live})\n` +
         `* [Repository](${data.repository})\n\n` +
        "## Credits\n" +
        `${data.credits}\n\n` +
        "## License\n" +
        `Licensed by ${data.license}`
    , 
    (err) => err ? console.log(err) : console.log("README successfully generated"))


    })

    


