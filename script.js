
let start = document.getElementById("sButton");
start.addEventListener("click", create);

let brush = document.getElementById("bButton");
brush.addEventListener("click", createB);

let rainbow = document.getElementById("rButton");
rainbow.addEventListener("click", createR);


function create(){
    //window.location.reload(false);
    //document.location.reload();
    let count = prompt("input number of squares!"),

    board = document.getElementById('board'),
    fragment = document.createDocumentFragment();
    blockSize = 1000/count + "px";

    if(board.childElementCount > 0){
        board.innerHTML="";
    }


    // rows
    for (var i = 0; i < count; i++) {

        // columns
        for (var j = 0; j < count; j++) {
            div = document.createElement('div');
            div.className = 'pixel';
            fragment.appendChild(div);
        }
    }

    board.appendChild(fragment);

    let pixel = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.height =  blockSize;
        pixel[i].style.width = blockSize;

        // normal teal drawing
        pixel[i].addEventListener("mouseenter", changeColor);

        function changeColor(){
            // normal color
            this.style.backgroundColor = "#5A3E36";
            // rainbow drawing
            let color="#"+((1<<24)*Math.random()|0).toString(16);
            //this.style.backgroundColor = color;
        }
    }
};

function createB(){

     let pixel = document.querySelectorAll(".pixel");
     for (let i = 0; i < pixel.length; i++) {
         pixel[i].style.height =  blockSize;
         pixel[i].style.width = blockSize;

         // normal teal drawing
         pixel[i].addEventListener("mouseenter", changeColor);

         function changeColor(){
             // normal color
             this.style.backgroundColor = "#5A3E36";

             var opacity = this.style.opacity;
             this.style.opacity = opacity ? (parseFloat(opacity) + 0.25) : 0.25;


             // rainbow drawing
             //let color="#"+((1<<24)*Math.random()|0).toString(16);
             //this.style.backgroundColor = color;
         }
     }
 };

function createR(){

    let pixel = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.height =  blockSize;
        pixel[i].style.width = blockSize;

        // normal teal drawing
        pixel[i].addEventListener("mouseenter", changeColor);

        function changeColor(){
            // rainbow drawing
            let color="#"+((1<<24)*Math.random()|0).toString(16);
            this.style.backgroundColor = color;
            this.style.opacity = "1";
        }
    }
};







