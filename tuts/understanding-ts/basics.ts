function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    let result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    } else {
        return result;
    }
    
}

const a = 5;
const b = 6;
const printResult = true;
const resultPhrase = "Result is: ";

add(a, b, printResult, resultPhrase);
