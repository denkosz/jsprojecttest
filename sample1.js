function fibonacciGenerator(n) {
    arrayList = [];
    var sumnumb;
    var numbZero = 0;
    var numbOne = 1;
    for (var i = 1; i <= n; i++) {
        arrayList.push(numbZero);
        sumnumb = numbZero + numbOne;
        numbZero = numbOne;
        numbOne = sumnumb;
    }
    return arrayList;
}
output = fibonacciGenerator(3);
console.log(output);