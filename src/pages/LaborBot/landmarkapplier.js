import { chromium } from 'playwright';

// Helper function for random delays
const randomDelay = async (min, max) => {
    const delay = Math.floor(Math.random() * (max - min + 1) + min);
    await new Promise(resolve => setTimeout(resolve, delay));
};

// Helper function for natural scrolling
async function naturalScroll(page) {
    await page.evaluate(async () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        let currentPosition = 0;

        while (currentPosition < scrollHeight) {
            const scrollAmount = Math.floor(Math.random() * (120 - 60 + 1) + 60);
            currentPosition += scrollAmount;
            window.scrollTo({
                top: currentPosition,
                behavior: 'smooth'
            });
            await new Promise(r => setTimeout(r, Math.random() * (800 - 400) + 400));
        }
    });
}

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

async function applyForJob() {
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
            '--disable-site-isolation-trials',
            '--disable-features=BlockInsecurePrivateNetworkRequests',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '--disable-site-isolation-trials'
        ]
    });

    // Create context with stealth settings
    const context = await browser.newContext({
        userAgent,
        viewport: { width: viewportWidth, height: viewportHeight },
        screen: { width: viewportWidth, height: viewportHeight },
        deviceScaleFactor: Math.random() * (2 - 1) + 1,
        hasTouch: Math.random() > 0.5,
        isMobile: false,
        locale: 'en-US',
        timezoneId: 'Asia/Dubai',
        permissions: ['geolocation'],
        geolocation: { longitude: 55.2708, latitude: 25.2048 }, // Dubai coordinates
        colorScheme: 'light',
        acceptDownloads: true,
        bypassCSP: true,
        javaScriptEnabled: true,
        hasPermissions: ['notifications'],
    });

    // Modify WebGL fingerprint
    await context.addInitScript(() => {
        const getParameter = WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter = function(parameter) {
            if (parameter === 37445) {
                return 'Intel Open Source Technology Center';
            }
            if (parameter === 37446) {
                return 'Mesa DRI Intel(R) HD Graphics (WHL GT2)';
            }
            return getParameter.apply(this, arguments);
        };
    });

    // Add script to remove navigator.webdriver
    await context.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined
        });

        // Modify navigator properties
        const oldProto = navigator.__proto__;
        delete navigator.__proto__;
        navigator.__proto__ = oldProto;
    });

    const page = await context.newPage();

    // Add additional headers
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'DNT': '1'
    });

    try {
        // Navigate to application page with random timing
        await page.goto('https://efhi.fa.em3.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/requisitions/preview/100294/apply/email?location=United+Arab+Emirates&locationId=300000000228480&locationLevel=country&mode=location');
        await randomDelay(2000, 4000);
        await naturalScroll(page);

        // Initial email submission with natural behavior
        await randomMouseMovements(page);
        await page.getByRole('textbox', { name: 'Email Address' }).fill('testaccount@gmail.com', { delay: 100 });
        await randomDelay(1000, 2000);
        await page.locator('#legal-disclaimer-checkbox-label span').first().click();
        await randomDelay(500, 1500);
        await page.getByRole('button', { name: 'Close' }).click();
        await randomDelay(1000, 2000);
        await page.getByRole('button', { name: 'Next' }).click();
        await randomDelay(2000, 3000);

        // Personal Information with natural delays
        await randomMouseMovements(page);
        await page.getByRole('combobox', { name: 'Title' }).click();
        await randomDelay(500, 1000);
        await page.getByRole('row', { name: 'Mr.' }).locator('div').nth(3).click();
        await randomDelay(1000, 2000);

        // Name fields with typing simulation
        await page.getByRole('textbox', { name: 'First Name (As per Passport) *' }).fill('test', { delay: 150 });
        await randomDelay(800, 1500);
        await page.getByRole('textbox', { name: 'Middle Name (As per Passport)' }).fill('agfdag', { delay: 120 });
        await randomDelay(800, 1500);
        await page.getByRole('textbox', { name: 'Last Name (As per Passport) *' }).fill('account', { delay: 130 });
        await randomDelay(1000, 2000);

        // Natural scrolling between sections
        await naturalScroll(page);
        await randomDelay(1000, 2000);

        // Contact and personal details with natural interaction
        await randomMouseMovements(page);
        await page.getByRole('textbox', { name: 'Phone Number' }).fill('5577879746', { delay: 100 });
        await randomDelay(1000, 2000);
        await page.getByRole('combobox', { name: 'Gender' }).click();
        await randomDelay(500, 1000);
        await page.getByRole('row', { name: 'Male', exact: true }).locator('div').nth(3).click();
        await randomDelay(1000, 2000);

        // Date of Birth with natural delays
        await page.getByRole('combobox', { name: 'Month' }).click();
        await randomDelay(500, 1000);
        await page.getByLabel('Date of Birth Month').locator('a').first().click();
        await randomDelay(500, 1000);
        await page.getByRole('gridcell', { name: 'January' }).locator('div').first().click();
        await randomDelay(800, 1500);
        await page.getByLabel('Date of Birth Day').locator('a').first().click();
        await randomDelay(500, 1000);
        await page.getByRole('gridcell', { name: '8', exact: true }).locator('div').nth(2).click();
        await randomDelay(800, 1500);
        await page.getByRole('textbox', { name: 'Date of Birth Year' }).fill('1990', { delay: 100 });
        await randomDelay(1000, 2000);

        // Citizenship with natural behavior
        await randomMouseMovements(page);
        await page.getByRole('combobox', { name: 'Citizenship' }).fill('egy', { delay: 150 });
        await randomDelay(1000, 2000);
        await page.getByRole('gridcell', { name: 'Egyptian' }).locator('div').nth(2).click();
        await randomDelay(1500, 2500);

        // Resume upload with natural timing
        await naturalScroll(page);
        await randomDelay(1000, 2000);
        await page.getByText('Upload Resume').click();
        await randomDelay(1000, 2000);
        await page.getByRole('textbox', { name: 'Upload Resume' }).setInputFiles('MOHRE Arabic proposal final.pdf');
        await randomDelay(2000, 4000);

        // Final submission steps with natural behavior
        await randomMouseMovements(page);
        await page.getByRole('textbox', { name: 'Full Name *' }).fill('testq account', { delay: 120 });
        await randomDelay(1500, 2500);
        await page.getByRole('button', { name: 'Submit' }).click();
        await randomDelay(2000, 3000);

        // Verification code page
        await page.getByRole('spinbutton', { name: 'Verification code digit 1.' }).click();

        // Final wait with natural scrolling
        await naturalScroll(page);
        await randomDelay(8000, 12000);

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close browser
        await browser.close();
    }
}

// Run the script with error handling
applyForJob().catch(console.error);