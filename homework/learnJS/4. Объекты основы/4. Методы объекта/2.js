let calc = {
    a: 0,
    b: 0,
    read: () => {
        this.a = prompt('Input a');
        this.b = prompt('Input b');
    },
    sum: () => {
        alert(+this.a + +this.b)
    },
    mul: () => {
        alert(this.a * this.b);
    }
}