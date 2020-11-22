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
            message: "Who do you want to give credit to",
            name: "credits",
        },
        {
            type: "input",
            message: "Any licenses?",
            name: "license",
        }
    ])

    .then((data) => {
        fs.writeFile("README.md",
        "# " + `${data.title}\n\n` +
        "## Description\n" +
        `${data.description}\n\n` +
        "## Table of Contents\n" +
        "* [Installation](#installation)\n" +
        "* [Usage](#usage)\n" +
        "* [Credits](#credits)\n" +
        "* [License](#license)\n\n" +
    
        "## Installation\n" +
        `${data.installation}\n\n` +
        "## Usage\n" +
        `${data.usage}\n\n` +
        "## Credits\n" +
        `${data.credits}\n\n` +
        "## License\n" +
        `${data.license}`
    , 
    (err) => err ? console.log(err) : console.log("README successfully generated"))


    })

    


