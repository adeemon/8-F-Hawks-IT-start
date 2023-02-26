const getSecondsToday = () => {
    let timeNow = new Date();
    let timeZero = new Date(timeNow);
    timeZero.setHours(0, 0, 0, 0);
    return (timeNow - timeZero) / 1000
}