// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
        } else {
            navbar.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
        }

    });

}

// ===============================
// Button Click Animation
// ===============================

const buttons = document.querySelectorAll(".btn-green, .btn-white");

if (buttons.length > 0) {

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.95)";

            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);

        });

    });

}


// ==============================
// LOGIN FUNCTION
// ==============================

function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {

        alert("Please enter both Username and Password.");

        return;
    }

    alert("Login Successful!");

    window.location.href = "dashboard.html";
}

const user = localStorage.getItem("username");

const welcome = document.getElementById("welcomeUser");

if (user && welcome) {

    welcome.innerHTML = "👋 Welcome, " + user;

}


// ==============================
// LIVE SENSOR SIMULATION
// ==============================

function updateDashboard() {

    const temperature = Math.floor(Math.random() * 8) + 25;   //25-32

    const moisture = Math.floor(Math.random() * 30) + 60;      //60-89

    const healthy = Math.floor(Math.random() * 8) + 90;        //90-97

    const alerts = Math.floor(Math.random() * 5);              //0-4

    document.getElementById("temperature").innerHTML = temperature + "°C";

    document.getElementById("moisture").innerHTML = moisture + "%";

    document.getElementById("healthy").innerHTML = healthy + "%";

    document.getElementById("alerts").innerHTML = alerts;

}

if(document.getElementById("temperature")){

    setInterval(updateDashboard,3000);

}



function predictDisease() {

    document.getElementById("result").innerHTML = `
        <h2>🍂 Leaf Blight</h2>
        <p><b>Confidence:</b> 96%</p>
        <p><b>Treatment:</b> Apply Copper Fungicide.</p>
        <p><b>Prevention:</b> Remove infected leaves.</p>
    `;

}

const cameraImages = [

"images/drone.jpg",

"images/field1.jpg",

"images/field2.jpg",

"images/field3.jpg"

];

let currentCamera = 0;

function changeCamera(){

const img=document.querySelector(".camera-box img");

currentCamera++;

if(currentCamera>=cameraImages.length){

currentCamera=0;

}

img.src=cameraImages[currentCamera];

}

function updateWeather(){

    if(!document.getElementById("weatherTemp")) return;

    document.getElementById("weatherTemp").innerHTML =
        Math.floor(Math.random()*8+27)+"°C";

    document.getElementById("weatherHumidity").innerHTML =
        Math.floor(Math.random()*20+65)+"%";

    document.getElementById("weatherWind").innerHTML =
        Math.floor(Math.random()*10+8)+" km/h";

    document.getElementById("weatherRain").innerHTML =
        Math.floor(Math.random()*60)+"%";

}

updateWeather();

setInterval(updateWeather,5000);

function showZone(zone, status){

    let temp = Math.floor(Math.random()*6)+27;

    let moisture = Math.floor(Math.random()*20)+65;

    document.getElementById("zoneInfo").innerHTML = `

        <h3>📍 Zone ${zone}</h3>

        <p><strong>Status:</strong> ${status}</p>

        <p><strong>🌡 Temperature:</strong> ${temp}°C</p>

        <p><strong>💧 Soil Moisture:</strong> ${moisture}%</p>

        <p><strong>🤖 AI Recommendation:</strong> Monitor this area regularly.</p>

        <p><strong>💊 Suggested Action:</strong> Apply treatment if disease symptoms increase.</p>

    `;

    if(status === "Healthy"){

    addAlert(`🟢 Zone ${zone} is Healthy`,"success");

}
else if(status === "Low Moisture"){

    addAlert(`🟡 Zone ${zone} has Low Soil Moisture`,"warning");

}
else{

    addAlert(`🔴 Zone ${zone} - ${status}`,"danger");

}
}

function addAlert(message, type){

    const alertBox = document.getElementById("alertBox");

    if(!alertBox) return;

    const div = document.createElement("div");

    div.classList.add("alert");

    if(type==="danger"){

        div.classList.add("danger-alert");

    }

    else if(type==="warning"){

        div.classList.add("warning-alert");

    }

    else{

        div.classList.add("success");

    }

    const time = new Date().toLocaleTimeString();

    div.innerHTML = `${time} | ${message}`;

    alertBox.prepend(div);

    if(alertBox.children.length > 6){

        alertBox.removeChild(alertBox.lastChild);

    }

}

// =============================
// ANALYTICS CHARTS
// =============================

// Temperature Chart
const tempCtx = document.getElementById("tempChart");

if (tempCtx) {
    new Chart(tempCtx, {
        type: "line",
        data: {
            labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
            datasets: [{
                label: "Temperature (°C)",
                data: [28,30,29,31,32,30,29],
                borderColor: "#ff5722",
                backgroundColor: "rgba(255,87,34,0.2)",
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Soil Moisture Chart
const moistureCtx = document.getElementById("moistureChart");

if (moistureCtx) {
    new Chart(moistureCtx,{
        type:"bar",
        data:{
            labels:["Zone A","Zone B","Zone C","Zone D"],
            datasets:[{
                label:"Moisture %",
                data:[72,65,81,58],
                backgroundColor:[
                    "#4CAF50",
                    "#2196F3",
                    "#FFC107",
                    "#FF5722"
                ]
            }]
        },
        options:{
            responsive:true
        }
    });
}

// Crop Health Chart
const healthCtx = document.getElementById("healthChart");

if (healthCtx) {
    new Chart(healthCtx,{
        type:"doughnut",
        data:{
            labels:["Healthy","Diseased"],
            datasets:[{
                data:[85,15],
                backgroundColor:[
                    "#2ecc71",
                    "#e74c3c"
                ]
            }]
        },
        options:{
            responsive:true
        }
    });
}

// Disease Distribution
const diseaseCtx = document.getElementById("diseaseChart");

if (diseaseCtx) {
    new Chart(diseaseCtx,{
        type:"pie",
        data:{
            labels:[
                "Leaf Spot",
                "Rust",
                "Blight",
                "Healthy"
            ],
            datasets:[{
                data:[15,20,10,55],
                backgroundColor:[
                    "#f39c12",
                    "#e74c3c",
                    "#9b59b6",
                    "#2ecc71"
                ]
            }]
        },
        options:{
            responsive:true
        }
    });
}

// ==========================
// DETECTION HISTORY
// ==========================

function addHistory(crop, disease, confidence) {

    const table = document.getElementById("historyBody");

    const row = table.insertRow(0);

    const now = new Date().toLocaleTimeString();

    let status = "Safe";

    if(confidence >= 95)
        status = "High Risk";
    else if(confidence >= 80)
        status = "Medium Risk";

    row.innerHTML = `
        <td>${now}</td>
        <td>${crop}</td>
        <td>${disease}</td>
        <td>${confidence}%</td>
        <td>${status}</td>
    `;
}