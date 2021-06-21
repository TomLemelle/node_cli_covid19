const axios = require('axios');

const tracking = async () => {
        const response = await axios.get(`https://api.apify.com/v2/acts/drobnikj~covid-stats-france/run-sync-get-dataset-items?token=A5z9yaew4CqWorj8jBhe7uLne`)
        console.log(
            chalk.white.bgGreen.bold(`   Done! Your department is ${department}   `)
        );
};

module.exports = tracking;
