/*
 * KATA: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
 * Solutions: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript
 * Brief: Takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
 * @param: object
 * @return: object
*/
function filter_list(list) {
    return list.filter((word) => typeof word == 'number');
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));