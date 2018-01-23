import { MatItemListPage } from './app.po';

describe('mat-item-list App', () => {
  let page: MatItemListPage;

  beforeEach(() => {
    page = new MatItemListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
