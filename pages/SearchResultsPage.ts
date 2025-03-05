import { Page } from '@playwright/test';

export class SearchResultsPage {
    constructor(private page: Page) {}

    async selectThirdResult() {
        const thirdProduct =  this.page.locator('[data-cnstrc-item-price]').nth(2);
        const priceText = await thirdProduct.getByTestId('undefined-lbl-undefinedprice').textContent();

        await thirdProduct.click();

        return priceText;
    }
}
