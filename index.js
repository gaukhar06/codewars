function between(a, b) {
    let arr = []
    for(let i=a; i<=b; i++){
      arr.push(i)
    }
    return arr
  }


  var summation = function (num) {
    let arr = []
  
      while(num >= 1){
        arr.push(num)
        num--
      }
  
    return arr.reduce((a,b)=> a+b)
      
  }

  function typeOfSum(a, b) {
    return (typeof (a+b))
  }

  function findDifference(a, b) {

    let getA = a.reduce((a,b)=> a*b)
    let getB = b.reduce((a,b)=> a*b)
  
    return Math.abs(getA - getB)
  
  }

  function datingRange(age){
    let over14 = `${Math.floor((age/2)+7) }-${Math.floor((age-7)*2) }`
    let at14under = `${Math.floor(Math.abs( (age*.10)-age))}-${Math.floor((age*.10)+age)}`
    
    return(age<=14)? at14under : over14
  
  }


  const quarterOf = (month) => {
    return Math.ceil(month/3)
   }
