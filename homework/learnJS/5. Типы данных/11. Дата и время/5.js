const getLastDayOfMonth = (year, month) => {
    let currentMonth = new Date(year, month, 1);
    let nextMonth = new Date(year, month + 1, 1);
    return ((nextMonth - currentMonth) / 86400000);
}

getLastDayOfMonth(2012, 1)