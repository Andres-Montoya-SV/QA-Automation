const assert = require("assert");
const GooglePage = require("../pages/GooglePage");
const FocusServicesPage = require("../pages/FocusServicesPage");

// Describe the test suite
describe("Focus Services test", () => {
  // Run before all tests
  before(async () => {
    // Open Google page and search for Focus Services
    await GooglePage.open();
    await GooglePage.search("Focus Services");

    // Find the Focus Services link and click it
    const focusServicesLink = await FocusServicesPage.findFocusServicesLink();
    assert.ok(
      focusServicesLink,
      "Focus Services link not found in search results"
    );
    await focusServicesLink.click();
  });

  // Test to validate the presence of the Now Hiring button
  it("should validate Now Hiring button", async () => {
    // Scroll to the bottom of the page
    await FocusServicesPage.scrollToBottom();

    // Check if the Now Hiring button is displayed
    assert(
      await FocusServicesPage.nowHiringBtn.isDisplayed(),
      "Now Hiring button not found"
    );
  });

  // Test to validate the presence of the North America link
  it("should validate North America link", async () => {
    // Click the Locations tab
    await FocusServicesPage.locationsTab.click();

    // Check if the North America link is displayed
    assert(
      await FocusServicesPage.northAmericaLink.isDisplayed(),
      "North America link not found"
    );
  });

  // Test to validate the presence of the Central America title
  it("should validate Central America title", async () => {
    // Click the Central America link
    await FocusServicesPage.centralAmericaLink.click();

    // Check if the Central America title is displayed
    assert(
      await FocusServicesPage.centralAmericaTitle.isDisplayed(),
      "Central America title not found"
    );
  });

  // Test to validate the presence of the Asia location text
  it("should validate Asia location text", async () => {
    // Click the Asia link
    await FocusServicesPage.asiaLink.click();

    // Check if the Asia location text is displayed
    assert(
      await FocusServicesPage.asiaLocationText.isDisplayed(),
      "Bacolod City, Philippines - not found in Asia location text block"
    );
  });
});
