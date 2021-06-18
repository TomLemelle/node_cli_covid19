const inquirer = require("inquirer");

module.exports = {
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