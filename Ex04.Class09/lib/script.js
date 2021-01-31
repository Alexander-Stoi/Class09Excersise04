console.log(`Example 4`);


$(document).ready(function () {

    let button = $(`button`);
    let input = $(`input`);
    let h1 = $(`h1`);

    function average(num1, num2, num3) {
        let sum = num1 + num2 + num3;
        return sum / 3;
    
    }

    button.click(function () {
        console.log(`eeeeee`);
        let num1 = parseInt(input[0].value);
        let num2 = parseInt(input[1].value);
        let num3 = parseInt(input[2].value);

        // console.log(num1, num2, num3);
        let aver = average(num1, num2, num3);
        console.log(aver);
        if (aver >= 10) {
            h1.text(aver);
            h1.css(`color`, `green`);

        } else {
            h1.text(aver);
            h1.css(`color`, `red`);
        }
    })



})

