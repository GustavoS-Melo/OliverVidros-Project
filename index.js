let count =1;
document.getElementById("radio-servico1").checked = true;

setInterval( function(){
    nextImage();

}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio-servico"+count).checked = true;
}