import { Page } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async viewCart() {
        await this.page.getByTestId('pdc-add-to-cart-modal-btn-viewcart').click();
    }

    async getCartPrice() {
        return await this.page.locator('span.cartProductDetailItem_new_price__3YLJa').textContent();
    }

    async verifyCartItemCount(expectedCount: string) {
        const cartCount = await this.page.locator('span.headerIcons_custom-badge__Gv9jW').textContent();
        return cartCount === expectedCount;
    }

    async removeItemFromCart() {
        await this.page.getByTestId('cc-btn-remove-0').click();
    }

    async verifyItemRemoved() {
        return await this.page.locator('div.d-flex.cartProductDetailItem_body__QaWJ6.cartProductDetailItem_removedproducts__lwZsA').textContent();
    }
}
