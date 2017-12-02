import { FavouriteAssignmentPage } from './app.po';

describe('favourite-assignment App', () => {
  let page: FavouriteAssignmentPage;

  beforeEach(() => {
    page = new FavouriteAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
