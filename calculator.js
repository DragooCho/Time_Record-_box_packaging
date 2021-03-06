const btn = document.querySelector("button");
const onePackagingTime = document.querySelector("#onePackagingTime");
const XXBox = document.querySelector("#XXBox");

const startingHoursTime = document.querySelector("#startingHoursTime");
const startingTime = document.querySelector("#startingTime");

const calResult = document.querySelector("h4");
const resultTitle = document.querySelector(".result_window_title");

////////////////////////////////////////////////////////////////////////

function changeResultTitle() {
    resultTitle.innerHTML = "κ³μ°κ²°κ³Ό";
}
function failedCalculationsText() {
    calResult.innerHTML = `π’μ ν΄μ§ λ°μ€μλ, ν¬μ₯μκ°, μμμμμκ°μ λͺ¨λ μ μ΄μ£ΌμΈμ.π’`;
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function outputPostResultTime(numA, numB, numC, numD) {
    while (calResult.hasChildNodes()) {
        // λΆλͺ¨λΈλκ° μμμ΄ μλμ§ μ¬λΆλ₯Ό μμλΈλ€
        calResult.removeChild(calResult.firstChild);
    }

    let setNumC = numC;
    let setNumD = numD;

    for (let i = 1; i <= numB; i++) {
        let sumM = setNumD + numA;

        if (60 <= sumM) {
            setNumD = sumM - 60;
            setNumC = setNumC + 2;
        } else {
            setNumD = sumM;
            setNumC = setNumC + 1;
        }

        if (24 <= setNumC) {
            setNumC -= 24;
        }

        const node = document.createElement("LI");

        const textnode = document.createTextNode(
            `${i}λ²μ§Έ ν¬μ₯ μμ±μκ°: ${setNumC}μ ${setNumD}λΆ π`
        );

        node.appendChild(textnode);
        calResult.appendChild(node);
    }
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const calculatePackagingTime = (
    onetime,
    xBox,
    startingHourClock,
    startingClock
) => {
    if (
        onetime === "" ||
        onetime >= 60 ||
        onetime < 0 ||
        xBox === "" ||
        xBox > 50 ||
        xBox < 0 ||
        startingClock === "" ||
        startingClock > 23 ||
        startingClock < 0 ||
        startingHourClock === "" ||
        startingHourClock > 60 ||
        startingHourClock < 0
    ) {
        failedCalculationsText();
    } else {
        let firstPackagingTime = Number(onetime);
        let transXBox = Number(xBox);
        let transStartingClock = Number(startingClock);
        let transStartingHourClock = Number(startingHourClock);
        outputPostResultTime(
            firstPackagingTime,
            transXBox,
            transStartingClock,
            transStartingHourClock
        );
    }
};

////////////////////////////////////////////////////////////////////////

function calPackagingTime(e) {
    e.preventDefault();
    changeResultTitle();
    calculatePackagingTime(
        onePackagingTime.value,
        XXBox.value,
        startingTime.value,
        startingHoursTime.value
    );
}

btn.addEventListener("click", calPackagingTime);
