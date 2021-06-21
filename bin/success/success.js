const chalk = require("chalk");

module.exports = {
    async vaccineSuccess (department) {
        if(department) {
            if(department > 1) {
                if(department < 96) {
                    console.log(
                        chalk.blue.bold(`   Done! Your department is ${department}   `)
                    );
                } else console.log(chalk.red.bold(`   Please, choose a number between 1 and 95`   ));
            } else console.log(chalk.red.bold(`   Please, choose a number between 1 and 95`   ));
        } else console.log(chalk.red.bold("   You haven't type your department   "));
    },

    async trackingSuccess(country) {
        if(country === 'France') {
            console.log(
                chalk.red('Wait until we load the data...')
            );
        } else console.log(chalk.red.bold("   Only France works currently   "))
    }
}