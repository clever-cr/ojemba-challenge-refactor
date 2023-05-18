export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // checks if length of password is equal to ten 
  if (password.length !== 10) return false;

  // checks if the password contains only characters
  if (/^[a-zA-Z]+$/.test(password)) return false;

  // checks if password doesn't contain special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;

  // checks if it is not a forbidden password
  if (forbiddenPasswords.includes(password)) return false;

  // checks if password contains only lower/upper case
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) return false;

  // checks if password contains 4 different characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
