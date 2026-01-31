export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url)
    }

    async close() {
        await this.page.closed(true)
    }

}