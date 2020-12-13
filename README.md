# TeamTemplateEngine
 Command line app that creates a team roster based on user input


Pirooz Wallace
12/12/2020

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

GitHub Repo: [Template Repo](https://github.com/attack-theoRy/TeamTemplateEngine)

Portfolio: [Portfolio](https://attack-theory.github.io/Portfolio/)

Walkthrough Video : [Walkthrough Video]()



## Table of Contents
* [API's + Tech](#tech)
* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [Questions](#questions)

## Tech
* Node.js
* Inquirer Package
* Jest
* BootStrap CSS
* Class Inheritance

## Description

This app uses Node.js and the command line / terminal to create a team roster based on user input. The app asks a series of questions about the manager and then allows you to add as many interns and/or engineers as you want. Each team member has their own set of unique questions as seen in the screenshot below:   

![Questions](/Assets/questions.PNG)

There is some error checking in the questions, for example the email has to be in the proper format and you cannot have any duplicate IDs. After you are done adding team members, you can specify that you are done in the prompts and it will generate a team roster for you using the custom template I created like below:

![TeamRoster](/Assets/roster.PNG)




## Installation

To use properly you need to install Node.js and in the terminal you have to use the command 
``` npm init ```
and then also
``` npm install inquirer ```  to initialize and then install the correct dependencies, in this
case, inquirer.

``` npm install jest ``` to install jest if you would like to run the tests to ensure the constructors and functions work properly

Type ``` npm run test ``` in the test directory to run the tests like the screenshot below 

![Tests](/Assets/tests.PNG)

And then finally to start the application you type ``` node app.js ``` in the terminal.

## License

MIT License

Copyright (c) [2020] [Pirooz Wallace]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions
For questions please contact: Pirooz Wallace

at : PiroozWallace@outlook.com

Github Profile: https://github.com/attack-theoRy



