const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { endianness } = require("os");

const teamArray = [];

// inquirer to gather information about the development team members
function promptUser() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Which team member would you like to add?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "No",
            ]
        },
    ])
        .then(function (answer) {
            switch (answer.role) {
                case "Manager":
                    promptManager();
                    break;
                case "Engineer":
                    promptEngineer();
                    break;
                case "Intern":
                    promptIntern();
                    break;
                case "No":
                    end();
                    break;
            }
        });
}
promptUser();

function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID?",
        },
        {
            type: "input",
            name: "manager",
            message: "What is your office number?",
        }
    ])
        .then(() => {
            promptUser();
        })
}
function promptEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID?",
        },
        {
            type: "input",
            name: "manager",
            message: "What is your GitHub Username?",
        }
    ])
        .then(() => {
            promptUser();
        })
}
function promptIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID?",
        },
        {
            type: "input",
            name: "manager",
            message: "Where did you go to school?",
        }
    ])
        .then(() => {
            promptUser();
        })
}
function end(){
    console.log("Team successfully created!");

    fs.writeFile(outputPath, render(teamArray), (err) => {
    })
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.