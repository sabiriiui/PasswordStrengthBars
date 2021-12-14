export const hasDigits = (string) => /\d/.test(string);
export const hasUppercase = (string) => /[A-Z]/.test(string);
export const hasLowercase = (string) => /[a-z]/.test(string);
export const hasEightLength = (string) => (string.length >= 8 ? true : false);
export const hasSpecialCharacter = (string) =>
  /.*[/!`~_;'+=@#$%^&*()\]\\,.?":{}|<>-]/.test(string);
