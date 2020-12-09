const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let totalEmployees = []
let employeeIDs = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const ManagerQ = [
    // name prompt
    {
        type: "input",
        message: "What is the manager's name on this team?",
        name: "name",
    },
    // email prompt
    {
        type: 'input',
        message: "What is your manager's email address?",
        name: 'email',
    }
    // ID prompt
    {
        type: "input",
        message: "What is your manager's ID number?",
        name: "ID"
      },
      // phone number prompt
      {
        type: "number",
        message: "What is your manager's office phone number?",
        name: "officeNumber"
      },
      // second part of questions to add interns and engineers
      {
        type: "list",
        message: "What kind of team member would you like to add now?",
        choices: ["Engineer", "Intern", "No more, i've had enough!"],
        name: "interngineer"
      }
]

const begin = () => {
    inquirer.prompt(ManagerQ).then((response)=> {
        // debug check
        console.log(response)

        const addManager = new Manager(response.name, response.ID, response.email, response.officeNumber)

        totalEmployees.push(addManager)
        employeeIDs.push(response.ID)

        switch (response.interngineer){
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;
            default:
                fs.writeFile(outputPath, render(totalEmployees), function (err) {
                    if (err) {
                        throw err;
                    }
                });
                // debug check
                console.log("success! rendered to file!")
                break;


        }
    })
}

const addEngineer = () => {

    inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's ID number? ",
            name: "ID"
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email"
        }
        {
            type: "input",
            message: "What is the engineer's Github user name?",
            name: "github"
        }
    ]).then((response) => {

        // make new engineer
        const addEngineer = new Engineer(response.name, response.ID, response.email, response.github)

        // add it to employees
        totalEmployees.push(addEngineer)
        employeeIDs.push(response.ID)

        promptLoop()
    })

}

const promptLoop() => {

    inquirer.prompt
}

begin()
