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
        // changes questions based on which choice was chosen
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
        // pushes manager answers to array
        .then((answers) => {
            const newMan = new Manager(answers.name, answers.id, answers.email, answers.manager);
            teamArray.push(newMan);
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
            name: "engineer",
            message: "What is your GitHub Username?",
        }
    ])
        // pushes engineer answers to array
        .then((answers) => {
            const newEng = new Engineer(answers.name, answers.id, answers.email, answers.engineer);
            teamArray.push(newEng);
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
            name: "intern",
            message: "Where did you go to school?",
        }
    ])
        // pushes intern answers to array
        .then((answers) => {
            const newInt = new Intern(answers.name, answers.id, answers.email, answers.intern);
            teamArray.push(newInt);
            promptUser();
        })
}
function end() {
    console.log("Team successfully created!");

    fs.writeFile(outputPath, render(teamArray), (err) => {
    })
};