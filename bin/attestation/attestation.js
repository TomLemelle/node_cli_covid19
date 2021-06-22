const puppeteer = require('puppeteer');

module.exports = {
    attestation() {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            
            await page.goto('https://example.com/');
        
            await page.pdf({
                path: 'example.pdf',
            });
        
            await browser.close();
        })
    }
    
}

