const inputNumber = document.querySelectorAll(".input_number");

inputNumber.forEach(function (inputElement) {
    let dataNumber = inputElement.getAttribute("data-inputNumber");
    let sigBtnNum = document.querySelector("#sig-" + dataNumber);
    let antBtnNum = document.querySelector("#ant-" + dataNumber);

    let minNum = inputElement.getAttribute("min");
    let maxNum = inputElement.getAttribute("max");
    let stepNum = inputElement.getAttribute("step");

    inputElement.addEventListener("input", function () {
        inputElement.setAttribute("value", inputElement.value);
    });

    inputElement.addEventListener("blur", function () {
        if (inputElement.value == "") {
            inputElement.value = minNum;
        }
    });

    sigBtnNum.addEventListener("click", function () {
        minNum = inputElement.getAttribute("min");
        maxNum = inputElement.getAttribute("max");
        inputElement.value = parseInt(inputElement.value) + stepNum * 1;
        inputElement.setAttribute("value", inputElement.value);

        if (parseInt(inputElement.value) > maxNum) {
            inputElement.setAttribute("value", maxNum);
            inputElement.value = maxNum;
        }
    });

    antBtnNum.addEventListener("click", function () {
        minNum = inputElement.getAttribute("min");
        maxNum = inputElement.getAttribute("max");
        inputElement.value = parseInt(inputElement.value) - stepNum * 1;
        inputElement.setAttribute("value", inputElement.value);

        if (parseInt(inputElement.value) < minNum) {
            inputElement.setAttribute("value", minNum);
            inputElement.value = minNum;
        }
    });
});
