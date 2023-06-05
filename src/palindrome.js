// Javascript code for checking if a string is a palindrome.
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as madam or racecar.
const isPalindrome = (str) => {
    // Remove all non-alphanumeric characters from the string
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare the string with the reversed version of itself
    return str === str.split('').reverse().join('');
}