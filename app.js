window.onload = () => {

    let screen = document.querySelector('.screen');
    let numbers = document.querySelectorAll('.numbers');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    numbers.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function () {
        if (screen.value === '') {
            screen.value = "Enter Value";

        } else {
            let result = eval(screen.value);
            screen.value = result;
        }
    })

    clear.addEventListener('click', function () {
        screen.value = "";
    })

}