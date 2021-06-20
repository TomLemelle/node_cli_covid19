const { basicQuestion } = require("../question/question");
const axios = require('axios');

const vaccine = () => {
    return basicQuestion("What is your department ?");
}

const fetchData = async () => {
    const { answer } = await vaccine();
    if(+answer > 1) {
        if(+answer < 95) {
            const response = await axios.get(`https://vitemadose.gitlab.io/vitemadose/${answer}.json`)
            let data = [];
            response.data.centres_disponibles.forEach(element => {
                data.push({
                    department: element.departement,
                    name: element.nom,
                    url: element.url,
                });
            });
            return data;
        } else console.log('Please, choose a number between 1 and 95');
    } else console.log('Please, choose a number between 1 and 95');
        
};

module.exports = fetchData;
