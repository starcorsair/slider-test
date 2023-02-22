//Напишите функцию match, которая принимает 2 строки и возвращает true, если эти строки равны без учета регистра.
function match(string1, string2) {
    const str1 = string1.toLowerCase();
    const str2 = string2.toLowerCase();
    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(match('Hello', 'hELLO'));
console.log(match('my name IS', 'my name is John'))

//Напишите функцию, которая принимает ссылку на раздел и возвращает название раздела.
function getSubredditName(link) {
    const rIndex = link.indexOf('/r/');
    const nameStartIndex = rIndex + 3;
    return link.slice(nameStartIndex, -1);
}
alert(getSubredditName('https://reddit.com/r/subreddit_name/'));

//Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и возвращает перевернутый отрицательный массив.
//??
function reverseAndNegate (arr) {
	return arr.reverse().map(value => -value);
}
alert( reverseAndNegate([1, -2, 5, 4]) );

/*Напишите функцию, которая принимает массив чисел и сначала к каждому чётному числу прибавляет 4, у каждого нечётного 
отнимает 2, потом убирает из массива числа, делящиеся на 13 без остатка и возвращает сумму оставшихся чисел.*/
const funcCalc = (arr) => {
    return arr
    .map(v => v % 2 == 0 ? v + 4 : v - 2)
    .filter(v => !(v % 13 == 0))
    .reduce((a, b) => a + b, 0)
}

alert(funcCalc([15, 2, 3, 5, 6]))
  


//Напишите функцию transformUpvotes(arr), которая принимает массив сокращенных записей количества лайков ['10k', '2.3k', '5k', '32', '28.4k'] и возвращает массив чисел [10000, 2300, 5000, 32, 28400].
const transformUpvote = (arr) => {
    const k = arr.toLowerCase().includes("k");
    if (k) {
const numPart = arr.slice(0, -1);
return numPart * 1000;
    }
    return Number(arr);
}
const transformUpvotes = newArr => newArr.map(transformUpvote);
alert( transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']) );
