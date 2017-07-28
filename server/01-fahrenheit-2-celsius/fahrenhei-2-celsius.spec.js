describe('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  function fahrenheit2celsius(fahrentheit) {
    return (fahrentheit - 32) * 5 / 9;
  }

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      fahrenheit2celsius(32).should.equal(0);
    });

    it('give 10°C for 50°F', () => {
      fahrenheit2celsius(50).should.equal(10);
    });

  });
});
