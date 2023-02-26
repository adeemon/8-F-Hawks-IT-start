const getSecondsToTomorrow = () => {
    let timeNow = new Date();
    let timeTomorrow = new Date(timeNow);
    timeTomorrow.setDate(timeNow.getDate + 1);
    timeTomorrow.setHours(0, 0, 0, 0);
    return (timeTomorrow - timeZero) / 1000
}