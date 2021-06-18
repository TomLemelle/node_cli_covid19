const success = (department) => {
    if(department) {
        console.log(
            chalk.white.bgGreen.bold(`   Done! Your department is ${department}   `)
        );
    } else {
        console.log(chalk.red.bgGreen.bold("   You haven't type your department   "));
    }
}

module.exports = success;