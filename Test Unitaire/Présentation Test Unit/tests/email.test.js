const { isValidEmail } = require('../utils/email');

describe('isValidEmail', () => {
  it('should return true for a valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  /*it('should return true for a valid email', () => {
    expect(isValidEmail('test@example.compldoijpfjzhfzfzfefzfezfezfezfezfzefezfezfefezfefzefezfezfzfzefzefzeefze')).toBe(false);
  });*/

  it('should return false for an invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  it('should return false for an invalid email', () => {
    expect(isValidEmail('')).toBe(false);
  });


  it('should return false for an invalid email', () => {
    expect(isValidEmail()).toBe(false);
  });
});