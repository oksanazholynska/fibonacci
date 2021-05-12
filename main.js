const inputData = document.getElementById('numbers');
const show = document.getElementById('show');
const output = document.getElementById('output');
show.addEventListener('click', function () {
    const arr = inputData.value.split(' ');
    const sum = getSumFromArr(arr);
    const numbersOfFibonacci = searchFibonacci(sum);
    const result = numbersOfFibonacci.second - sum;
    output.innerHTML = `Попереднє число ${numbersOfFibonacci.first}, наступне число ${numbersOfFibonacci.second}. Сума чисел дорівнює ${sum}. Потрібнe числo, щоб вийшло число Fibonacci = ${result}`;
});

function searchFibonacci(num) {
    let last = 0;
    let current = 1;
    let next = current + last;
    if (num > 0) {
        for (let i = 0; next < num; i++) {
            last = current;
            current = next;
            next = current + last;
        }
    }
    return {
        first: (current - num) ? current : next
        , second: (current - num) ? next : current
    };
}

function getSumFromArr(arr) {
    let sum = 0;
    for (const num of arr) {
        if (!isNaN(num)) {
            sum += +num;
        }
    }
    return sum;
}

