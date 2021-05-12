const inputData = document.getElementById('numbers');
const show = document.getElementById('show');
const output = document.getElementById('output');
show.addEventListener('click', function () {
    const arr = inputData.value.split(' ');
    const sum = arr.reduce((sum, current) => !isNaN(current) ? 0 : sum + current, 0);
    const numbersOfFibonacci = searchFibonacci(sum);
    const result = numbersOfFibonacci.second - sum;
    output.innerHTML = `Попереднє число ${numbersOfFibonacci.first}, наступне число ${numbersOfFibonacci.second}. Сума чисел дорівнює ${sum}. Потрібнe числo, щоб вийшло число Fibonacci = ${result}`;
});

/**
 *
 * @param num: number
 * @returns {{first: number, second: number}}
 */
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


