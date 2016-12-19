import { DreamlistFrontPage } from './app.po';

describe('dreamlist-front App', function() {
  let page: DreamlistFrontPage;

  beforeEach(() => {
    page = new DreamlistFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
