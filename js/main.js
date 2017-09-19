$(function () {

    var $square = $("#square");
    var $innerSquare = $("#inner-square");
    var $canvasDiv = document.getElementById("myCanvas");
    var myPath;

    $square.mouseleave(function (event) {
        console.log("mouse out of bounds");
    })














  //--------------------------------------------

    paper.setup($canvas);

    var $canvas = document.createElement('canvas');
    $canvas.setAttribute('width', '500px');
    $canvas.setAttribute('height', '500px');
    $canvas.setAttribute('id', 'canvas');
    $canvasDiv.appendChild($canvas);
    if(typeof G_vmlCanvasManager != 'undefined') {
        $canvas = G_vmlCanvasManager.initElement($canvas);
    }
    context = $canvas.getContext("2d");


    $canvas = $("#canvas")

    $canvas.mousedown(function(e) {
            
      paint = true;
      addClick(e.clientX - 170, e.clientY - 60);
      redraw();
    });

    $canvas.mousemove(function(e) {
      if(paint){
        addClick(e.pageX - 170, e.pageY - 60, true);
        redraw();
      }
    });

    $canvas.mouseup(function(e) {
      paint = false;
    });

    $canvas.mouseleave(function(e) {
      paint = false;
    });

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging) {
      clickX.push(x);
      clickY.push(y);
      clickDrag.push(dragging);
    }

    function redraw() {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
      
      context.strokeStyle = "#df4b26";
      context.lineJoin = "round";
      context.lineWidth = 5;
                
      for(var i=0; i < clickX.length; i++) {        
        context.beginPath();
        if(clickDrag[i] && i){
          context.moveTo(clickX[i-1], clickY[i-1]);
         }else{
           context.moveTo(clickX[i]-1, clickY[i]);
         }
         context.lineTo(clickX[i], clickY[i]);
         context.closePath();
         context.stroke();
      }
    }

    

});