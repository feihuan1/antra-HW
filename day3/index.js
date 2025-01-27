// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
const reverseNumber = (number) => {
    let output = 0
    let remaining = number
    while(remaining > 0) {
        let tail = remaining % 10
        remaining = Math.floor(remaining / 10)
        output = output * 10 + tail
    }
    
    return output
}

console.log(reverseNumber(12345))// 54321

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const checkPal = (pal) => {
    let headIndex = 0
    let tailIndex = pal.length - 1
    while ( headIndex < tailIndex) {
        if(pal[headIndex] == ' ') headIndex++
        if(pal[tailIndex] == ' ') tailIndex--
        if(pal[headIndex] !== pal[tailIndex]) return false
        headIndex++
        tailIndex--
    }

    return true
}

console.log(checkPal("asdfdsa"), checkPal("asddsa"),checkPal("nurses run"), checkPal("asdsaaa")) // true ture true false

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
// //---------------------------------------------------------------> no god or od?

const generateComb = (str) =>{
    const output = []
    let comb = ''
    for(let i = 0; i < str.length; i++){
        comb += str[i]
        output.push(comb)
        for(let j = i + 1; j < str.length; j++){
            comb += str[j]
            output.push(comb)
        }
        comb = ''
    }
    return output
}

console.log(generateComb("dogs"))

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const sortStringAlphabetic = (str) => {
    const arr = str.split('')
    const output = arr.sort((a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0))

    return output.join('')
}

console.log(sortStringAlphabetic("cbaCBA"))


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
const capitalize = (str) => {
    if(!str) return ''
    let output = str[0].toUpperCase()

    for(let i = 1; i < str.length; i++) {
        if(str[i - 1] === " ") {
            output += str[i].toUpperCase()
        } else {
            output += str[i]
        }
    }

    return output
}

console.log(capitalize("the quick brown fox"), capitalize("    the quick brown fox"))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

const findLongestWordInString = (str) => {
    const arr = str.split(' ')

    const output = arr.reduce((curr, longest) => {
        return curr.length > longest.length ? curr : longest
    }, "")

    return output
}

console.log(findLongestWordInString('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
// aeiou
const countVowel = (str) => {
    const dict = 'aeiouAEIOU'
    let output = 0
    for (let i = 0; i < str.length; i++) {
        if (dict.indexOf(str[i]) !== -1) output++ 
    }

    return output
}

console.log(countVowel('The quick brown fox' ))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

const checkPrime = (num) => {
    if(num === 1) return false
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) return false
    }
    return true
}

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const checkType = (target) => target === null ? null : typeof target
console.log(checkType(null),checkType(undefined),checkType(), checkType({}), checkType(0), checkType(true), checkType(''), checkType([]), checkType(()=>{}))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

const buildIdentityMatrix = (n) => {
    const output = []

    for(let i = 0; i < n; i++) {
        const childArr = []
        for(let j = 0; j < n; j++){
            if(j === i) {
                childArr.push(1)
            } else{
                childArr.push(0)
            }
        }
        output.push(childArr)
    }
    return output
}

console.log(buildIdentityMatrix(2), buildIdentityMatrix(5))

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
const findSecondOnBothEnd = (nums) => {
    const sortedNums = nums.sort((a, b) => a - b)

    return [sortedNums[1], sortedNums[sortedNums.length - 2]]
}

console.log(findSecondOnBothEnd([1,2,3,4,5]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const isPerfectNum = (num) => {
    let sum = 0 

    for(let i = 1; i <= num / 2; i++) {
        if(num % i === 0) {
            sum += i
        }
    }

    return sum === num
}

console.log(isPerfectNum(6),isPerfectNum(28),isPerfectNum(6),isPerfectNum(496),isPerfectNum(8128),isPerfectNum(27))


// 13. Write a JavaScript function to compute the factors of a positive integer. 
const getFactors = (num) => {
    const output = []

    for(let i = 1; i <= Math.ceil(num / 2); i++) {
        if(num % i === 0) {
            output.push(i)
        }
    }
    output.push(num)
    return output
}

console.log(getFactors(6),getFactors(12),getFactors(15),getFactors(28))

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

const amountTocoins = (amount, coins) => {
    const output  = []
    const sortedCoins = coins.sort((a, b) => b-a)
    let num = Math.floor(amount)
    // console.log(sortedCoins)
    for( coin of sortedCoins) {
        while(num >= coin){
            output.push(coin)
            num -= coin
        }
        // console.log(coin)
    }
    return output
}

console.log(amountTocoins(46, [25, 10, 5, 2, 1]),amountTocoins(53, [25, 10, 5, 3, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
const power = (b, n) => Math.pow(b,n)

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
const uniqStr = (str) => {
    let output = ''

    for(let i = 0; i < str.length; i++) {
        if(output.indexOf(str[i]) === -1) {
            output += str[i]
        }
    }
    return output
}

console.log(uniqStr("thequickbrownfoxjumpsoverthelazydog"), uniqStr("thequickbrownfoxjumpsoverthelazydog") ==="thequickbrownfxjmpsvlazydg")

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
const getOccurrences = (str) => {
    const target = str.toLowerCase()
    const output = {}

    for(let char of target) {
        if(output[char]){
            output[char] += 1
        } else {
            output[char] = 1
        }
    }
    return output
}

console.log(getOccurrences('hello'), getOccurrences('aabbbbcddddddddd'))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

const binarySearch = (arr, value) => {
    if(!arr.length) return -1

    const sortedArr = arr.sort((a, b) => a - b)

    let head = 0
    let tail = sortedArr.length -1 
    while(head < tail) {
        const mid = Math.floor((head + tail) / 2)

        if(sortedArr[mid] === value) {
            return mid
        } else if (sortedArr[mid] > value) {
            tail = mid -1
        } else {
            head = mid + 1
        }
    }

    return -1
}

console.log(binarySearch([4,2,31,5,66,34,2], 34))

// 19. Write a JavaScript function that returns array elements larger than a number. 

const filter = (arr, target) => arr.filter(num => num > target)

console.log(filter([4,5,2,6,3,4,7], 4))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// console.log("AaZz019".charCodeAt(0))

const generateHash = (len) => {
    const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let hash = ''

    for(let i = 0; i < len; i++) {
        const randomNum = Math.floor(Math.random() * dict.length)
        hash += dict[randomNum]
    }

    return hash
}

console.log(generateHash(7), generateHash(10), generateHash(26))


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

const getSubarrays = (arr, subarrayLength) => {
    const output = []

    const backtrack = (currentIndex, subarray) => {
        if(subarray.length === subarrayLength) {
            output.push([...subarray])
            return
        }

        for( let i = currentIndex; i < arr.length; i++) {
            subarray.push(arr[i])
            backtrack(i + 1, subarray)
            subarray.pop()
        }
    }
    backtrack(0, [])
    return output
}

  console.log(getSubarrays([1,2,3], 2), getSubarrays([1,2,3,4,5], 3))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

const countOccur = (str, letter) => {
    let output = 0

    for( let char of str) {
        if(char === letter) output++
    }

    return output
}

console.log(countOccur('microsoft.com', "o"))

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
const findFirstUniqChar = (str) => {
    const charCount = new Map()

    for( let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    for( let char of str) {
        if(charCount.get(char) === 1) return char
    }

    return null
}

console.log(findFirstUniqChar('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubbleSort = (arr) => {
    let switched

    for(let i =0; i < arr.length -1; i++) {
        switched = false 

        for( let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                switched = true
            }
        }
        if(!switched) break
    }

    return arr
}
console.log("Sorted array:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

const longestCountryname = (arr) => {
    if(!arr.length) return ''
    const sortedArr = arr.sort((a, b) => b.length - a.length)
    // console.log(sortedArr)
    return sortedArr[0]
}

console.log(longestCountryname(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
const findLongestUniqStr = (str) => {
    let longest = ''; 
    let charSet = new Set();
    let l = 0; 
    let r = 0;
    while (r < str.length) {
        if (!charSet.has(str[r])) {
            charSet.add(str[r]);
            r++;
            // Update longest if a longer unique substring is found
            if (r - l + 1 > longest.length) {
                longest = str.slice(l, r);
            }
        } else {
            charSet.delete(str[l]);
            l++;
        }
    }
    
    return longest;
};

console.log(findLongestUniqStr("abcabcbbmnbv"));



// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// use helper func checkPal in problem2
const getAllLongestPal = (str) => {
    const output = [];
    let longest = ''

    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length + 1; j++) {
            let currSunstring = str.slice(i, j) 
            if(checkPal(currSunstring)) {
                if(currSunstring.length > longest.length) {
                    longest = currSunstring 
                    output.length = 0
                    output.push(currSunstring)
                } else if(currSunstring.length === longest.length) {
                    output.push(currSunstring)
                }
            }
        }
    }
  
    return output;
  };

console.log(getAllLongestPal("abracadabra"))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

const  calc = (num1, num2, callback) => {
    return callback(num1, num2)
}

console.log(calc(1,2, (a, b) => a + b), calc(1,2, (a, b) => a - b))

// 29. Write a JavaScript function to get the function name. 
const getFunctionName = (targetFunction) => {
    return targetFunction.name
}
const func1 = () => {}
console.log(getFunctionName(func1), getFunctionName(()=>{}))