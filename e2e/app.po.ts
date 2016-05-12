export class QuickstartPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('quickstart-app h1')).getText();
  }
}
