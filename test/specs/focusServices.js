const assert = require("assert");
const GooglePage = require("../pages/GooglePage");
const FocusServicesPage = require("../pages/FocusServicesPage");

describe("Focus Services test", () => {
  it("should search for Focus Services and validate elements", async () => {
    await GooglePage.open();
    await GooglePage.search("Focus Services");

    const focusServicesLink = await FocusServicesPage.findFocusServicesLink();
    assert.ok(
      focusServicesLink,
      "Focus Services link not found in search results"
    );
    await focusServicesLink.click();

    await FocusServicesPage.focusServicesLink.click();

    await FocusServicesPage.scrollToBottom();

    assert(
      await FocusServicesPage.nowHiringBtn.isDisplayed(),
      "Now Hiring button not found"
    );

    await FocusServicesPage.locationsTab.click();

    assert(
      await FocusServicesPage.northAmericaLink.isDisplayed(),
      "North America link not found"
    );

    await FocusServicesPage.centralAmericaLink.click();

    assert(
      await FocusServicesPage.centralAmericaTitle.isDisplayed(),
      "Central America title not found"
    );

    await FocusServicesPage.asiaLink.click();

    assert(
      await FocusServicesPage.asiaLocationText.isDisplayed(),
      "Asia location text not found"
    );
  });
});
