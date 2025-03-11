exports.FormAgePage = class FormAgePage {
  constructor(page) {
    this.page = page
    this.ageInput = page.getByPlaceholder("Enter your age")
    this.nextBtn = page.getByText("Next")
    this.submitBtn = page.getByText("Submit")
  }
};