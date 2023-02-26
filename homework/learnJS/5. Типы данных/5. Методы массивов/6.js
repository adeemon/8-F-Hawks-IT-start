function Calculator() {

    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            operand = split[1],
            b = +split[2]
        if (!this.methods[operand] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[operand](a, b);
    }

    this.addMethod = function(name, callback) {
        this.methods[name] = callback;
    };
}