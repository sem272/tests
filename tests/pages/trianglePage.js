import { BasePage } from './BasePage'

export class TrianglePage extends BasePage {
    constructor(page) {
        super(page)

        // URL
        this.url = 'https://playground.learnqa.ru/puzzle/triangle'

        // Inputs
        this.sideAInput = page.locator('input.js_a')
        this.sideBInput = page.locator('input.js_b')
        this.sideCInput = page.locator('input.js_c')

        // Button
        this.showButton = page.locator('.btn-submit')

        this.resultTriangle = page.locator('.info.logg')

    }

    async openPage() {
        await this.open(this.url)
    }

    async fillSides(a, b, c) {
        if (a !== undefined) await this.sideAInput.fill(String(a))
        if (b !== undefined) await this.sideBInput.fill(String(b))
        if (c !== undefined) await this.sideCInput.fill(String(c))
    }

    async submit() {
        await this.showButton.click();
    }
}