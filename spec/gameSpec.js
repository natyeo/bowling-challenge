describe ('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('#isGutter', function() {
    it ('calculates a gutter game', function() {
      frames = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
      expect(game.isGutter(frames)).toEqual(true);
    });
  });

  describe('#isPerfect', function() {
    it ('calculates a perfect game', function() {
      frames = [[10,10],[10,10],[10,10],[10,10],[10,10],[10,10],[10,10],[10,10],[10,10],[10,10,10]];
      expect(game.isPerfect(frames)).toBeTruthy();
    });
  });

});
