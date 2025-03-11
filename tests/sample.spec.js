import { test, expect } from '@playwright/test'
import { VercelLoginPage } from '../pos/login.page'
import { FormNamePage } from '../pos/form-name.page';
import { FormAgePage } from '../pos/form-age.page';

test('Login - Valid', async ({ page }) => {
  const vercelLoginPage = new VercelLoginPage(page)
  const formNamePage = new FormNamePage(page)
  const formAgePage = new FormAgePage(page)
  await vercelLoginPage.goto()

  await expect(vercelLoginPage.header).toBeVisible()

  await vercelLoginPage.emailInput.fill('test@test.com')
  await vercelLoginPage.pwdInput.fill('password')
  await vercelLoginPage.submitBtn.click()

  await formNamePage.nameInput.fill("German")
  await formNamePage.nextBtn.click()

  await formAgePage.ageInput.fill("35")
  await formAgePage.nextBtn.click()

  await formAgePage.submitBtn.click()

  await expect(page.getByText("Form submission successful!")).toBeVisible()
});
