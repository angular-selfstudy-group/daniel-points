import { PointsPage } from './app.po';

describe('points App', () => {
  let page: PointsPage;

  beforeEach(() => {
    page = new PointsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to pts!!'))
      .then(done, done.fail);
  });
});
