class GooglePage {
  // Method to open the Google homepage
  async open() {
    await browser.url("/");
  }

  // Method to search for a query using the Google search bar
  async search(query) {
    // Wait for the search input field to be displayed and set the query value
    await (await this.searchInput).waitForDisplayed({ timeout: 10000 });
    await (await this.searchInput).setValue(query);

    // Wait for the search button to be clickable and click it
    await (await this.searchBtn).waitForClickable({ timeout: 10000 });
    await (await this.searchBtn).click();
  }

  // Getter for the search input field element
  get searchInput() {
    return $('input[name="q"]');
  }

  // Getter for the search button element
  get searchBtn() {
    return $('input[type="submit"]');
  }
}

// Export an instance of the GooglePage class
module.exports = new GooglePage();
