
function palidrome(str) {
    let reg = /[\W_]/g;
    let word = str.toLowerCase()
    let reversed = word.split('').reverse().join('')
    return word === reversed
}
