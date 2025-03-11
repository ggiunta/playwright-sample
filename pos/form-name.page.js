exports.FormNamePage = class FormNamePage {
  constructor(page) {
    this.page = page
    this.nameInput = page.getByPlaceholder("Enter your name")
    this.nextBtn = page.getByText("Next")
  }
};