const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach((item) => {
    item.addEventListener("click", (e) => {
    if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
        inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
    });
});

document.querySelectorAll(".operations").forEach((item) => {
    item.addEventListener("click", (e) => {
    const btnValue = e.target.innerHTML;
    let lastChar = inputValue.innerText[inputValue.innerText.length - 1];

    if (btnValue === "=") {
        try {
        inputValue.innerText = eval(inputValue.innerText);
    } catch {
        inputValue.innerText = "NaN";
    }
    } else if (btnValue === "AC") {
        inputValue.innerText = "0";
    } else if (btnValue === "DEL") {
        inputValue.innerText = inputValue.innerText.slice(0, -1);
    if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0";
        }
    } else {
        if (!isNaN(lastChar) || lastChar === '.') {
        inputValue.innerText += btnValue;
        }
    }
    });
});