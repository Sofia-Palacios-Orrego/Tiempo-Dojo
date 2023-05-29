function acceptingCookies () {
    let message = document.querySelector(".cookies-box");
    message.remove();
}


function alertCity(element) {
    alert("Loading weather report...");
}

function switchingMetric(element) {
    let temperatures = document.querySelectorAll(".highest, .lowest");


    for(let i=0; i<temperatures.length; i++){

        let currentTemp = Number(temperatures[i].textContent);
        if(element.value === "celsius"){
            let celsiusResult = (currentTemp - 32) / 1.8;
            temperatures[i].textContent = parseInt(celsiusResult);
        }
        else{
            let farenheitResult = (9/5) * currentTemp + 32;
            temperatures[i].textContent = parseInt(farenheitResult);
        }
    }

}