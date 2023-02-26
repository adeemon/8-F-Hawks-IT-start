let schedule = {};

const isEmpty = (obj) => {
    return Boolean(Object.entries(obj).length);
}

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false