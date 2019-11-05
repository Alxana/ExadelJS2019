const world = require('../../po/world');
const EC = protractor.ExpectedConditions;

describe("HOME PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);

    });

    describe("PAGE TITLE AND URL VERIFICATION", () => {
        it(`verify that Home Page url is equal to the ${browser.baseUrl}`, async () => {
            const url = await browser.getCurrentUrl();

            return expect(url).toEqual(browser.baseUrl);
        });

        it(`verify that Home Page title is equal to the 'Exadel | Global Enterprise Software & Tech Solutions'`, async () => {
            const pageTitle = await browser.getTitle();

            return expect(pageTitle).toEqual('Software Development Solutions, Digital Engineering Services - Exadel');
        });
    });

    describe("Call Us number is valid", () => {
        it(`Call Us number is visible`, async () => {
            const visibility = await browser.wait(EC.visibilityOf(world.HomePage.Footer.CallUsNumber), 5000);
            return expect(visibility).toBe(true);
        });
        it(`Call Us number is equal +1 866 843 7411`, async () => {
            const elementNumber = await world.HomePage.Footer.CallUsNumber.getText();
            return expect(elementNumber).toContain("+1 866");
        });
    });
});
