import { chromium } from 'playwright';

// Helper function for random delays
const randomDelay = async (min, max) => {
    const delay = Math.floor(Math.random() * (max - min + 1) + min);
    await new Promise(resolve => setTimeout(resolve, delay));
};

// Helper function for random mouse movements
async function randomMouseMovements(page) {
    const viewportSize = await page.viewportSize();
    for (let i = 0; i < 3; i++) {
        await page.mouse.move(
            Math.random() * viewportSize.width,
            Math.random() * viewportSize.height,
            { steps: 25 }
        );
        await randomDelay(200, 500);
    }
}

async function applyChalhoubJob() {
    // Use specified viewport size and user agent
    const viewportWidth = 1280;
    const viewportHeight = 720;
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';

    // Launch browser with stealth configurations
    const browser = await chromium.launch({
        headless: false,
        channel: 'chromium',
        args: [
            `--window-size=${viewportWidth},${viewportHeight}`,
            '--disable-blink-features=AutomationControlled',
            '--disable-features=IsolateOrigins,site-per-process',
            '--disable-site-isolation-trials'
        ]
    });

    const context = await browser.newContext({
        userAgent,
        viewport: { width: viewportWidth, height: viewportHeight },
        screen: { width: viewportWidth, height: viewportHeight },
        deviceScaleFactor: 1,
        isMobile: false,
        locale: 'en-US',
        timezoneId: 'Asia/Dubai',
        permissions: ['geolocation'],
        geolocation: { longitude: 55.2708, latitude: 25.2048 },
        acceptDownloads: true
    });

    // Add script to remove navigator.webdriver
    await context.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined
        });
    });

    const page = await context.newPage();

    try {
        // Navigate to job page
        await page.goto('https://careers.chalhoubgroup.com/jobs/5566745-finance-trainee');
        await randomDelay(2000, 3000);

        // Handle cookie consent
        await page.getByRole('button', { name: 'Decline all non-necessary' }).click();
        await randomDelay(1000, 2000);

        // Click apply button and initial steps
        await page.getByRole('button', { name: 'Apply now 🎉' }).first().click();
        await randomDelay(2000, 3000);

        await page.getByText('None of the above').click();
        await randomDelay(1000, 2000);

        // Fill salary information
        await randomMouseMovements(page);
        await page.getByRole('textbox', { name: 'What is your current monthly' }).click();
        await randomDelay(500, 1000);
        await page.getByRole('textbox', { name: 'What is your current monthly' }).fill('9000', { delay: 100 });
        await randomDelay(1000, 2000);

        // Select gender and other options
        await page.getByText('Male', { exact: true }).click();
        await randomDelay(1000, 1500);
        await page.getByRole('button', { name: 'Select one or more options' }).click();
        await randomDelay(800, 1200);
        await page.getByRole('button', { name: 'No', exact: true }).click();
        await randomDelay(1000, 1500);

        // Additional form interactions
        await page.locator('#application_form').click();
        await randomDelay(800, 1200);
        await page.getByRole('button', { name: 'No', exact: true }).click();
        await randomDelay(1000, 1500);

        await page.getByTitle('Select one or more options').click();
        await randomDelay(800, 1200);
        await page.getByText('Prefer not to say', { exact: true }).click();
        await randomDelay(1000, 1500);

        // Education information
        await randomMouseMovements(page);
        await page.getByRole('textbox', { name: 'Type an answer…' }).click();
        await randomDelay(500, 800);
        await page.getByRole('textbox', { name: 'Type an answer…' }).fill('AMerican un', { delay: 120 });
        await randomDelay(1000, 1500);
        await page.getByText('American University in Cairo').click();
        await randomDelay(1000, 2000);

        // UAE specific questions
        await page.getByRole('group', { name: 'Are you a UAE National?*' }).locator('label').nth(1).click();
        await randomDelay(1000, 1500);
        await page.getByRole('group', { name: 'Do you hold a valid Emirati' }).getByLabel('No').check();
        await randomDelay(1000, 1500);

        // Education level and additional questions
        await page.getByText('Bachelor\'s Degree').click();
        await randomDelay(1000, 1500);
        await page.getByText('Yes', { exact: true }).nth(4).click();
        await randomDelay(1000, 2000);

        // Personal information
        await randomMouseMovements(page);
        await page.getByRole('textbox', { name: 'First name*' }).fill('testname', { delay: 100 });
        await randomDelay(800, 1200);
        await page.getByRole('textbox', { name: 'Last name*' }).fill('lawstname', { delay: 100 });
        await randomDelay(800, 1200);
        await page.getByRole('textbox', { name: 'Email*' }).fill('testname@gmail.com', { delay: 120 });
        await randomDelay(1000, 1500);

        // Phone number with natural typing
        await page.getByRole('textbox', { name: 'Phone number with country code' }).fill('+971557734396', { delay: 100 });
        await randomDelay(1000, 2000);

        // Upload CV
        await page.getByRole('textbox', { name: 'Upload CV*' }).setInputFiles('kareemresume (10) (2).pdf');
        await randomDelay(2000, 3000);

        // Final steps
        await page.getByRole('checkbox', { name: 'I have read the Privacy' }).check();
        await randomDelay(1500, 2500);

        await randomMouseMovements(page);
        await page.getByRole('button', { name: 'Submit application' }).click();

        // Final wait
        await randomDelay(5000, 8000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close browser
        await browser.close();
    }
}

// Run the script with error handling
applyChalhoubJob().catch(console.error);