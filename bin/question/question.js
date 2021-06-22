const inquirer = require("inquirer");

module.exports = {

    async menuQuestion () {
        const menuQuestion = [
            {
                type: 'list',
                name: "menu",
                message: "What do you want to do ? :",
                choices: ['Vaccine', 'Tracks covid-19', 'Make attestation'],
                default: "VACCINE"
            },
        ];
        return inquirer.prompt(menuQuestion);
    },
    
    basicQuestion (question) {
        const basicQuestion = [
            {
                name: "answer",
                type: "input",
                message: question
            },
        ];
        return inquirer.prompt(basicQuestion);
    }
}