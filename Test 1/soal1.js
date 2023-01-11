const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Input number: ', input_number => {

    // START HERE
    let output_string = ''
    n = parseInt(input_number) - 1

    while (n >= 0) {
        // A000124 Formula
        result = (n*(n+1)) / 2 + 1

        output_string += result + "-"
        n--
    }

    let splitString = output_string.split("-")
    splitString.pop()
    let reverseString = splitString.reverse()
    let joinedString = reverseString.join("-")

    console.log(joinedString);
    // END HERE
    readline.close();
});