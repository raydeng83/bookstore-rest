import { AdminportalRestPage } from './app.po';

describe('adminportal-rest App', function() {
  let page: AdminportalRestPage;

  beforeEach(() => {
    page = new AdminportalRestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
