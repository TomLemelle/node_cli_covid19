const inquirer = require("inquirer");
const open = require("open");

module.exports = {

    displayArrayOfObject(item) {
        let data = [];
        item.forEach(el => {
            data.push(
                el.name + ' | ' + el.department + ' | ' + el.url
            );
        });
    
        const vaccineRendezVous = [
            {
                type: 'list',
                name: "rdv",
                message: "Take a rendez-vous in the list below:",
                choices: data,
            },
        ];
        return inquirer.prompt(vaccineRendezVous);
    },

    redirectToUrl(url) {
        return open(url);
    }

}