function palidromeLoop(str) {
    let reg = /[^A-Za-z0-9]/g;
    str = str.toLowerCase()
    let len = str.length
    for(let i = 0; i < len/2; i++) {
        if(str[i] !== str[len - 1 - i])
        return false
    }
    return true
}