const laby = require('../lib/index');
describe('/user/:', function () {
  describe('/user/{name}:', function () {
    it('get-badges', function () {
      laby.badges('Niklas');
    });
    it('get-friends', function () {
      laby.friends('Niklas');
    });
    it('get-snipped', function () {
      it('.role', function () {
        laby.role('Niklas');
      });
      it('.background', function () {
        laby.background('Niklas');
      });
    });
  });
  describe('/user/{uuid}', function () {
    it('get-badges', function () {
      laby.badges('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
    });
    it('get-friends', function () {
      laby.friends('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
    });
    it('get-snipped', function () {
      it('.role', function () {
        laby.role('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
      });
      it('.background', function () {
        laby.background('e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
      });
    });
  });
});

describe('/server/', function () {
  it('rates', function () {
    laby.votes('gommehd.net');
  });
  describe('rates/{name}', function () {
    it('Server-User-Votes', function () {
      laby.checkVote('gommehd.net', 'Niklas');
    });
    it('Server-User-Votes [Error]', function () {
      laby.checkVote('gommehd.net', 'Dinnerbone');
    });
  });
  describe('rates/{uuid}', function () {
    it('Server-User-Votes', function () {
      laby.checkVote('gommehd.net', 'e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982');
    });
    it('Server-User-Votes [Error]', function () {
      laby.checkVote('gommehd.net', '61699b2e-d327-4a01-9f1e-0ea8c3f06bc6');
    });
  });
});

describe('/texture/', function () {
  describe('/profile/skin', function () {
    describe('/{name}', function () {
      it('Profile Skin [NAME]', function () {
        laby.skin('Niklas');
      });
    });
    describe('/{uuid}', function () {
      it('Profile Skin [UUID]', function () {
        laby.skin('61699b2e-d327-4a01-9f1e-0ea8c3f06bc6');
      });
    });
  });
  describe('/profile/head', function () {
    describe('/{name}', function () {
      it('Profile Head [NAME]', function () {
        laby.head('Niklas');
      });
    });
    describe('/{uuid}', function () {
      it('Profile Head [UUID]', function () {
        laby.head('61699b2e-d327-4a01-9f1e-0ea8c3f06bc6');
      });
    });
  });
});

describe('/search/', function () {
  describe('/names/{input}', function () {
    describe('/{input} [Type:NAME]', function () {
      it('Search Name [Type:NAME]', function () {
        laby.search('Niklas');
      });
    });
    describe('/{input} [Type:UUID]', function () {
      it('Search Name [Type:UUID]', function () {
        laby.search('Niklas');
      });
    });
  });
});
