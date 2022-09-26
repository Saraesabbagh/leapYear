const leapYear = require('./leapYear');

describe('leapYear', ()=> {
  it('returns true when given year 2000', () => {
    expect(leapYear(2000).toEqual('true'));
  });
});