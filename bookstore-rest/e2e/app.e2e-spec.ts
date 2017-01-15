import { BookstoreRestPage } from './app.po';

describe('bookstore-rest App', function() {
  let page: BookstoreRestPage;

  beforeEach(() => {
    page = new BookstoreRestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
