import { Page } from '@playwright/test';

export class ProductPage {
    constructor(private page: Page) {}

    // async selectCustomOptions() {
    //     // If customization options exist, select the first available one
    //     if (await this.page.locator('.customization-options').isVisible()) {
    //         await this.page.locator('.customization-options .option').first().click();
    //     }
    // }

    async addToCart() {
        await this.page.getByTestId('pdc-btn-addtocart').first().click();
    }

    async getProductPrice() {
        return await this.page.locator('span.productDetailStickyBar_product-sticky-bar-price__XuMuy').textContent();
    }
}
