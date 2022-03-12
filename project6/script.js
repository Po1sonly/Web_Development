var colorArray = ["#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", 
"#283593", "#1A237E", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"];

let counter = 1;

function changeBG(){
    if(counter == colorArray.length - 1){
        counter = 0;
    }
    document.body.style.backgroundColor = colorArray[counter];
    counter+=1;
}

setInterval(changeBG, 1000);
setInterval(clockTime, 1000);

function clockTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (hour == 0){
        hour = 12;
    } else{
        if (hour > 12){
            hour = hour - 12;
        }
    }

    hour = update(hour);
    minute = update(minute);
    second = update(second);
    console.log(minute);
    document.getElementById("digital-clock").innerText = hour + ":" + minute + ":" + second;
}
function update(t){
    if (t < 10){
        return "0" + t;
    } else {
        return t;
    }
}
