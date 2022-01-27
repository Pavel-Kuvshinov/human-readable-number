module.exports = function toReadable (number) {
    let answers = {
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        14 : 'fourteen',
        15 : 'fifteen',
        16 : 'sixteen',
        17 : 'seventeen',
        18 : 'eighteen',
        19 : 'nineteen',
        20 : 'twenty',
        30 : 'thirty',
        40 : 'forty',
        50 : 'fifty',
        60 : 'sixty',
        70 : 'seventy',
        80 : 'eighty',
        90 : 'ninety',
        100 : 'hundred',
    }
            
    let countDigits = number.toString().split('').length;
  
    if(countDigits == 1) return answers[number];
    if(countDigits == 2){
        if(number in answers) return answers[number];
        return answers[number - (number % 10)] + ' ' + answers[(number % 10)];
    }
    if(countDigits == 3){
        if(number % 100 == 0) return answers[number / 100] + ' ' + answers[100];
        return answers[Math.trunc(number / 100)] + ' ' + answers[100] + ' ' + toReadable(number % 100);
    }
}
