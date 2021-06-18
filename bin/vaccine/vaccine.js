const { basicQuestion } = require("../question/question");
const axios = require('axios');

const vaccine = () => {
    return basicQuestion("What is your department ?");
}

const fetchData = async () => {
    const { answer } = await vaccine();
    const response = await axios.get(`https://vitemadose.gitlab.io/vitemadose/${answer}.json`)
    let url = [];
    response.data.centres_disponibles.forEach(element => {
        url.push({
            department: element.departement,
            url: element.url,
            name: element.nom
        })
    });
    console.log(url);
};

module.exports = fetchData;
