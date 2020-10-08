
// function to print license
const printLicense = selectLicense => {
  // exit if none
if (selectLicense.length === 0) {
    return '';
  } else {
    return `
## Project licensing
${selectLicense.map(x => {
  return "\n * " + x;
})}
`}
};

// function to generate markdown for README
function readMe(data) {
// destructure and return
const { title, description, installation, usage, contributing, tests, license, username, email} = data;
return `
# ${title}
![](https://img.shields.io/badge/license-${license}-orange?style=for-the-badge&logo=appveyor)
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Support](#username)
## Description 
${description}
## Installation
To install necessary dependencies, run the following command(s):
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
Testing information:
${tests}
## License
${printLicense(license)}
## Live URL
https://${username}.github.io/${title}/
## Support
Github:
https://github.com/${username}/${title}
Email:
${email}
`;
}

//export function
module.exports = readMe;