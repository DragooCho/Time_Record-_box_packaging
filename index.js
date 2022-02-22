const btn = document.querySelector("button");
const originMl = document.querySelector("#Xml");
const resultMl = document.querySelector("#Yml");
const won = document.querySelector("#Xwon");
const calResult = document.querySelector("h4");
const resultTitle = document.querySelector(".result_window_title");

function changeResultTitle() {
    resultTitle.innerHTML = "계산결과";
}

function failedCalculationsText() {
    calResult.innerHTML = `😢박스수량, 포장시간, 작업시작시간을 모두 적어주세요.😢`;
}

function outputPostResultText(volume, finalValue) {
    calResult.innerHTML = `😉용량이 ${volume}ml일 때 가격은 ${finalValue}원 입니다.😉`;
}

const calculatePricePerCapacity = (ml, won, valueMl) => {
    if (ml === "" || won === "" || valueMl === "") {
        failedCalculationsText();
    } else {
        const result = won / (ml / valueMl);
        const moneyDropDecimal = result.toFixed(2);
        outputPostResultText(valueMl, moneyDropDecimal);
    }
};

function calPricePerCap(e) {
    e.preventDefault();
    changeResultTitle();
    calculatePricePerCapacity(originMl.value, won.value, resultMl.value);
}

btn.addEventListener("click", calPricePerCap);
