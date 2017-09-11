import { NgOnsenDemoPage } from './app.po';

describe('ng-onsen-demo App', () => {
  let page: NgOnsenDemoPage;

  beforeEach(() => {
    page = new NgOnsenDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
