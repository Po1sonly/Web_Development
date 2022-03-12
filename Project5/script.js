let imgArray = ["assets/pic1.jpg", "assets/pic2.jpg", "assets/pic3.jpg", "assets/pic4.jpg", "assets/pic5.jpg", "assets/pic6.jpg"]

var target = document.getElementById('images');
var counter = 1;

function nextPic(){
    if (counter > imgArray.length - 1){
        counter = 0;
    } 
    target.src = imgArray[counter];
    counter += 1;
}

function prevPic(){
    if (counter < 0){
        counter = imgArray.length - 1;
    }
    target.src = imgArray[counter];
    counter -=1;
    
}