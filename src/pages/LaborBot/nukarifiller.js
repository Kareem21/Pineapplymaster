import puppeteer from 'puppeteer-extra';
(async () => {
    // Launch the browser
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto('https://www.naukrigulf.com/sr-java-developer-jobs-in-abu-dhabi-uae-in-synechron-technologies-pvt-ltd-8-to-10-years-p-cd-38843-jid-210724000009');

    // Click the "Apply" button to open the form
    await page.waitForXPath('//button[contains(text(), "Apply")]');
    const [applyButton] = await page.$x('//button[contains(text(), "Apply")]');
    await applyButton.click();

    // Wait for the form to be visible
    await page.waitForXPath('//form[contains(@class, "application-form-class")]'); // Update with the actual form class or a robust XPath

    // Fill out the form fields
    await page.waitForSelector('input[name="fullname"]');
    await page.type('input[name="fullname"]', 'John Doe');
    await page.type('input[name="email"]', 'john.doe@example.com');
    await page.select('select[name="gender"]', 'Male');
    await page.type('input[name="nationality"]', 'Indian');
    await page.type('input[name="current_location"]', 'Dubai');
    await page.type('input[name="experience_years"]', '10');
    await page.type('input[name="experience_months"]', '0');
    await page.type('input[name="monthly_salary"]', '5000');
    await page.type('input[name="designation"]', 'Senior Java Developer');
    await page.type('input[name="keyskills"]', 'Java, Spring, REST, AWS');

    // Upload the CV
    const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        page.click('input[type="file"]') // Update the selector with the actual file input
    ]);
    await fileChooser.accept(['/path/to/your/cv.pdf']); // Update the path to your CV

    // Agree to the terms and conditions
    await page.waitForSelector('input[name="terms"]');
    await page.click('input[name="terms"]'); // Update the selector with the actual checkbox

    // Submit the form
    await page.waitForXPath('//button[@type="submit"]');
    const [submitButton] = await page.$x('//button[@type="submit"]');
    await submitButton.click();

    // Wait for a while to observe the result
    await page.waitForTimeout(5000);

    // Close the browser
    await browser.close();
})();
