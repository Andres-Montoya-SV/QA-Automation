class FocusServicesPage {
  async scrollToBottom() {
    await browser.execute(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  get nowHiringBtn() {
    return $("#text-4 > div > p > a");
  }
  get locationsTab() {
    return $("#menu-item-4726 > a > span.avia-menu-text");
  }
  get northAmericaLink() {
    return $(
      "#av-tab-section-1 > div > div.av-tab-section-tab-title-container.avia-tab-title-padding-small > a.av-section-tab-title.av-tab-no-icon.av-tab-with-image.noHover.av-active-tab-title"
    );
  }
  get centralAmericaLink() {
    return $('#av-tab-section-1 > div > div.av-tab-section-tab-title-container.avia-tab-title-padding-small > a:nth-child(2)');
  }
  get centralAmericaTitle() {
    return $("h2=El Salvador & Nicaragua");
  }
  get asiaLink() {
    return $('#av-tab-section-1 > div > div.av-tab-section-tab-title-container.avia-tab-title-padding-small > a:nth-child(3)');
  }
  get asiaLocationText() {
    return $("*=Bacolod City, Philippines");
  }

  async clickFocusServicesLink() {
    await (await this.focusServicesLink).click();
  }

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
