// implement Array method for map filter forEach reduce 
// Array.prototype.Mymap  MyReduce

Array.prototype.myMap = function (callbackFn) {
    const output = []

    for(let i = 0; i < this.length; i++) {
        output.push(callbackFn.call(this, this[i], i))
    }

    return output
}

Array.prototype.myFilter = function (callbackFn) {
    const output = [] 

    for(let ele of this) {
       if (callbackFn.call(this, ele) === true) {
        output.push(ele)
       } 
    }

    return output
}

Array.prototype.myForEach = function (callbackFn) {
    for(let ele of this) {
        callbackFn.call(this, ele)
    }
}

Array.prototype.myReduce = function (callbackFn, initialVal) {
    let accumulator
    let start = 0

    if(arguments.length > 1){
        accumulator = initialVal
    } else {
        for(let i = 0; i < this.length; i++) {
            if(this.hasOwnProperty(i)) {
                accumulator = this[i]
                start = i + 1
                break
            }
        }
        
            if(this.length ===0 && start === 0){
                throw new Error("empty array with no value!!")
            }
    }

    for(let i = start; i < this.length; i++){
        if(this.hasOwnProperty(i)) {
            accumulator = callbackFn(accumulator, this[i], i, this)
        }
    }
    return accumulator
}

console.log([1,2,3].myMap(num => num * 2))//[2,4,6]
console.log([1,2,3,4,5].myFilter(num => num % 2 === 0))//[2,4]
console.log([1,2,3,4,5].myFilter(num => console.log(num))) // -> why log [] at end???
console.log([1,2,3,4,5].myReduce((acc, cur) => {
   return acc + cur
}, 0)) // 15