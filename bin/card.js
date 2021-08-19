#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  nameData: chalk.cyan('negebauer'),
  workData: chalk.white('Software Engineer at Facebook'),
  webData: chalk.cyanBright('https://negebauer.com'),
  cvData: chalk.white('https://negebauer.com/cv/') + chalk.red('cv.pdf'),
  githubData: chalk.white('https://github.com/') + chalk.green('negebauer'),
  twitterData: chalk.white('https://twitter.com/') + chalk.yellow('negebauer'),
  linkedinData:
    chalk.white('https://linkedin.com/in/') + chalk.blue('negebauer'),
  npmData: chalk.white('https://npmjs.com/') + chalk.magenta('~negebauer'),
  cardData: chalk.greenBright('npx negebauer'),

  nameLabel: chalk.white('        Nicolas Gebauer ') + chalk.green('/'),

  workLabel: chalk.white.bold('      Work:'),
  webLabel: chalk.white.bold('       Web:'),
  cvLabel: chalk.white.bold('        cv:'),
  githubLabel: chalk.white.bold('    GitHub:'),
  twitterLabel: chalk.white.bold('   Twitter:'),
  linkedinLabel: chalk.white.bold('  Linkedin:'),
  npmLabel: chalk.white.bold('       npm:'),
  cardLabel: chalk.white.bold('      Card:'),
}

function build(dataKey) {
  return `${data[`${dataKey}Label`]} ${data[`${dataKey}Data`]}`
}

// Put all our output together into a single variable so we can use boxen effectively
const output = [
  build('name'),
  '',
  build('work'),
  '',
  // build('web'),
  // build('cv'),
  build('github'),
  build('twitter'),
  build('linkedin'),
  build('npm'),
  '',
  `${build('card')}`,
].join('\n')

// eslint-disable-next-line no-console
console.log(chalk.green(boxen(output, options)))
