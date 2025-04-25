const CountValue = document.querySelector("#counter");

const increment = () => {
    let Value = parseInt(CountValue.innerText);
    Value = Value + 1;
    CountValue.innerText = Value;
}

const decrement = () => {
    let Value = parseInt(CountValue.innerText);
    Value = Value - 1;
    CountValue.innerText = Value;
}