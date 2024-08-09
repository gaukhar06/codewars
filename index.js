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

