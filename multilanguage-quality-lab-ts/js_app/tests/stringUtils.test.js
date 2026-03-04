// 1. Importa la función usando require
const isPalindrome = require('../src/stringUtils'); // Ajusta la ruta si es necesario

test('EsPalindromo1: radar', () => {
  expect(isPalindrome("radar")).toBe(true);
});

test('EsPalindromo2: frase con espacios', () => {
  // Tu función actual usa .replace(/\s+/g, ''), así que esto pasará
  expect(isPalindrome("anita lava la tina")).toBe(true);
});

test('EsPalindromo3: string vacío', () => {
  expect(isPalindrome("")).toBe(true);
});

test('EsPalindromo4: caso negativo', () => {
  // "python" NO es palíndromo, por lo que esperamos que sea false
  expect(isPalindrome("python")).toBe(false); 
});