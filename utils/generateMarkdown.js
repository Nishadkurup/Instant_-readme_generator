// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ' '
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    ''
  } else {
    return `- [${license} License](#license)`

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    ''
  } else {
    return `#### License ####
    The ${license} license is used for this project.`

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}

  ### Table of Contents 
  * [Descritption](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.License)} 

  ## Description
  ${data.Description}
  ## Installation
  ${data.Installation}
  
  [Back to Top](#table-of-contents)

  ## Usage
  In order to use this app, ${data.Usage}

  [Back to Top](#table-of-contents)
  
  ## Contribution
  ${data.Contributing}

  [Back to Top](#table-of-contents)

  ## Tests
  ${data.Tests}
  
  ${renderLicenseSection(data.License)}
  [Back to Top](#table-of-contents)
    

  ## Questions 
 If you have any questions about this application my GitHub username is
 ${data.Username}  and you can view my GitHub profile at https://github.com/Nishadkurup
   
 For any additional questions, feel free to reach out to me at  ${data.Questions}
`;

}

module.exports = generateMarkdown;

