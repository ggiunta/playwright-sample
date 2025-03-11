exports.PlaywrightDevPage = class PlaywrightDevPage {
  constructor(page) {
    this.page = page
    this.header = page.getByRole('heading', { name: 'enables reliable end-to-end testing for modern web apps.' })
  }

  async goto() {
    await this.page.goto('https://playwright.dev')
  }
};