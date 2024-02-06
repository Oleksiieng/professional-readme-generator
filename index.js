const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
