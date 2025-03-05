import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://www.balsamhill.com/');
    }

    async searchProduct(productName: string) {
        await this.page.fill('input[placeholder="Search"]', productName);
        await this.page.press('input[placeholder="Search"]', 'Enter');
    }
}
