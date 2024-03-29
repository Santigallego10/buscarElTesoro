function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if (distance < 30) {
        return "Muy caliente";
    }else if (distance < 40){
        return "Caliente";
    }else if (distance < 60){
        return "tibio";
    }else if (distance < 100){
        return "normal";
    }else if (distance < 180){
        return "Frio";
    }else if (distance < 360){
        return "congelado";
    }else{
        return "Ni cerquita";
    }
}