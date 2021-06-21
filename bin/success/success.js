const chalk = require("chalk");

const vaccineSuccess = async (department) => {
    if(department) {
        if(department > 1) {
            if(department < 96) {
                console.log(
                    chalk.white.bgGreen.bold(`   Done! Your department is ${department}   `)
                );
            } else console.log('Please, choose a number between 1 and 95');
        } else console.log('Please, choose a number between 1 and 95');
    } else console.log(chalk.red.bgGreen.bold("   You haven't type your department   "));
}

module.exports = vaccineSuccess;