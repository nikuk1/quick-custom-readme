//global declarations
// import inquirer
const inquirer = require('inquirer');
// import readMe function from generateMarkdown js file - format data/readMe
const readMe = require('./utils/generateMarkdown.js');

// array containing questions
const questions = [
{
// title
type: 'input',
name: 'title',
message: 'What is the name of this project?',
validate: nameInput => validateInput(nameInput)
},
{
// description
type: 'input',
name: 'description',
message: 'What is a quick description for said project?',
validate: nameInput => validateInput(nameInput)
},
{
//installation
type: 'input',
name: 'installation',
message: 'Are there any required installs?',
validate: nameInput => validateInput(nameInput)
},
{
// usage
type: 'input',
name: 'usage',
message: 'What are the instructions for using this app?',
validate: nameInput => validateInput(nameInput)
},
{
// contribute
type: 'input',
name: 'contributing',
message: 'How can I contribute?',
validate: nameInput => validateInput(nameInput)
},
{
// test
type: 'input',
name: 'tests',
message: 'How can I test this project?',
validate: nameInput => validateInput(nameInput)
},
{
// license
type: 'checkbox',
name: 'license',
message: 'What License does your project have? (Select all that apply)',
// GNU is a GENERAL PUBLIC LICENSE
choices: ['Apache', 'GNU', 'ISC', 'Native', 'MIT']      
},
{
// username
type: 'input',
name: 'username',
message: 'What is your Github username?',
validate: nameInput => validateInput(nameInput)
},
{
// email
type: 'input',
name: 'email',
message: 'What is your email address?',
validate: nameInput => validateInput(nameInput)
}
];

// function to validate user answer
const validateInput = userInput => {
    if (userInput) {
        return true;
    } else {
        console.log("Please try again");
        return false;
    }
};

// enable fs package
const fs = require('fs');
// function to write README file
const writeToFile = fileContent => {
    //place file in dist folder
    fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) throw err;
        console.log('README.md complete! See README.md in your dist folder. For more tips/tricks: https://guides.github.com/features/wikis/');
    });
};

// function to initialize program
function init(questions) {
    // use inquirer to list questions
    return inquirer.prompt(questions);
}

// function call to initialize program
init(questions)
// pass object containing user input to README function 
.then(userAnswers => {
    return readMe(userAnswers);
})
// pass string template literal from readMe output
.then(sameData => {
    // add to dist folder
    return writeToFile(sameData);
})
.catch(err => {
    console.log(err);
});

// finito