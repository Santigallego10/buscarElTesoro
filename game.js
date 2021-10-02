const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clickas = 0;

$map.addEventListener("click", function (e) {
    clickas++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML=`<h1>${distanceHint}<h1>`;

    if (distance < 20) {
        alert("Encontraste el tesoro en "+clickas+" clicks");
        location.reload();
    }
})

