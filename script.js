let selectedColor = "black";
let cores = ['black','yellow','blue','green'];
let pixelBoard = document.querySelector('#pixel-board');
let size1;
let oldSize = 0;
let first = 0;
document.getElementById('black').setAttribute('class','color , selected');
if (document.getElementById(1) == null && first == 0 ) {
    for (let index = 0; index < 25; index++,oldSize++) {
        let pixel = document.createElement('div');
        pixelBoard.appendChild(pixel);
        pixel.setAttribute('class','pixel');
        pixel.setAttribute('id',index);
        pixel.setAttribute('onclick',"document.getElementById("+index+").style.backgroundColor = selectedColor;");
    }
    pixelBoard.style.width = '215px';
    first=1;
}
    function geraQuadro(size){
        size1 = size *size;
        let width1 = size *44;        
        if (document.getElementById(1) != null) {
            for (let index = 0; index < oldSize; index++) {
                    document.getElementById(index).remove();
                    console.log(index);
            }
        }
        oldSize=0;
        for (let index = 0; index < size1; index++,oldSize++) {
            let pixel = document.createElement('div');
            pixelBoard.appendChild(pixel);
            pixel.setAttribute('class','pixel');
            pixel.setAttribute('id',index);
            pixel.setAttribute('onclick',"document.getElementById("+index+").style.backgroundColor = selectedColor;");
        }
        pixelBoard.style.width = width1+'px';
        
    }
    function changeColor (selectedColor1){
        for (let i in cores) {
            document.getElementById(cores[i]).setAttribute('class','color');
        }
        document.getElementById(selectedColor1).setAttribute('class','color , selected');
        selectedColor = selectedColor1;
    }
     function limpar() {
        for (let index = 0; index < 25; index++) {
            document.getElementById(index).style.backgroundColor = 'white';
        
        }
    }



