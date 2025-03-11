exports.VercelLoginPage = class VercelLoginPage {
  constructor(page) {
    this.page = page
    this.header = page.getByRole('heading', { name: 'Testing Challenge' })
    this.emailInput = page.locator('input[type="email"]')
    this.pwdInput = page.locator('input[type="password"]')
    this.submitBtn = page.locator('button[type="submit"]')
  }

  async goto() {
    await this.page.goto('https://testing-challenge.vercel.app/login')
  }
};