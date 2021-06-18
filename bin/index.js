#! /usr/bin/env node
 
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");
const axios = require('axios');
const fetchData = require('./vaccine/vaccine');
const { displayArrayOfObject, redirectToUrl } = require('./utils/index');
 
const init = () => {
    console.log(
        chalk.green(
            figlet.textSync("Covid 19", {
                font: "Ghost",
                horizontalLayout: "default",
                verticalLayout: "default"
            }),
            "\n Bienvenue sur le menu du COVID 19 CLI",
        )
    );
}
 
const menuQuestion = () => {
    const menuQuestion = [
        {
            type: 'list',
            name: "menu",
            message: "Que voulez-vous faire ? :",
            choices: ['Vaccine', 'Tracks covid-19', 'Make attestation'],
            default: "VACCINE"
        },
    ];
    return inquirer.prompt(menuQuestion);
};
 
const run = async () => {
    // show script introduction
    init();
    // ask questions
    const answers = await menuQuestion();
    const { menu } = answers;
    switch(menu) {
        case 'Vaccine':
            const data = await fetchData();
            const vaccine = await displayArrayOfObject(data);
            const { rdv } = vaccine;
            const newRdv = 'https://' + rdv.substring(rdv.indexOf('/')+2);
            redirectToUrl(newRdv);
            break;
        case 'Tracks covid-19':
            success('tracks covid-19');
            break;
        case 'Make attestation':
            success('make attestation');
            break;
        default: success('please, choose one in the above list');
    }  
 
    // do your thing
    // show success message
}
 
run();