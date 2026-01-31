import { test, expect } from '@playwright/test'
import { TrianglePage } from '../tests/pages/trianglePage'

test.describe.serial('Triangle validator', () => {

  test.beforeEach(async ({ page }) => {
    const trianglePage = new TrianglePage(page)
    await trianglePage.openPage()
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Прямоугольный треугольник', async ({ page }) => {
    const trianglePage = new TrianglePage(page)

    // await page.pause()
    await trianglePage.fillSides(3, 4, 5)
    await page.waitForTimeout(1000)
    await trianglePage.submit()

    const result = page.locator('.info.logg', { hasText: 'Прямоугольный треугольник' })
    await page.waitForTimeout(1000)
    await expect(result).toBeVisible()
  })

  test('Тупоугольный треугольник', async ({ page }) => {
    const trianglePage = new TrianglePage(page)

    await trianglePage.fillSides(5, 7, 10)
    await page.waitForTimeout(1000)
    await trianglePage.submit()

    const result = page.locator('.info.logg', { hasText: 'Тупоугольный треугольник' })
    await page.waitForTimeout(1000)
    await expect(result).toBeVisible()
  })

  test('Остроугольный треугольник', async ({ page }) => {
    const trianglePage = new TrianglePage(page)

    await trianglePage.fillSides(4, 5, 6)
    await page.waitForTimeout(1000)
    await trianglePage.submit()

    const result = page.locator('.info.logg', { hasText: 'Остроугольный треугольник' })
    await page.waitForTimeout(1000)
    await expect(result).toBeVisible()
  })

  test('Равнобедренный треугольник', async ({ page }) => {
    const trianglePage = new TrianglePage(page)

    await trianglePage.fillSides(5, 5, 6)
    await page.waitForTimeout(1000)
    await trianglePage.submit()

    const result = page.locator('.info.logg', { hasText: 'Равнобедренный треугольник' })
    await page.waitForTimeout(1000)
    await expect(result).toBeVisible()
  })

  test('Равносторонний треугольник', async ({ page }) => {
    const trianglePage = new TrianglePage(page)

    await trianglePage.fillSides(5, 5, 5)
    await page.waitForTimeout(1000)
    await trianglePage.submit()

    const result = page.locator('.info.logg', { hasText: 'Равносторонний треугольник' })
    await page.waitForTimeout(1000)
    await expect(result).toBeVisible()
  })
})