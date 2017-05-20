import { NgDynamicDirectivesPage } from './app.po';

describe('ng-dynamic-directives App', function() {
  let page: NgDynamicDirectivesPage;

  beforeEach(() => {
    page = new NgDynamicDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
