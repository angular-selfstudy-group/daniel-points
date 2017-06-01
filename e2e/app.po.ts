import { browser, by, element } from 'protractor';

export class PointsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pts-root h1')).getText();
  }
}
