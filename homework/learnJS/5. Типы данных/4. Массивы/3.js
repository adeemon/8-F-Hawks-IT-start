let arr = ["a", "b"];

arr.push(function() {
    alert(this);
});

arr[2](); // выведется 3 элемента: a, b, function..., т.к. мы фактически положили её внутрь массива