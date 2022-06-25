const laby = require('../lib/index');
describe('User-Functions:', function () {
  describe('Username argument:', function () {
    it('Badges', function () {
      laby.badges('Niklas');
    });
    it('Friends', function () {
      laby.friends('Niklas');
    });
    it('Role', function () {
      laby.role('Niklas');
    });
    it('Background', function () {
      laby.background('Niklas');
    });
  });
  describe('UUID argument:', function () {
    it('Badges', function () {
      laby.badges('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
    });
    it('Friends', function () {
      laby.friends('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
    });
    it('Role', function () {
      laby.role('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
    });
    it('Background', function () {
      laby.background('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
    });
  });
});
describe('Server-Functions:', function () {
  it('Server-Votes', function () {
    laby.votes('gommehd.net');
  });
  describe('Username argument:', function () {
    it('Server-User-Votes', function () {
      laby.checkVote('gommehd.net', 'Niklas');
    });
    it('Server-User-Votes-Error', function () {
      laby.checkVote('gommehd.net', 'Dinnerbone');
    });
  });
  describe('UUID argument:', function () {
    it('Server-User-Votes', function () {
      laby.checkVote('gommehd.net', 'e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
    });
    it('Server-User-Votes-Error', function () {
      laby.checkVote('gommehd.net', '61699b2e-d327-4a01-9f1e-0ea8c3f06bc6');
    });
  });
});
