function decimalToBinary(decNumber) {
    const remStack = new Stack()
    let number = decNumber
    let rem
    let binaryString = ''

    while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString
}

console.log(decimalToBinary(233)) //11101001
console.log(decimalToBinary(10)) //1010
console.log(decimalToBinary(1000)) //1111101000
