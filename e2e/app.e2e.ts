import { QuickstartPage } from './app.po';

describe('quickstart App', function() {
  let page: QuickstartPage;

  beforeEach(() => {
    page = new QuickstartPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('quickstart works!');
  });
});
