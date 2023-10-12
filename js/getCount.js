/*
 * KATA: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
 * Solutions: https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript
 * Brief: Return the number (count) of vowels in the given string.
 * @param: string
 * @return: number
*/
function getCount(str) {
    return str.split('').filter(ltr => "aeiouAEIOU".includes(ltr)).length;
}

console.log(getCount('abracadabra'));
console.log(getCount('pear tree'));
console.log(getCount('o a kak ushakov lil vo kashu kakao'));
console.log(getCount('my pyx'));