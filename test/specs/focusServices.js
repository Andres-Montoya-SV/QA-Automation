const assert = require("assert");
const GooglePage = require("../pages/GooglePage");
const FocusServicesPage = require("../pages/FocusServicesPage");

describe("Focus Services test", () => {
  before(async () => {
    await GooglePage.open();
    await GooglePage.search("Focus Services");

    const focusServicesLink = await FocusServicesPage.findFocusServicesLink();
    assert.ok(
      focusServicesLink,
      "Focus Services link not found in search results"
    );
    await focusServicesLink.click();
  });

  it("should validate Now Hiring button", async () => {
    await FocusServicesPage.scrollToBottom();

    assert(
      await FocusServicesPage.nowHiringBtn.isDisplayed(),
      "Now Hiring button not found"
    );
  });

  it("should validate North America link", async () => {
    await FocusServicesPage.locationsTab.click();

    assert(
      await FocusServicesPage.northAmericaLink.isDisplayed(),
      "North America link not found"
    );
  });

  it("should validate Central America title", async () => {
    await FocusServicesPage.centralAmericaLink.click();

    assert(
      await FocusServicesPage.centralAmericaTitle.isDisplayed(),
      "Central America title not found"
    );
  });

  it("should validate Asia location text", async () => {
    await FocusServicesPage.asiaLink.click();

    assert(
      await FocusServicesPage.asiaLocationText.isDisplayed(),
      "Bacolod City, Philippines - not found in Asia location text block"
    );
  });
});
