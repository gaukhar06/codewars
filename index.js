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
	return (toReturn === 'value')? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}

function removeUrlAnchor(url){
  
    let first = url.split('').includes('#')
    let num = url.split('').indexOf('#')
    let sen = url.split('').slice(0,num).join('')
    
    return (!first) ? url : sen
  }


  function switcheroo(x){
    return x.split('').map(a => (a == 'a')? a.replace('a','b'):a.replace('b','a')).join('')
  }


  function digits(n) {
    return n.toString().split('').length
  }

  const last = xs =>  (xs.length)? xs.pop(): null

  function summy(nums){
    return nums.split(' ').map(a => parseInt(a)).reduce((a,b)=> a+b)
  }
