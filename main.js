let meridian = ' AM'

getTime = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    /* Checks time to place zeroes where needed and adjust to PM hours when needed */
    hours = checkHours(hours);
    minutes = checkZeroes(minutes);
    seconds = checkZeroes(seconds);
    
    document.getElementById('clock__display').innerHTML = hours + ":" + minutes + ":" + seconds + meridiem;

    setTimeout(getTime, 500)
}

checkZeroes = (i) => {
    if (i < 10) {
        return i = "0" + i;
    }
    return i
}

checkHours = (x) => {
    if (x > 12) {
        meridiem = ' PM'
        return x - 12;
    }
    meridiem = ' AM'
    return x
}
