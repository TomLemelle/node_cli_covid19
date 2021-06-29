const open = require("open");

module.exports = {
    async attestation(url) {
        await open(url)
    },
}

