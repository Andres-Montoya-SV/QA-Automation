class GooglePage {
  async open() {
    await browser.url("/");
  }

  async search(query) {
    await (await this.searchInput).setValue(query);
    await (await this.searchBtn).waitForClickable();
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
