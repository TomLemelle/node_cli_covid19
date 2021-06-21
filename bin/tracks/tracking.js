const axios = require('axios');
const chalk = require('chalk');
const { basicQuestion } = require("../question/question");
const { trackingSuccess } = require('../success/success');

const country = () => {
    return basicQuestion("Type a country correctly");
}

const tracking = async () => {
        const { answer } = await country();
        await trackingSuccess(answer);
        const response = await axios.post(`https://api.apify.com/v2/acts/drobnikj~covid-stats-${answer}/run-sync-get-dataset-items?token=A5z9yaew4CqWorj8jBhe7uLne`)
        console.log(
            chalk.blue(`Stats from ${response.data[0].sourceUrl}`) +"\n",
            chalk.green(`Stats of ${answer}`) + "\n",
            chalk.white("Infected: ") + chalk.yellow(response.data[0].infected) + "\n",
            chalk.white("Recovered: ") + chalk.yellow(response.data[0].recoverd) + "\n",
            chalk.white("Hospitalized: ") + chalk.yellow(response.data[0].hospitalized) + "\n",
            chalk.white("Hospital deceased: ") + chalk.yellow(response.data[0].hospitalDeceased) + "\n",
            chalk.white("Newly Hospitalized: ") + chalk.yellow(response.data[0].newlyHospitalized) + "\n",
            chalk.white("Intensive care: ") + chalk.yellow(response.data[0].intensiveCare) + "\n",
            chalk.white("Newly Intensive care: ") + chalk.yellow(response.data[0].newlyIntensiveCare) + "\n",
        );
};

module.exports = tracking;
