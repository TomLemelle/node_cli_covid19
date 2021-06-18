#! /usr/bin/env node
 
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");
const axios = require('axios');
 
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
 
const basicQuestion = (question) => {
    const basicQuestion = [
        {
            name: "answer",
            type: "input",
            message: question
        },
    ];
    return inquirer.prompt(basicQuestion);
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
 
const vaccine = () => {
    return basicQuestion("What is your department ?");
}
 
const success = (department) => {
    if(department) {
        console.log(
            chalk.white.bgGreen.bold(`   Done! Your department is ${department}   `)
        );
    } else {
        console.log(chalk.red.bgGreen.bold("   You haven't type your department   "));
    }
}
 
const fetchData = (department) => {
    axios.get(`https://vitemadose.gitlab.io/vitemadose/${department}.json`)
        .then(res => console.log(res.data))
        .catch(() => console.warn('Wrong department'));
};
 
const run = async () => {
    // show script introduction
    init();
    // ask questions
    const answers = await menuQuestion();
    const { menu } = answers;
    switch(menu) {
        case 'Vaccine':
            const department = await vaccine();
            const fetch = fetchData(department.answer);
            console.log(fetch);
            success(department.answer);
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