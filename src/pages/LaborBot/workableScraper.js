import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function scrapeWorkableForListings() {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36");

        await page.goto('https://jobs.workable.com/search?location=united+arab+emirates&day_range=1', {
            waitUntil: 'networkidle0'
        });

        // Handle cookie consent
        try {
            await page.waitForSelector('button[data-ui="cookie-consent-accept"]', { timeout: 5000 });
            await page.click('button[data-ui="cookie-consent-accept"]');
            console.log('Accepted cookies');
        } catch (error) {
            console.log('Cookie consent button not found or already accepted');
        }

        // Click load more until no more results
        let loadMoreExists = true;
        while (loadMoreExists) {
            const loadMoreButton = await page.$("[data-ui='load-more-button']");
            if (loadMoreButton) {
                try {
                    await loadMoreButton.click();
                    await page.waitForNetworkIdle({ idle: 1000, timeout: 5000 });
                } catch (error) {
                    console.log("No more jobs to load");
                    loadMoreExists = false;
                }
            } else {
                loadMoreExists = false;
            }
        }

        // Extract all job links
        const jobLinks = await page.evaluate(() => {
            const listings = document.querySelectorAll("[data-ui='job-item']");
            return Array.from(listings).map(job => {
                const link = job.querySelector("h2 a");
                return `https://jobs.workable.com${link.getAttribute("href")}`;
            });
        });

        console.log(`Found ${jobLinks.length} job links`);

        // Save links to file
        await fs.writeFile('workable_job_links.txt', jobLinks.join('\n'));
        console.log('Successfully saved job links to workable_job_links.txt');

        await browser.close();

    } catch (error) {
        console.error('Error occurred:', error);
        throw error;
    }
}

// Run the scraper
scrapeWorkableForListings()
    .then(() => console.log("Scraping completed"))
    .catch(error => console.error("Scraping failed:", error));