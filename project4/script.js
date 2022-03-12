var imageArray = ["assets/pic2.jpg", "assets/pic3.jpg", "assets/pic1.jpg"];
var index = 0;

function rotateImage(){
    document.querySelector("img").setAttribute("src", imageArray[index]);
    index++;
    if (index >= imageArray.length){
        index = 0;
    }
}

setInterval(rotateImage, 3000);
