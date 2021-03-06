const btn = document.querySelector("button");
const originMl = document.querySelector("#Xml");
const resultMl = document.querySelector("#Yml");
const won = document.querySelector("#Xwon");
const calResult = document.querySelector("h4");
const resultTitle = document.querySelector(".result_window_title");

function changeResultTitle() {
    resultTitle.innerHTML = "κ³μ°κ²°κ³Ό";
}

function failedCalculationsText() {
    calResult.innerHTML = `π’λ°μ€μλ, ν¬μ₯μκ°, μμμμμκ°μ λͺ¨λ μ μ΄μ£ΌμΈμ.π’`;
}

function outputPostResultText(volume, finalValue) {
    calResult.innerHTML = `πμ©λμ΄ ${volume}mlμΌ λ κ°κ²©μ ${finalValue}μ μλλ€.π`;
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
