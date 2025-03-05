import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';
import { SearchResultsPage } from '../pages/SearchResultsPage.ts';
import { ProductPage } from '../pages/ProductPage.ts';
import { CartPage } from '../pages/CartPage.ts';

test('Automate Balsam Hill Shopping Flow', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Navigate to website
    await homePage.navigate();

    // Search for "Christmas Tree"
    await homePage.searchProduct('Christmas Tree');

    // Select third product from search results
    const searchPrice = await searchResultsPage.selectThirdResult();
    // Select customization (if available) and add to cart
    const productPrice = await productPage.getProductPrice();
    // await productPage.selectCustomOptions();
    await productPage.addToCart();

    // View cart
    await cartPage.viewCart();
    const cartPrice = await cartPage.getCartPrice();

    // Validations
    await expect(searchPrice).toContain(productPrice);
    await expect(productPrice).toContain(cartPrice);
    expect(await cartPage.verifyCartItemCount('1')).toBeTruthy();

    // Remove item and validate removal message
    await cartPage.removeItemFromCart();
    const removalMessage = await cartPage.verifyItemRemoved();
    await expect(removalMessage).toContain('has been removed');
});
