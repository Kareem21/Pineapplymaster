import puppeteer from "puppeteer";

const getDummyAnswer = (question, type, options) => {
    if (type === "yes/no") {
        return "yes";
    } else if (type === "radio-button" && options) {
        return options[0];
    } else if (type === "text") {
        if (question.toLowerCase().includes("experience")) {
            return "I have 5 years of relevant experience in this field.";
        } else if (question.toLowerCase().includes("salary")) {
            return "My expected salary range is 70,000-90,000 per year.";
        } else if (question.toLowerCase().includes("notice")) {
            return "I can start within 2 weeks of receiving an offer.";
        } else if (question.toLowerCase().includes("why")) {
            return "I am passionate about this role and believe my skills align perfectly with the position requirements.";
        } else {
            return "I am highly qualified for this position and excited about the opportunity to contribute to your team.";
        }
    }
    return "";
};

const fillWorkableForm = async (link, resumeData, data) => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36")

    try {
        await page.goto(`https://jobs.workable.com${link}`);

        const formButton = await page.$("[data-ui='overview-apply-now']")
        await formButton.click()
        await new Promise(r => setTimeout(r, 2000));

        const cookieButton = await page.waitForSelector("[data-ui='cookie-consent-accept']")
        await cookieButton.click()

        const firstName = await page.$("[data-ui='firstname']")
        const lastName = await page.$("[data-ui='lastname']")
        const email = await page.$("[data-ui='email']")

        await firstName.type(data.firstName)
        await lastName.type(data.lastName)
        await email.type(data.email)

        try {
            let phone = await page.waitForSelector("[name='phone']", { timeout: 3000 })
            phone = await page.$("[name='phone']")
            await phone.type("+971")
            await phone.type("")
            await phone.type(data.phone)
        } catch (e) {
            // The field probably doesn't exist
        }

        for (const exp of data.experience) {
            try {
                let addButton = await page.waitForSelector("[aria-label='Add Experience']", { timeout: 3000 })
                addButton = await page.$("[aria-label='Add Experience']")
                await addButton.click()

                const title = await page.$("[name='title']")
                const company = await page.$("[name='company']")
                const summary = await page.$("[name='summary']")

                await title.type(exp.title)
                await company.type(exp.company)
                await summary.type(exp.summary)

                const saveButton = await page.$("[data-ui='save-section']")
                await saveButton.click()
                await new Promise(r => setTimeout(r, 500));
            } catch (e) {
                break
            }
        }

        for (const ed of data.education) {
            try {
                let addButton = await page.waitForSelector("[aria-label='Add Education']", { timeout: 3000 })
                addButton = await page.waitForSelector("[aria-label='Add Education']")
                await addButton.click()
                const school = await page.waitForSelector("[name='school']")
                const fieldOfStudy = await page.waitForSelector("[name='field_of_study']")
                const degree = await page.waitForSelector("[name='degree']")
                await school.type(ed.school)
                await fieldOfStudy.type(ed.fieldOfStudy)
                await degree.type(ed.degree)
                await page.keyboard.press("Tab")
                await page.keyboard.press("Tab")
                await page.keyboard.press("Tab")
                await page.keyboard.press("Enter")
                await new Promise(r => setTimeout(r, 500));
            } catch (e) {
                break
            }
        }

        const resumeInput = await page.waitForSelector("[data-ui='resume']")
        await resumeInput.uploadFile("./Moamen_Resume.pdf")

        const sections = await page.$$("[data-ui='section']")
        const fields = await sections[2].$$(".styles__field--3JEd1")
        const questions = []

        for (const field of fields) {
            let questionElem = await (await field.waitForSelector("strong.styles__strong--2kqW6")).getProperty("innerText")
            let q = questionElem.toString().replace("JSHandle:", "")
            if (q === "*") {
                questionElem = await (await field.$$("strong.styles__strong--2kqW6"))[1].getProperty("innerText")
                q = questionElem.toString().replace("JSHandle:", "")
            }

            let textarea = await field.$("textarea")
            let yesno = await field.$("[data-ui='option']")
            let radio = await field.$("input[type='radio']")

            let optionsArray = await field.$$("label span")
            let options = []
            if (radio) {
                for (const option of optionsArray) {
                    const text = (await option.getProperty("innerText")).toString().replace("JSHandle:", "")
                    options.push(text)
                }
            }

            questions.push({
                question: q,
                type: textarea ? "text" : yesno ? "yes/no" : radio ? "radio-button" : null,
                options: radio ? options : null
            })
        }

        const dummyResponses = questions.map(q => ({
            question: q.question,
            answer: getDummyAnswer(q.question, q.type, q.options)
        }));

        let i = 0
        for (const field of fields) {
            let textarea = await field.$("textarea")
            let yesno = await field.$("[data-ui='option']")
            let radio = await field.$("input[type='radio']")

            if (textarea) {
                await textarea.type(dummyResponses[i].answer)
                await page.keyboard.press("Tab")
            }

            if (yesno) {
                await page.keyboard.press("Space")
                if (dummyResponses[i].answer === "yes" || dummyResponses[i].answer === "YES") {
                    console.log("clicking yes")
                    await new Promise(r => setTimeout(r, 1000));
                } else {
                    console.log("clicking no")
                    await page.keyboard.press("ArrowRight")
                    await new Promise(r => setTimeout(r, 1000));
                }
                await page.keyboard.press("Tab")
            }

            if (radio) {
                let optionsArray = await field.$$("label span")
                for (const option of optionsArray) {
                    const text = (await option.getProperty("innerText")).toString().replace("JSHandle:", "")
                    if (dummyResponses[i].answer === text) {
                        await option.click()
                        await new Promise(r => setTimeout(r, 1000));
                    }
                }
                await page.keyboard.press("Tab")
            }
            i = i + 1
        }

        const submitButton = await page.waitForSelector("[data-ui='application-form-submit']")
        const clicked = await submitButton.click();

        if (clicked) {
            console.log('Workable Submit button clicked successfully');
        } else {
            console.log('Workable submit button click failed');
        }
        await new Promise(r => setTimeout(r, 30000));

        await browser.close()
        return "done"
    } catch (e) {
        console.log(e)
        return {error: JSON.stringify(e)}
    }
}

// Self-executing test function
(async () => {
    const testData = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "555123456",
        experience: [
            {
                title: "Senior Software Engineer",
                company: "Tech Corp",
                summary: "Led development of key features and managed team of 5 developers"
            },
            {
                title: "Software Engineer",
                company: "StartUp Inc",
                summary: "Full-stack development using React and Node.js"
            }
        ],
        education: [
            {
                school: "University of Technology",
                fieldOfStudy: "Computer Science",
                degree: "Bachelor's Degree"
            }
        ]
    };

    const resumeData = {
        skills: ["JavaScript", "React", "Node.js"],
        summary: "Experienced software engineer with focus on web technologies"
    };

    // Replace this with an actual Workable job posting URL path
    const jobLink = 'https://jobs.workable.com/search?location=Dubai%2C+United+Arab+Emirates&selectedJobId=137f76bc-fe69-4c7e-8f57-0482126012853'; // ← REPLACE THIS with actual job link

    console.log('Starting form fill...');
    try {
        const result = await fillWorkableForm(jobLink, resumeData, testData);
        console.log('Form fill result:', result);
    } catch (error) {
        console.error('Error filling form:', error);
    }
})();