#! /usr/bin/env node
 
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");
const { menuQuestion } = require('./question/question');
const fetchData = require('./vaccine/vaccine');
<<<<<<< HEAD
const tracking = require('./tracks/tracking');
=======
const { attestation } = require("./attestation/attestation");
>>>>>>> feature--attestation
const { displayArrayOfObject, redirectToUrl } = require('./utils/index');
 
const init = () => {
    console.log(
        chalk.green(
            figlet.textSync("Covid 19", {
                font: "Ghost",
                horizontalLayout: "default",
                verticalLayout: "default"
            }),
            "\n Welcome to Covid-19 cli menu",
        )
    );
}
 
const run = async () => {
    // show script introduction
    init();
    // ask questions
    const answer = await menuQuestion();
    const { menu } = answer;
    switch(menu) {
        case 'Vaccine':
            const data = await fetchData();
            const vaccine = await displayArrayOfObject(data);
            const { rdv } = vaccine;
            const newRdv = 'https://' + rdv.substring(rdv.indexOf('/')+2);
            redirectToUrl(newRdv);
            break;
        case 'Tracks covid-19':
            await tracking();
            break;
        case 'Make attestation':
            //success('make attestation');
            break;
        default: //success('please, choose one in the above list');
    }  
 
    // do your thing
    // show success message
}
 
run();