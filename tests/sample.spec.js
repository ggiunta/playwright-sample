import { test, expect } from '@playwright/test'
import { PlaywrightDevPage } from '../pos/sample.page'

test('has title', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto()

  await expect(playwrightDev.header).toBeVisible()
});
