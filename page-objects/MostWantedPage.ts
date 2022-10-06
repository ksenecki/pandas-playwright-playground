import { Locator, Page } from '@playwright/test';

export class MostWantedPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly filterSelector: Locator;
  readonly productsList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(
      "[class='woocommerce-products-header__title page-title']"
    );
    this.filterSelector = page.locator("select[class='orderby']");
    this.productsList = page.locator("ul[class='products']");
  }

  async loadMostWantedpage() {
    await this.page.goto('/product-category/most-wanted/');
    //todo: assert title
  }
}
