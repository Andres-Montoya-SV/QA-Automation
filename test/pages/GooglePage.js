class GooglePage {
  async open() {
    await browser.url("/");
  }

  async search(query) {
    await (await this.searchInput).waitForDisplayed({ timeout: 10000 });
    await (await this.searchInput).setValue(query);
    await (await this.searchBtn).waitForClickable({ timeout: 10000 });
    await (await this.searchBtn).click();
  }

  get searchInput() {
    return $('input[name="q"]');
  }
  get searchBtn() {
    return $('input[type="submit"]');
  }
}

module.exports = new GooglePage();
