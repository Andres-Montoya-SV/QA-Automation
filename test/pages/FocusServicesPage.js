class FocusServicesPage {
  
  // Scroll to the bottom of the page
  async scrollToBottom() {
    await browser.execute(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  // Get the Now Hiring button element
  get nowHiringBtn() {
    return $("#text-4 > div > p > a");
  }

  // Get the Locations tab element
  get locationsTab() {
    return $("#menu-item-4726 > a > span.avia-menu-text");
  }

  // Get the North America link element
  get northAmericaLink() {
    return $(
      "#av-tab-section-1 > div > div.av-tab-section-tab-title-container.avia-tab-title-padding-small > a.av-section-tab-title.av-tab-no-icon.av-tab-with-image.noHover.av-active-tab-title"
    );
  }

  // Get the Central America link element
  get centralAmericaLink() {
    return $(
      "#av-tab-section-1 > div > div.av-tab-section-tab-title-container.avia-tab-title-padding-small > a:nth-child(2)"
    );
  }

  // Get the Central America title element
  get centralAmericaTitle() {
    return $("h2=El Salvador & Nicaragua");
  }

  // Get the Asia link element
  get asiaLink() {
    return $(
      "#av-tab-section-1 > div > div.av-tab-section-tab-title-container.avia-tab-title-padding-small > a:nth-child(3)"
    );
  }

  // Get the Asia location text element
  get asiaLocationText() {
    return $("*=Bacolod City, Philippines");
  }

  // Click the Focus Services link
  async clickFocusServicesLink() {
    await (await this.focusServicesLink).click();
  }

  // Find and return the Focus Services link element in search results
  async findFocusServicesLink() {
    const searchResults = await $$("a[href]");
    for (const result of searchResults) {
      const href = await result.getAttribute("href");
      if (href === "https://www.focusservices.com/") {
        return result;
      }
    }
    return null;
  }
}

module.exports = new FocusServicesPage();
