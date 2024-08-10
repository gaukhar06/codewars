function between(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr
}


var summation = function (num) {
    let arr = []

    while (num >= 1) {
        arr.push(num)
        num--
    }

    return arr.reduce((a, b) => a + b)

}

function typeOfSum(a, b) {
    return (typeof (a + b))
}

function findDifference(a, b) {

    let getA = a.reduce((a, b) => a * b)
    let getB = b.reduce((a, b) => a * b)

    return Math.abs(getA - getB)

}

function datingRange(age) {
    let over14 = `${Math.floor((age / 2) + 7)}-${Math.floor((age - 7) * 2)}`
    let at14under = `${Math.floor(Math.abs((age * .10) - age))}-${Math.floor((age * .10) + age)}`

    return (age <= 14) ? at14under : over14

}


const quarterOf = (month) => {
    return Math.ceil(month / 3)
}

function findMultiples(int, limit) {

    let arr = [];

    for (let i = int; i <= limit; i += int) {
        arr.push(i)
    }

    return arr

}

const grow = (x) => x.reduce((acc, cv) => acc * cv)

var replaceDots = function (str) {
    let cut = str.split('');
    return cut.map(a => a.replace('.', '-')).join('')

}
//   replaceDots("one.two.three")

const arr = N => {

    let i = -1;
    let arr = [];

    while (i < N - 1) {
        i++
        arr.push(i)
    }

    return arr
}

function shorter_reverse_longer(a, b) {

    return (a.length >= b.length) ?
        `${b}${a.split('').reverse().join('')}${b}`
        :
        `${a}${b.split('').reverse().join('')}${a}`
}


function sixToast(num) {
    return (num >= 6) ? num - 6 : num;
}

function simpleMultiplication(num) {
    return (num % 2 == 0) ? num * 8 : num * 9
}

function otherAngle(a, b) {
    return 180 - (a + b)
}

const areaOrPerimeter = function (l, w) {
    return (l == w) ? l * w : l * 2 + w * 2
};
areaOrPerimeter(4, 6)

function hello(name) {


    if (name == null || !name.length) {
        return 'Hello, World!'
    } else {

        let arr = name.toLowerCase().split('')
        let first = arr[0][0].toUpperCase()
        arr.splice(0, 1)

        let newName = first.split('').concat(arr).join('')


        return !name.length ? 'Hello, World!' : `Hello, ${newName}!`

    }
}


function countBy(x, n) {

    arr = []

    for (i = x; i <= x * n; i += x) {
        arr.push(i)

    }
    return arr

}

function spEng(sen) {
    return sen.toLowerCase().includes('english')
}


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld * 2) - dadYearsOld)
}


function DNAtoRNA(dna) {
    return dna.split('').map(a => a.replace('T', 'U')).join('')

}

function removeEveryOther(arr) {
    return arr.filter((a, i) => i % 2 == 0)

}


function mouthSize(animal) {
    return (animal.toLowerCase() === 'alligator') ? "small" : "wide"
}
mouthSize('alligator')


function combat(health, damage) {
    return (health - damage < 0) ? 0 : health - damage
}

function pipeFix(num) {

    let arr = []
    let stop = num.pop()

    if (num == false) {
        return [2]
    } else {
        for (let i = num[0]; i <= stop; i++) {
            arr.push(i)
        }
        return arr
    }
}


// pipeFix([1,7])



function powersOfTwo(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}


function sumStr(a, b) {

    return (Number(a) + Number(b)).toString()

}
// sumStr("4","5")

function getRealFloor(n) {

    if (n <= 0) {
        return n
    } else if (n < 13) {
        return n - 1
    } else if (n > 13) {
        return n - 2
    }

}

//   getRealFloor(1)

function unusualFive() {
    return ['a', 'a', 'a', 'a', 'a'].length
}

function checkForFactor(base, factor) {
    return (base % factor === 0) ? true : false
}
// checkForFactor(653, 7)

function setAlarm(emp, vac) {
    return (emp == true && vac == false) ? true : false
}


function move(pos, roll) {
    return pos + roll * 2
}

function solution(a, b) {
    return (b.length > a.length) ? `${a}${b}${a}` : `${b}${a}${b}`
}

function isOpposite(s1, s2) {

    if (!s1.length || s1.length !== s2.length) {
        return false
    } else {

        let lo = s1.split('').map(a => a == a.toLowerCase())
        let up = s2.split('').map(a => a == a.toUpperCase())

        return lo.every((a, i) => a === up[i])


    }
}

function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}

function stringClean(s) {
    return s.replace(/\d+/g, "")
}

function testEven(n) {
    return (n % 2 == 0) ? true : false
}
testEven(1)

function vowelOne(str) {

    return str.toLowerCase().split('').map(x =>
        (x === 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            ? 1 : 0).join("")

}


function min(arr, toReturn) {
    return (toReturn === 'value') ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}

function removeUrlAnchor(url) {

    let first = url.split('').includes('#')
    let num = url.split('').indexOf('#')
    let sen = url.split('').slice(0, num).join('')

    return (!first) ? url : sen
}


function switcheroo(x) {
    return x.split('').map(a => (a == 'a') ? a.replace('a', 'b') : a.replace('b', 'a')).join('')
}


function digits(n) {
    return n.toString().split('').length
}

const last = xs => (xs.length) ? xs.pop() : null

function summy(nums) {
    return nums.split(' ').map(a => parseInt(a)).reduce((a, b) => a + b)
}

function reverseList(arr) {
    if (!arr.length) {
        return []
    } else {

        let get = arr.toString().split(',').reverse().join().split(',')
        return get.map(a => parseInt(a))
    }
}


var isAnagram = function (test, original) {

    const testS = test.split('').sort((a, b) => a.localeCompare(b)).join('').toLowerCase()

    const originalS = original.split('').sort((a, b) => a.localeCompare(b)).join('').toLowerCase()

    return (testS == originalS) ? true : false
};

function moveTen(s) {
    return s.split('').map((a) => a.charCodeAt()).map((a) => (a + 10 <= 122) ? a + 10 : a + 9 - 25).map(a => String.fromCharCode(a)).join('')
}


function fizzbuzz(n) {

    let arr = []

    for (var i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            arr.push('FizzBuzz')
        } else if (i % 3 == 0) {
            arr.push('Fizz')
        } else if (i % 5 == 0) {
            arr.push('Buzz')
        } else {
            arr.push(i)
        }
    }

    return arr

}

function evenChars(str) {

    return (str.length < 2 || str.length > 100) ? "invalid string"

        : str.split('').filter((a, b) => b % 2)
}

function nameShuffler(name) {
    var arr = name.split(" ");
    return arr[1] + " " + arr[0];
}


function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(i => !geese.includes(i));
};

function getChar(c) {
    return String.fromCharCode(c);
}

function twoSort(array) {
    var arr = array.sort();
    return arr[0].split("").join("***");
}

var a = "code";
var b = "wa.rs";
var name = a + b;

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

function reverseList(l) {
    return l.reverse((a, b) => b - a);
}

function greet(language) {
    var welcome = {
        'english': 'Welcome',
        'czech': 'Vitejte',
        'danish': 'Velkomst',
        'dutch': 'Welkom',
        'estonian': 'Tere tulemast',
        'finnish': 'Tervetuloa',
        'flemish': 'Welgekomen',
        'french': 'Bienvenue',
        'german': 'Willkommen',
        'irish': 'Failte',
        'italian': 'Benvenuto',
        'latvian': 'Gaidits',
        'lithuanian': 'Laukiamas',
        'polish': 'Witamy',
        'spanish': 'Bienvenido',
        'swedish': 'Valkommen',
        'welsh': 'Croeso',
    };
    return welcome[language] || 'Welcome';
}

function expressionMatter(a, b, c) {
    var combinations = [
        a + b + c,
        a * (b + c),
        a * b * c,
        (a + b) * c,
        a * b + c,
    ];
    return Math.max.apply(null, combinations);
}

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears1 = 15;
    let catYears2 = catYears1 + 9;
    let catYears3 = catYears2 + (humanYears - 2) * 4;
    let dogYears1 = 15;
    let dogYears2 = dogYears1 + 9;
    let dogYears3 = dogYears2 + (humanYears - 2) * 5;
    if (humanYears == 0) {
        return [0, 0, 0];
    }
    if (humanYears == 1) {
        return [humanYears, catYears1, dogYears1];
    }
    if (humanYears == 2) {
        return [humanYears, catYears2, dogYears2];
    }
    if (humanYears > 2) {
        return [humanYears, catYears3, dogYears3];
    }
}

function correct(string) {
    return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}

function getPlanetName(id) {
    switch (id) {
        case (1): return ('Mercury');
        case (2): return ('Venus');
        case (3): return ('Earth');
        case (4): return ('Mars');
        case (5): return ('Jupiter');
        case (6): return ('Saturn');
        case (7): return ('Uranus');
        case (8): return ('Neptune');
    }
};

function strCount(str, letter) {
    return str.split(letter).length - 1;
}

function square(n) {
    return n * n;
}

function switchItUp(number) {
    var words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return words[number];
}

function hoopCount(n) {
    let hope = "Keep at it until you get it";
    let hoop = "Great, now move on to tricks";
    if (n < 10) {
        return hope;
    } else {
        return hoop;
    }
}

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

function getAge(age) {
    return parseInt(age[0]);
}

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return (length * width * height);
    }
}

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

function stringToArray(string) {
    return string.split(' ');
}

function reverseSeq(n) {
    var arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}

var min = function (list) {
    return Math.min(...list);
}

var max = function (list) {
    return Math.max(...list);
}

function bmi(weight, height) {
    var bmi = weight / height ** 2;
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function makeUpperCase(str) {
    return str.toUpperCase();
}

function past(h, m, s) {
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
}

function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 != 0;
}

function sum(numbers) {
    var sum_a = 0;
    for (var n = 0; n < numbers.length; n++) {
        sum_a += numbers[n]
    }
    return sum_a;
};


function digitize(n) {
    var arr = n.toString().split('').reverse().map(Number);
    return arr;
}

function litres(time) {
    return parseInt(time * 0.5);
}

function evenOrOdd(str) {


    let arr = str.split('')

    let even = arr.filter(a => a % 2 == 0)
    let odd = arr.filter(a => a % 2 > 0)

    let oddSum = odd.map(a => Number(a)).reduce((a, b) => a + b)

    let evenSum = even.map(a => Number(a)).reduce((a, b) => a + b)

    return (oddSum == evenSum) ? 'Even and Odd are the same' : (oddSum > evenSum) ? 'Odd is greater than Even' : 'Even is greater than Odd'

}

function evenChars(str) {

    return (str.length < 2 || str.length > 100) ? "invalid string"

        : str.split('').filter((a, b) => b % 2)
}

function reverse(str) {

    let wordCount = str.split(' ')

    let challenge = wordCount.map((a, i) => (i % 2 == 0) ? a : a.split('').reverse().join('')).join(' ')

    return (str == false) ? '' : challenge

}

function narcissistic(value) {


    let arr = [];
    arr.push(value)

    let str = arr.toString()
    let length = str.length
    let numSpl = value.toString().split('')


    let narcNum = numSpl.map((a) => Math.pow(a, length)).reduce((a, b) => a + b)

    return (narcNum == value) ? true : false

}

