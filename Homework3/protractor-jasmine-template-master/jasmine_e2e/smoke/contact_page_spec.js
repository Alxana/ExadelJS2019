const world = require('../../po/world');
const EC = protractor.ExpectedConditions;

describe("CONTACT PAGE", () => {

    beforeAll(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(world.ContactUrl);
    });

    describe("PAGE TITLE AND URL VERIFICATION", () => {
        it(`verify that Contact Page url is equal to ${world.ContactUrl}`, async () => {
            const url = await browser.getCurrentUrl();

            return expect(url).toEqual(world.ContactUrl);
        });

        it(`verify that Contact Page title is equal to 'Contact Us | Exadel'`, async () => {
            const pageTitle = await browser.getTitle();

            return expect(pageTitle).toEqual('Contact Us | Exadel');
        });
    });

    describe("Texts are valid", () => {
        it(`General Title is visible`, async () => {
            const visibility = await browser.wait(EC.visibilityOf(world.ContactPage.GeneralTitle), 5000);
            return expect(visibility).toBe(true);
        });
        it(`General Title is equal to Contact us`, async () => {
            const elementText = await world.ContactPage.GeneralTitle.getText();
            return expect(elementText).toBe("Contact us");
        });
    });

    describe("Contact form is correct", () => {
        it(`Field labels are correct`, async () => {
            let elementText = await world.ContactPage.FormLabels.FirstName.getText();
            expect(elementText).toBe("FIRST NAME:*");

            elementText = await world.ContactPage.FormLabels.LastName.getText();
            expect(elementText).toBe("LAST NAME:*");

            elementText = await world.ContactPage.FormLabels.Email.getText();
            expect(elementText).toBe("EMAIL:*");

            elementText = await world.ContactPage.FormLabels.Phone.getText();
            expect(elementText).toBe("PHONE:");

            elementText = await world.ContactPage.FormLabels.JobTitle.getText();
            expect(elementText).toBe("JOB TITLE:*");

            elementText = await world.ContactPage.FormLabels.Description.getText();
            expect(elementText).toBe("HOW CAN WE HELP YOU?*");

            elementText = await world.ContactPage.FormElements.Button.getAttribute('value');
            expect(elementText).toBe("Submit");

            const captcha = await world.ContactPage.FormElements.Captcha;
            expect(captcha.getAttribute('src')).toContain("google");
        });

        it(`Form errors are correct`, async () => {
            await browser.wait(EC.elementToBeClickable(world.ContactPage.Footer.AcceptCookieButton), 5000);
            await world.ContactPage.Footer.AcceptCookieButton.click();
            await browser.wait(EC.invisibilityOf(world.ContactPage.Footer.AcceptCookieButton), 1000);

            const element = world.ContactPage.FormElements.Button;
            await browser.actions().mouseMove(element).perform();
            await browser.wait(EC.visibilityOf(element), 5000);
            await element.click();
            let elementText = element.getAttribute('value');

            expect(elementText).toBe("Submit");
            expect(await world.ContactPage.FormErrors.General.getText()).toBe("Please make corrections below and try again.");
            expect(await world.ContactPage.FormErrors.FirstName.getText()).toBe("This field is required.");
            expect(await world.ContactPage.FormErrors.LastName.getText()).toBe("This field is required.");
            expect(await world.ContactPage.FormErrors.Email.getText()).toBe("A proper email address is required.");
            expect(await world.ContactPage.FormErrors.JobTitle.getText()).toBe("This field is required.");
            expect(await world.ContactPage.FormErrors.Description.getText()).toBe("This field is required.");

            await world.ContactPage.FormElements.FirstName.sendKeys('Test Name');
            await world.ContactPage.FormElements.LastName.sendKeys('Test');
            await world.ContactPage.FormElements.Email.sendKeys('test@exadel.com');
            await world.ContactPage.FormElements.JobTitle.sendKeys('QA');
            await world.ContactPage.FormElements.Description.sendKeys('Some text message');


            await element.click();
            elementText = element.getAttribute('value');

            expect(elementText).toBe("Submit");
            expect(await world.ContactPage.FormErrors.General.getText()).toBe("Please make corrections below and try again.");
            expect(await world.ContactPage.FormErrors.FirstName.isPresent()).toBeFalsy();
            expect(await world.ContactPage.FormErrors.LastName.isPresent()).toBeFalsy();
            expect(await world.ContactPage.FormErrors.Email.isPresent()).toBeFalsy();
            expect(await world.ContactPage.FormErrors.JobTitle.isPresent()).toBeFalsy();
            expect(await world.ContactPage.FormErrors.Description.isPresent()).toBeFalsy();
        });
    });
});
