class FocusServicesPage {
  async scrollToBottom() {
    await browser.execute(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  get focusServicesLink() {
    return $('a[href="https://www.focusservices.com"]');
  }
  get nowHiringBtn() {
    return $('a[href="/careers"]');
  }
  get locationsTab() {
    return $('a[href="/locations"]');
  }
  get northAmericaLink() {
    return $('a[href="/locations/north-america"]');
  }
  get centralAmericaLink() {
    return $('a[href="/locations/central-america"]');
  }
  get centralAmericaTitle() {
    return $("h1=El Salvador & Nicaragua");
  }
  get asiaLink() {
    return $('a[href="/locations/asia"]');
  }
  get asiaLocationText() {
    return $("*=Bacolod City, Philippines");
  }
}

module.exports = new FocusServicesPage();
