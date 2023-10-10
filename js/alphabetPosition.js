/*
 * KATA: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
 * Solutions: https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript
 * Brief: Given a string, replace every letter with its position in the alphabet.
 * @param: String
 * @return: String
*/
function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (const letter of text.toLowerCase()) {
        if (alphabet.includes(letter)) {
            result += (alphabet.indexOf(letter) + 1).toString() + ' ';
        }
    }
    return result.slice(0, -1);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));