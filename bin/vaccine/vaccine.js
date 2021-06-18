const { basicQuestion } = require("../question/question");
const axios = require('axios');

const vaccine = () => {
    return basicQuestion("What is your department ?");
}

const fetchData = async () => {
    const { answer } = await vaccine();
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
};

module.exports = fetchData;
