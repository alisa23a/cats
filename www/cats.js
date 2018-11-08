var stopGame = false;

function stop (){
  stopGame = true;
  console.log(stopGame);
}

function start (){
  stopGame = false;
  console.log(stopGame);
}

var lettYA;
var score = 0;
var newScore = 0;
var deltaScore = 0;
var deltaScoreDisplayed = false;
var golbalID;
var stop = document.getElementById('stop');
var canvUn;
var ctxUn;
var getcellId;
var newWidth;
var newHeight;
var qt;
var pic;
var stepUp;
var stepDown;
var threeInTop;
var freez = false;
var dumping = false;
var scoreText = '';
var cellId_info = 6582598;
var infoRequest = false;
var aColor = 'rgba(186, 216, 67, 1)';
var bColor = 'rgba(255, 255, 255, 1)';
var cColor = 'rgba(0, 0, 0, 1)';
var col_0 = aColor;
var col_1 = aColor;
var col_2 = aColor;
var col_3 = aColor;
var col_4 = aColor;
var col_5 = aColor;
var col_6 = aColor;
var col_7 = aColor;
var cWh = 'rgba(255, 255, 255, 1)';
var cGn = 'rgba(255, 165, 0, 1)';
var cGy = 'rgba(134, 134, 134, 1)';
var cBc = 'rgba(5, 5, 5, 1)';
var cGr = 'rgba(211, 255, 125, 1)';
var colorSchemeWhite = [ 'rgba(255, 255, 255, 1)','rgba(195, 222, 255, 1)', 'rgba(255, 145, 180, 1)', 'rgba(0, 0, 0, 1)' ];
var colorSchemeGinger = [ 'rgba(255, 165, 0, 1)','rgba(186, 216, 67, 1)', 'rgba(134, 134, 134, 1)', 'rgba(0, 0, 0, 1)' ];
var colorSchemeGray = [ 'rgba(134, 134, 134, 1)','rgba(255, 165, 0, 1)', 'rgba(1, 1, 1, 1)', 'rgba(0, 0, 0, 1)' ];
var colorSchemeBlack = [ 'rgba(5, 5, 5, 1)','rgba(255, 255, 0, 1)', 'rgba(134, 134, 134, 1)', 'rgba(134, 134, 134, 1)' ];
var colorSchemeUnder_0 =	[ hexedColor_0, hexedColor_0, hexedColor_0 ];
var colorSchemeUnder_1 =	[ hexedColor_1, hexedColor_1, hexedColor_1 ];
var colorSchemeUnder_2 =	[ hexedColor_2, hexedColor_2, hexedColor_2 ];
var colorSchemeUnder_3 =	[ hexedColor_3, hexedColor_3, hexedColor_3 ];
var colors = [colorSchemeWhite, colorSchemeGinger, colorSchemeGray, colorSchemeBlack];
var randColor = Math.floor(Math.random() * ( colors.length ) );

function renewRandColor () { 

    randColor = undefined;
	randColor = Math.floor(Math.random() * ( colors.length )  );
}

var colorScheme_0 = colors[randColor];
var colorScheme_1 = colors[randColor];
var colorScheme_2 = colors[randColor];
var colorScheme_3 = colors[randColor];

function reverseBack_0 () {

    reverseUp_0 = 'off';
	return(reverseUp_0);
}

function reverseBack_1 () {

    reverseUp_1 = 'off';
	return(reverseUp_1);
}

function reverseBack_2 () {

    reverseUp_2 = 'off';
	return(reverseUp_2);
}

function reverseBack_3 () {

    reverseUp_3 = 'off';
	return(reverseUp_3);
}

function createCatCell ( currentPositionY, prevPosYUp, reverseUp_0) {

    this._currentPositionY = currentPositionY;
}

var catCell_0 = new createCatCell();
var catCell_1 = new createCatCell();
var catCell_2 = new createCatCell();
var catCell_3 = new createCatCell();
	
var currentPositionY_0;
var prevPosYUp_0;
var reverseUp_0 = 'off';	
var movingUp_0 = false;
var movingDown_0;
var inUse_0 = false;
var inTop_0 = false;
var inBottom_0 = true;
var cellId_0 = 3799782;
var hexedColor_0;
var check_0 = 'no';
function catUpStart_0() {
	movingUp_0 = true;
}

function catUpStop_0() {
    movingUp_0 = false;
}

function catDownStart_0() {
	movingDown_0 = true;
}

function catDownStop_0() {
    movingDown_0 = false;
}

var curCol_0;
var curCol_1;
var curCol_2;
var curCol_3;

var currentPositionY_1;
var prevPosYUp_1;	
var reverseUp_1 = 'off';
var movingUp_1 = false;
var movingDown_1;
var inUse_1 = false;
var inTop_1 = false;
var inBottom_1 = true;
var cellId_1 = 9851547;
var hexedColor_1;
var check_1 = 'no';

function catUpStart_1() {
	movingUp_1 = true;
}

function catUpStop_1() {
    movingUp_1 = false;
}

function catDownStart_1() {
	movingDown_1 = true;
}

function catDownStop_1() {
    movingDown_1 = false;
}
	
var currentPositionY_2;
var prevPosYUp_2;	
var reverseUp_2 = 'off';
var movingUp_2 = false;
var movingDown_2;
var inUse_2 = false;
var inTop_2 = false;
var inBottom_2 = true;
var cellId_2 = 6467854;
var hexedColor_2;
var check_2 = 'no';

function catUpStart_2() {
	movingUp_2 = true;
}

function catUpStop_2() {
    movingUp_2 = false;
}

function catDownStart_2() {
	movingDown_2 = true;
}

function catDownStop_2() {
    movingDown_2 = false;
}

var currentPositionY_3;
var prevPosYUp_3;	
var reverseUp_3 = 'off';
var movingUp_3 = false;
var movingDown_3;
var inUse_3 = false;
var inTop_3 = false;
var inBottom_3 = true;
var cellId_3 = 5785578;
var hexedColor_3;
var check_3 = 'no';

function catUpStart_3() {
	movingUp_3 = true;
}

function catUpStop_3() {
    movingUp_3 = false;
}

function catDownStart_3() {
	movingDown_3 = true;
}

function catDownStop_3() {
    movingDown_3 = false;
}
	
var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
context.imageSmoothingEnabled = true;
canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.style.margin = '0px';
canvas.style.padding = '0px';
canvas.style.zIndex = '50';

var canvBg = document.getElementById('canvasBg'),
ctxBg = canvBg.getContext('2d');
canvBg.style.position = 'absolute';
canvBg.style.top = '0px';
canvBg.style.left = '0px';
canvBg.style.margin = '0px';
canvBg.style.padding = '0px';
canvBg.style.zIndex = '40';	

var canvUn = document.createElement('canvas'),
ctxUn = canvUn.getContext('2d');
canvUn.style.position = 'absolute';
canvUn.style.top = '0px';
canvUn.style.left = '0px';
canvUn.style.margin = '0px';
canvUn.style.padding = '0px';
canvUn.style.zIndex = '30';
gameArea.appendChild(canvUn);

var canvUpp = document.getElementById('canvasUpper'),
ctxUpp = canvUpp.getContext('2d');
canvUpp.style.position = 'absolute';
canvUpp.style.top = '48.0%';
canvUpp.style.left = '0px';
canvUpp.style.zIndex = '80';

var canvScore = document.getElementById('canvasUpper'),
ctxScore = canvScore.getContext('2d');
canvScore.style.position = 'absolute';
canvScore.style.top = '48.0%';
canvScore.style.left = '0px';
canvScore.style.zIndex = '90';

var canvInfo = document.createElement('canvas');		
ctxInfo = canvInfo.getContext('2d');
canvInfo.style.position = 'absolute';
canvInfo.style.top = '0px';
canvInfo.style.left = '0px';
canvInfo.style.margin = '0px';
canvInfo.style.padding = '0px';
canvInfo.style.zIndex = "1000";	

function resizeSaver() {
    var gameArea = document.getElementById('gameArea');
    var widthToHeight = 16 / 9;
    newWidth = window.innerWidth;
    newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;
    
    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        gameArea.style.height = newHeight + 'px';
        gameArea.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        gameArea.style.width = newWidth + 'px';
        gameArea.style.height = newHeight + 'px';
    }

    document.body.style.backgroundColor = '#555555';    
    gameArea.style.marginTop = (-newHeight / 2) + 'px';
    gameArea.style.marginLeft = (-newWidth / 2) + 'px';

    canvas.width = newWidth;
    canvas.height = newHeight;

	qt = newWidth / 1000;		
	
	function saver(){	
		context.save();
		context.fillStyle = 'rgba(195, 222, 255, 1)';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.restore();
		
		var op = 0;		
		var cWhOp = 'rgba(255, 255, 255, ';		
		var cGnOp = 'rgba(255, 165, 0, ';		
		var cGyOp = 'rgba(134, 134, 134, ';		
		var cBc = 'rgba(5, 5, 5, ';
		
		lettYA = canvas.height / 2;
		
		function catsFrame() {			
			context.save();
			context.fillStyle = 'rgba(195, 222, 255, 1)';
			context.fillStyle = 'rgba(195, 222, 255, 1)';
			context.strokeStyle = 'rgba(0, 0, 0, ' + op + ')';
			context.lineWidth = 3 * qt;
			context.fillRect(100 * qt, 150 * qt, 800 * qt, 250 * qt);
			context.strokeRect(103 * qt, 153 * qt, 794 * qt, 246 * qt);
			context.restore();
			op += 0.002;
		}		
		
		function letter (lett, lettX, lettY, col) {			
			fontLoad ();
			context.save();
			context.fillStyle = col + op + ')';
			context.strokeStyle = 'rgba(0, 0, 0, ' + op + ')';
			context.lineWidth = 3 * qt;
			context.font = 250 * qt + 'px a_futurarounddemiregular';
			context.textAlign = "center";
			context.textBaseline = "middle";
			context.fillText(lett, lettX, lettY);
			context.strokeText(lett, lettX, lettY);
			context.restore();
			op += 0.001;		
		}
		
		function letterADown (lettX, col) {			
			fontLoad ();
			context.save();
			context.fillStyle = col + op + ')';
			context.strokeStyle = 'rgba(0, 0, 0, ' + op + ')';
			context.lineWidth = 3 * qt;
			context.font = 250 * qt + 'px a_futurarounddemiregular';
			context.textAlign = "center";
			context.textBaseline = "middle";
			context.fillText('A', lettX, lettYA);
			context.strokeText('A', lettX, lettYA);
			context.restore();
			op += 0.002;
			context.save();
			context.fillStyle = 'rgba(195, 222, 255, 1)';
			context.fillRect(100 * qt, 400 * qt, 800 * qt, canvas.height - 400 * qt);
			context.restore();
				
			if( lettYA < canvas.height / 2 + 275 * qt ) {			
				lettYA += 30 * qt;				
			}
			
		}
			
		function letterAUp (lettX, col) {			
			fontLoad ();
			context.save();
			context.fillStyle = col + op + ')';
			context.strokeStyle = 'rgba(0, 0, 0, ' + op + ')';
			context.lineWidth = 3 * qt;
			context.font = 250 * qt + 'px a_futurarounddemiregular';
			context.textAlign = "center";
			context.textBaseline = "middle";
			context.fillText('A', lettX, lettYA);
			context.strokeText('A', lettX, lettYA);
			context.restore();
			op += 0.002;
			context.save();
			context.fillStyle = 'rgba(195, 222, 255, 1)';
			context.fillRect(100 * qt, 400 * qt, 800 * qt, canvas.height - 400 * qt);
			context.restore();
				
			if( lettYA > canvas.height / 2 ) {			
				lettYA -= 20 * qt;				
			}
			
			if(lettYA < canvas.height / 2) {				
				lettYA = canvas.height / 2;			
			}			
		}

		function animateSaver_0() {
			catsFrame();			
			letter('C', 200 * qt, canvas.height / 2, cWhOp);			
			letter('A', 400 * qt, canvas.height / 2, cBc);			
			letter('T', 600 * qt, canvas.height / 2, cGyOp);			
			letter('S', 800 * qt, canvas.height / 2, cBc);			
			animateSaver_0_Id = requestAnimationFrame(animateSaver_0);
		}		
		
		fontLoad ();		
		var t = setTimeout( function(){			
			animateSaver_0_Id = requestAnimationFrame(animateSaver_0);
		}, 100);
		
		var q = setTimeout( function() {
			cancelAnimationFrame(animateSaver_0_Id);
		}, 2990);

		function animateSaver_1() {			
			catsFrame();			
			letter('C', 200 * qt, canvas.height / 2, cWhOp);			
			letterADown(400 * qt, cBc);			
			letter('T', 600 * qt, canvas.height / 2, cGyOp);			
			letter('S', 800 * qt, canvas.height / 2, cBc);			
			animateSaver_1_Id = requestAnimationFrame(animateSaver_1);
		}		
		
		fontLoad ();		
		var t = setTimeout( function(){			
			animateSaver_1_Id = requestAnimationFrame(animateSaver_1);
		}, 3000);		
		var q = setTimeout( function() {			
			cancelAnimationFrame(animateSaver_1_Id);			
		}, 3500);

		function animateSaver_2() {			
			catsFrame();			
			letter('C', 200 * qt, canvas.height / 2, cWhOp);			
			letterAUp(400 * qt, cGn);			
			letter('T', 600 * qt, canvas.height / 2, cGyOp);			
			letter('S', 800 * qt, canvas.height / 2, cBc);
			animateSaver_2_Id = requestAnimationFrame(animateSaver_2);
		}

		fontLoad ();		
		var t = setTimeout( function(){			
			animateSaver_2_Id = requestAnimationFrame(animateSaver_2);			
		}, 3500);		
		var q = setTimeout( function() {			
			cancelAnimationFrame(animateSaver_2_Id);			
		}, 4500);
	}	
	saver();	
}

function resizeGame() {
    var gameArea = document.getElementById('gameArea');
    var widthToHeight = 16 / 9;
    newWidth = window.innerWidth;
    newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;
    
    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        gameArea.style.height = newHeight + 'px';
        gameArea.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        gameArea.style.width = newWidth + 'px';
        gameArea.style.height = newHeight + 'px';
    }

    document.body.style.backgroundColor = '#555555';    
    gameArea.style.marginTop = (-newHeight / 2) + 'px';
    gameArea.style.marginLeft = (-newWidth / 2) + 'px';

    canvas.width = newWidth;
    canvas.height = newHeight;
    canvBg.width = newWidth;
    canvBg.height = newHeight;	
    canvUn.width = newWidth;
    canvUn.height = newHeight;
    canvUpp.width = newWidth;
    canvUpp.height = newHeight;
	canvInfo.width = newWidth;
	canvInfo.height = newHeight;

    qt = newWidth / 1000;
	context.lineWidth = Math.round (2 * qt);
    ctxBg.lineWidth = Math.round (2 * qt);
	ctxUpp.lineWidth = Math.round (2 * qt);
	
	stepUp = 10 * qt;
	stepDown = 30 * qt;
	
	function saver(){	
		canvas.save();
	}

    rgbHexCase_0 = function(cellId_0) {
        var t_0 = "#000000";
    var h_0 = this.cellId_0.toString(16);
        hexedColor_0 = t_0;
        hexedColor_0 = hexedColor_0.substring(0, t_0.length - h_0.length) + h_0;
    	return (hexedColor_0);
    }(); 

    rgbHexCase_1 = function(cellId_1) {
        var t_1 = "#000000";
        var h_1 = this.cellId_1.toString(16);
        hexedColor_1 = t_1;
        hexedColor_1 = hexedColor_1.substring(0, t_1.length - h_1.length) + h_1;
        return (hexedColor_1);
    }();

    rgbHexCase_2 = function(cellId_2) {
        var t_2 = "#000000";
        var h_2 = this.cellId_2.toString(16);
        hexedColor_2 = t_2;
        hexedColor_2 = hexedColor_2.substring(0, t_2.length - h_2.length) + h_2;
    	return (hexedColor_2);
    }();

    rgbHexCase_3 = function(cellId_3) {
        var t_3 = "#000000";
        var h_3 = this.cellId_3.toString(16);
        hexedColor_3 = t_3;
        hexedColor_3 = hexedColor_3.substring(0, t_3.length - h_3.length) + h_3;
    	return (hexedColor_3);
    }();

	rgbHexCase_info = function(cellId_info) {
        var t_info = "#000000";
        var h_info = this.cellId_info.toString(16);
        hexedColor_info = t_info;
        hexedColor_info = hexedColor_info.substring(0, t_info.length - h_info.length) + h_info;
    	return (hexedColor_info);
    }();

    function writeMessage(canvas, message) {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height / 10);
		context.fillStyle = 'rgba(225, 238, 255, 1)';
		context.fillRect(0, 0, canvas.width, canvas.height / 10);

        context.font = 50 * qt + 'px a_futurarounddemiregular';
		context.textAlign = "right";
		context.textBaseline = "middle"; 
        context.fillStyle = 'rgba(195, 222, 255, 1)';
        context.fillText(message, canvas.width - 20 * qt, canvas.height / 20 + 2 * qt);
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var pixelColor = ctxUn.getImageData(mousePos.x, mousePos.y, 1, 1);

        function rgbToHex(r, g, b) {
            if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
            return ((r << 16) | (g << 8) | b).toString(16);
        }

        var hex = rgbToHex(pixelColor.data[0], pixelColor.data[1], pixelColor.data[2]);
        var hexNum = Number(hex); 

        getcellId = function(hexNum){ return parseInt(hex, 16); } ();

       check_0 = function(check_0) {
	        check_0 = 'no';
            if( this.getcellId == this.cellId_0 ) { 
                check_0 = 'yes_0';
				reverseUp_0 = 'on';					
            }
			return check_0;
        } ();

        check_1 = function(check_1) {
            check_1 = 'no';		
			if( this.getcellId == this.cellId_1 ) {
				check_1 = 'yes_1';
				reverseUp_1 = 'on';
			}
			return check_1;
        } ();

        check_2 = function(check_2) {
            check_2 = 'no';		
			if( this.getcellId == this.cellId_2 ) {
				check_2 = 'yes_2';
				reverseUp_2 = 'on';
			}
			return check_2;
        } ();

        check_3 = function(check_3) {
            check_3 = 'no';		
			if( this.getcellId == this.cellId_3 ) {
				check_3 = 'yes_3';
				reverseUp_3 = 'on';
			}
			return check_3;
        } ();

		infoRequest = function(infoRequest) {
            check_info = 'no';		
			if( this.getcellId == this.cellId_info ) {
			
				infoRequest = true;
				showInfo ();
				stopGame = true;
			} 
			return infoRequest;
			
        } ();
		console.log(stopGame);
    }, false);

	function drawBg () {
			
		ctxBg.save();
		ctxBg.fillStyle = 'rgba(195, 222, 255, 1)';
		ctxBg.fillRect(0, 0, newWidth, newHeight);
	}
		
	drawBg();		
	ctxBg.save();
    ctxBg.fillStyle = 'rgba(186, 216, 67, 1)';
	ctxBg.beginPath();
	ctxBg.moveTo(120 * qt, 180 * qt);
	ctxBg.lineTo(880 * qt, 180 * qt);
	ctxBg.lineTo(950 * qt, 270 * qt);
	ctxBg.lineTo(50 * qt, 270 * qt);
	ctxBg.lineTo(120 * qt, 180 * qt);
	ctxBg.closePath();
	ctxBg.fill();
	ctxBg.stroke();
	ctxBg.save();
	ctxBg.fillStyle = 'rgba(100, 123, 55, 1)';		
	drawEllipse (ctxBg, 200 * qt, 220 * qt, 240 * qt, 60 * qt);
	drawEllipse (ctxBg, 400 * qt, 220 * qt, 240 * qt, 60 * qt);
	drawEllipse (ctxBg, 600 * qt, 220 * qt, 240 * qt, 60 * qt);
	drawEllipse (ctxBg, 800 * qt, 220 * qt, 240 * qt, 60 * qt);		
    ctxBg.restore();	
	context.save();
    context.fillStyle = 'rgba(225, 238, 255, 1)';
    context.fillRect(0, 0, canvas.width, canvas.height / 10);
    context.restore();	
	context.save();
    context.strokeStyle = 'rgba(0, 0, 0, 1)';
    context.beginPath();
	context.moveTo(0, canvas.height / 10 - qt);
	context.lineTo(canvas.width, canvas.height / 10 - 2 * qt);
	context.lineWidth = 2 * qt;
	context.closePath();
    context.restore();
	var infoButtonColor = 'rgba(195, 222, 255, 1)';

    function drawInfoButton () {
		changeInfoButtonColor();
		context.save();
		context.fillStyle = 'rgba(225, 238, 255, 1)';
		context.fillRect(18 * qt, 0, 44 * qt, newHeight / 10);
		context.restore();
		context.save();
		context.font = 50 * qt + 'px a_futurarounddemiregular';
		context.textAlign = "left";
		context.textBaseline = "middle"; 
        context.fillStyle = 'rgba(195, 222, 255, 1)';
        context.fillText('?', 28 * qt, canvas.height / 20 + 0 * qt);
		
		context.restore();
	}
	
	function drawInfoButtonUnder () {	
		ctxUn.save();
		ctxUn.beginPath();
		ctxUn.arc(40 * qt, 28 * qt, 20 * qt, 0 * Math.PI, 2 * Math.PI);
		ctxUn.fillStyle = hexedColor_info;
		ctxUn.fill();
		ctxUn.closePath();
		ctxUn.restore();	
	}

	function changeInfoButtonColor() {
	
		if (infoRequest == true) {
	
			infoButtonColor = 'rgba(200, 100, 200, 1)';
			
		
		}
	
	}
		
	ctxUpp.save();
    ctxUpp.fillStyle = 'rgba(211, 255, 125, 1)';
    ctxUpp.fillRect(  50 * qt, 0 * qt, 900 * qt, 250 * qt );
	ctxUpp.strokeRect(  50 * qt, 0 * qt, 900 * qt, 250 * qt );
	ctxUpp.restore();
	
    function ext(cellNumber) {
			
		var iconCenterX = 170 * qt + cellNumber * 220 * qt;
		var iconCenterY = 125 * qt;			
		ctxUpp.fillRect(iconCenterX - 37.5 * qt, iconCenterY - 37.5 * qt, 75 * qt, 75 * qt);
        ctxUpp.stroke();			
		ctxUpp.arc(iconCenterX, iconCenterY, 36.5 * qt, 0.25 * Math.PI, 2.25 * Math.PI);		
	}

	function clearIcon (cellNumber) {		
	    var iconCenterX = 170 * qt + cellNumber * 220 * qt;
		var iconCenterY = 125 * qt;
        ctxUpp.fillStyle = 'rgba(211, 255, 125, 1)';
        ctxUpp.fillRect(iconCenterX - 37.5 * qt, iconCenterY - 40 * qt, 75 * qt, 80 * qt);			
	}
	
	function drawCheckIconLayer (cellNumber, checkStrokeStyle, checkLineWidth) {
		
		var iconCenterX = 170 * qt + cellNumber * 220 * qt;
		var iconCenterY = 125 * qt;
		ctxUpp.lineCap = "round";		
		ctxUpp.beginPath();			
		ctxUpp.moveTo(iconCenterX, iconCenterY - 40 * qt);
		ctxUpp.lineTo(iconCenterX, iconCenterY + 40 * qt);		
		ctxUpp.strokeStyle = checkStrokeStyle;
		ctxUpp.lineWidth = 1 * qt;
		ctxUpp.beginPath();			
		ctxUpp.moveTo(iconCenterX + 30 * qt, iconCenterY - 30 * qt);
		ctxUpp.lineTo(iconCenterX - 10 * qt, iconCenterY + 30 * qt);
		ctxUpp.strokeStyle = checkStrokeStyle;
		ctxUpp.lineWidth = checkLineWidth;
		ctxUpp.lineCap = "round";			
		ctxUpp.stroke();		
		ctxUpp.beginPath();
		ctxUpp.moveTo(iconCenterX - 30 * qt, iconCenterY + 10 * qt);
		ctxUpp.lineTo(iconCenterX - 10 * qt, iconCenterY + 30 * qt);		
		ctxUpp.strokeStyle = checkStrokeStyle;
		ctxUpp.lineWidth = checkLineWidth;
		ctxUpp.lineCap = "round";			
		ctxUpp.stroke();			
	}

	function drawCheckIcon (cellNumber) {
		ctxUpp.save();
		drawCheckIconLayer ( cellNumber, 'rgba(0, 0, 0, 1)', 15 * qt );
		ctxBg.restore();
		drawCheckIconLayer ( cellNumber, 'rgba(186, 216, 67, 1)', 10 * qt );
		ctxUpp.restore();	
	}
	
	function drawLoadIconCircle_0 (cellNumber, circleStrokeStyle, circleLineWidth ) { 
        ctxUpp.beginPath();        
		ctxUpp.moveTo( 170 * qt + cellNumber * 220 * qt, ( 125 * qt ) - 30 * qt );
		ctxUpp.lineTo( ( 170 * qt + cellNumber * 220 * qt ) + 0.01, ( 125 * qt ) - 30 * qt );		
		ctxUpp.lineCap = "round";
		ctxUpp.strokeStyle = circleStrokeStyle;
		ctxUpp.lineWidth = circleLineWidth;			
	    ctxUpp.stroke();
		ctxUpp.closePath();
	}
	    
	function drawLoadIconCircle_1 (cellNumber, circleStrokeStyle, circleLineWidth ) { 
        ctxUpp.beginPath();        
		ctxUpp.moveTo( 191 * qt + cellNumber * 220 * qt, 103 * qt );
		ctxUpp.lineTo( ( 191 * qt + cellNumber * 220 * qt ) + 0.01, 103 * qt );
		ctxUpp.lineCap = "round";
		ctxUpp.strokeStyle = circleStrokeStyle;
		ctxUpp.lineWidth = circleLineWidth;			
	    ctxUpp.stroke();
		ctxUpp.closePath();
	}
		
	function drawLoadIconCircle_2 (cellNumber, circleStrokeStyle, circleLineWidth ) { 
        ctxUpp.beginPath();        
		ctxUpp.moveTo( 200 * qt + cellNumber * 220 * qt, 125 * qt );
		ctxUpp.lineTo( ( 200 * qt + cellNumber * 220 * qt ) + 0.01, 125 * qt );		
		ctxUpp.lineCap = "round";
		ctxUpp.strokeStyle = circleStrokeStyle;
		ctxUpp.lineWidth = circleLineWidth;			
	    ctxUpp.stroke();
		ctxUpp.closePath();
	}
		
	function drawLoadIconCircle_3 (cellNumber, circleStrokeStyle, circleLineWidth ) { 
        ctxUpp.beginPath();        
		ctxUpp.moveTo( 191 * qt + cellNumber * 220 * qt, 147 * qt );
		ctxUpp.lineTo( ( 191 * qt + cellNumber * 220 * qt ) + 0.01, 147 * qt );		
		ctxUpp.lineCap = "round";
		ctxUpp.strokeStyle = circleStrokeStyle;
		ctxUpp.lineWidth = circleLineWidth;			
		ctxUpp.stroke();
		ctxUpp.closePath();
	}
	
	function drawLoadIconCircle_4 (cellNumber, circleStrokeStyle, circleLineWidth ) { 
        ctxUpp.beginPath();        
		ctxUpp.moveTo( 170 * qt + cellNumber * 220 * qt, 155 * qt );
		ctxUpp.lineTo( ( 170 * qt + cellNumber * 220 * qt ) + 0.01, 155 * qt );
		ctxUpp.lineCap = "round";
		ctxUpp.strokeStyle = circleStrokeStyle;
		ctxUpp.lineWidth = circleLineWidth;			
	    ctxUpp.stroke();
		ctxUpp.closePath();
	}
		
	function drawLoadIconCircle_5 (cellNumber, circleStrokeStyle, circleLineWidth ) { 
        ctxUpp.beginPath();        
		ctxUpp.moveTo( 149 * qt + cellNumber * 220 * qt, 147 * qt );
		ctxUpp.lineTo( ( 149 * qt + cellNumber * 220 * qt ) + 0.01, 147 * qt );
		ctxUpp.lineCap = "round";
		ctxUpp.strokeStyle = circleStrokeStyle;
		ctxUpp.lineWidth = circleLineWidth;			
		ctxUpp.stroke();
		ctxUpp.closePath();
	}
		
	function drawLoadIconCircle_6 (cellNumber, circleStrokeStyle, circleLineWidth ) { 
        ctxUpp.beginPath();        
		ctxUpp.moveTo( 140 * qt + cellNumber * 220 * qt, 125 * qt );
		ctxUpp.lineTo( ( 140 * qt + cellNumber * 220 * qt ) + 0.01, 125 * qt );		
		ctxUpp.lineCap = "round";
		ctxUpp.strokeStyle = circleStrokeStyle;
		ctxUpp.lineWidth = circleLineWidth;			
	    ctxUpp.stroke();
		ctxUpp.closePath();
	}
		
	function drawLoadIconCircle_7 (cellNumber, circleStrokeStyle, circleLineWidth ) { 
        ctxUpp.beginPath();        
		ctxUpp.moveTo( 149 * qt + cellNumber * 220 * qt, 103 * qt );
		ctxUpp.lineTo( ( 149 * qt + cellNumber * 220 * qt ) + 0.01, 103 * qt );		
		ctxUpp.lineCap = "round";
		ctxUpp.strokeStyle = circleStrokeStyle;
		ctxUpp.lineWidth = circleLineWidth;			
	    ctxUpp.stroke();
		ctxUpp.closePath();
	}
	
	
	function drawLoadIcon (cellNumber) { 
		drawLoadIconCircle_0 ( cellNumber, cColor, 15 * qt); 
		drawLoadIconCircle_0 ( cellNumber, col_0, 10 * qt);
		drawLoadIconCircle_1 ( cellNumber, cColor, 15 * qt);
		drawLoadIconCircle_1 ( cellNumber, col_1, 10 * qt);
		drawLoadIconCircle_2 ( cellNumber, cColor, 15 * qt);
		drawLoadIconCircle_2 ( cellNumber, col_2, 10 * qt);
		drawLoadIconCircle_3 ( cellNumber, cColor, 15 * qt);
		drawLoadIconCircle_3 ( cellNumber, col_3, 10 * qt);
		drawLoadIconCircle_4 ( cellNumber, cColor, 15 * qt);
		drawLoadIconCircle_4 ( cellNumber, col_4, 10 * qt);
		drawLoadIconCircle_5 ( cellNumber, cColor, 15 * qt);
		drawLoadIconCircle_5 ( cellNumber, col_5, 10 * qt);
		drawLoadIconCircle_6 ( cellNumber, cColor, 15 * qt);
		drawLoadIconCircle_6 ( cellNumber, col_6, 10 * qt);
		drawLoadIconCircle_7 ( cellNumber, cColor, 15 * qt);
		drawLoadIconCircle_7 ( cellNumber, col_7, 10 * qt);		
	}
	
    function drawRefreshIconLayer (cellNumber, arrowStrokeStyle, arrowLineWidth) {		
		var iconCenterX = 170 * qt + cellNumber * 220 * qt;
		var iconCenterY = 125 * qt;		
		ctxUpp.lineCap = "round";			
		ctxUpp.beginPath();
		ctxUpp.moveTo(iconCenterX, iconCenterY - 40 * qt);
		ctxUpp.lineTo(iconCenterX, iconCenterY + 40 * qt);		
		ctxUpp.strokeStyle = arrowStrokeStyle;
		ctxUpp.lineWidth = 1 * qt;
		ctxUpp.beginPath();
		ctxUpp.moveTo(iconCenterX - 10 * qt, iconCenterY - 30 * qt);
		ctxUpp.lineTo(iconCenterX - 10 * qt, iconCenterY + 30 * qt);
		ctxUpp.strokeStyle = arrowStrokeStyle;
		ctxUpp.lineWidth = arrowLineWidth;
		ctxUpp.lineCap = "round";			
		ctxUpp.stroke();
		ctxUpp.beginPath();
		ctxUpp.moveTo(iconCenterX - 30 * qt, iconCenterY + 10 * qt);
		ctxUpp.lineTo(iconCenterX - 10 * qt, iconCenterY + 30 * qt);
		ctxUpp.strokeStyle = arrowStrokeStyle;
		ctxUpp.lineWidth = arrowLineWidth;
		ctxUpp.lineCap = "round";			
		ctxUpp.stroke();
		ctxUpp.beginPath(); 
		ctxUpp.moveTo(iconCenterX + 10 * qt, iconCenterY - 30 * qt);
		ctxUpp.lineTo(iconCenterX + 10 * qt, iconCenterY + 30 * qt);
		ctxUpp.strokeStyle = arrowStrokeStyle;
		ctxUpp.lineWidth = arrowLineWidth;
		ctxUpp.lineCap = "round";
		ctxUpp.stroke();
		ctxUpp.beginPath();
		ctxUpp.moveTo(iconCenterX + 10 * qt, iconCenterY - 30 * qt);
		ctxUpp.lineTo(iconCenterX + 30 * qt, iconCenterY - 10 * qt);
		ctxUpp.strokeStyle = arrowStrokeStyle;
		ctxUpp.lineWidth = arrowLineWidth;
		ctxUpp.lineCap = "round";			
		ctxUpp.stroke();
	}
	
	function drawRefreshIcon (cellNumber) { 
		ctxUpp.save();
		drawRefreshIconLayer ( cellNumber, 'rgba(0, 0, 0, 1)', 15 * qt );
		ctxBg.restore();
		drawRefreshIconLayer ( cellNumber, 'rgba(186, 216, 67, 1)', 10 * qt ); 
		ctxUpp.restore();		
	}

    function drawEllipse(contextName, centerX, centerY, width, height) { 
        contextName.save();
        contextName.beginPath();		
        contextName.moveTo(centerX, centerY - height/2);
        contextName.bezierCurveTo( 
            centerX + width/2, centerY - height/2,
            centerX + width/2, centerY + height/2,
            centerX, centerY + height/2);
        contextName.bezierCurveTo( 
            centerX - width/2, centerY + height/2,
            centerX - width/2, centerY - height/2,
            centerX, centerY - height/2);		
        contextName.closePath();			
        contextName.fill();
        contextName.stroke();
        contextName.restore();            
    }

    function drawEars(contextName, cellNumber, curPosY) {
		var topLeftPointX = 110 * qt + 200 * qt * cellNumber;
		var topRightPointX = 290 * qt + 200 * qt * cellNumber;
		var topPointY = curPosY;		
		contextName.save(); 
        contextName.beginPath();
	    contextName.moveTo(topLeftPointX + 18 * qt, topPointY + 60 * qt);
        contextName.lineTo(topLeftPointX + 3 * qt, topPointY + 3 * qt);
	    contextName.lineTo(topLeftPointX + 58 * qt, topPointY + 16 * qt);
		contextName.stroke();
		contextName.lineTo(topLeftPointX + 18 * qt, topPointY + 60 * qt);
        contextName.closePath();
		contextName.fill();
		contextName.beginPath();
		contextName.moveTo(topRightPointX - 18 * qt, topPointY + 60 * qt);
		contextName.lineTo(topRightPointX - 3 * qt, topPointY + 3 * qt);
		contextName.lineTo(topRightPointX - 58 * qt, topPointY + 16 * qt);
		contextName.lineTo(topRightPointX - 18 * qt, topPointY + 60 * qt);			
        contextName.closePath();
        contextName.fill();
        contextName.restore();
		contextName.save();
        contextName.beginPath();
	    contextName.moveTo(topLeftPointX + 18 * qt, topPointY + 60 * qt);
        contextName.lineTo(topLeftPointX + 3 * qt, topPointY + 3 * qt);
	    contextName.lineTo(topLeftPointX + 58 * qt, topPointY + 16 * qt);
		contextName.stroke();
        contextName.beginPath();
		contextName.moveTo(topRightPointX - 18 * qt, topPointY + 60 * qt);
		contextName.lineTo(topRightPointX - 3 * qt, topPointY + 3 * qt);
		contextName.lineTo(topRightPointX - 58 * qt, topPointY + 16 * qt);
        contextName.stroke();
		contextName.restore();
	}

	function drawEyes (contextName, cellNumber, curPosY) {
	    var leftCenterX = 172 * qt + 200 * qt * cellNumber;
		var rightCenterX = 228 * qt + 200 * qt * cellNumber;
		var CenterY = curPosY + 90 * qt;
		drawEllipse(contextName, leftCenterX, CenterY, 28 * qt, 16 * qt);
		contextName.beginPath();
		contextName.moveTo(leftCenterX, CenterY - 8 * qt);
		contextName.lineTo(leftCenterX, CenterY + 8 * qt);
		contextName.stroke();            
        contextName.closePath();
		drawEllipse(contextName, rightCenterX, CenterY, 28 * qt, 16 * qt);
		contextName.beginPath();
		contextName.moveTo(rightCenterX, CenterY - 8 * qt);
		contextName.lineTo(rightCenterX, CenterY + 8 * qt);
		contextName.stroke();            
        contextName.closePath();
	}

	function drawNose (contextName, cellNumber, curPosY) {
		var bottomPointX = 200 * qt + 200 * qt * cellNumber;
		var bottomPointY = 120 * qt + curPosY;
		contextName.beginPath();
	    contextName.moveTo(bottomPointX, bottomPointY);
        contextName.lineTo(bottomPointX + 10 * qt, bottomPointY - 10 * qt);
        contextName.lineTo(bottomPointX - 10 * qt, bottomPointY - 10 * qt);
		contextName.lineTo(bottomPointX, bottomPointY);	
		contextName.closePath();
        contextName.fill();
		contextName.stroke();
	}
	
	function drawWhiskerbreak (contextName, cellNumber, curPosY) {
		
		var leftCenterPointX = 188 * qt + 200 * qt * cellNumber;
		var rightCenterPointX = 212 * qt + 200 * qt * cellNumber;
		var centerPointY = 98 * qt + curPosY;
		
		contextName.beginPath();
		contextName.arc(leftCenterPointX, centerPointY, 26.7 * qt, 0.35 * Math.PI, 0.8 * Math.PI);
		
		contextName.fill();
		contextName.stroke();			
		
		contextName.beginPath();
		contextName.arc(rightCenterPointX, centerPointY, 26.7 * qt, 0.2 * Math.PI, 0.65 * Math.PI );			
		
		contextName.fill();
		contextName.stroke();
		
	}
	
	// Функция, рисующая язык
	
	function drawTongu(contextName, cellNumber, curPosY) {
		var centerPointX = 200 * qt + 200 * qt * cellNumber;
		var centerPointY = 122.5 * qt + curPosY;
		
		contextName.beginPath();
        contextName.moveTo(centerPointX + 12 * qt, centerPointY);
		contextName.lineTo(centerPointX + 12 * qt, centerPointY + 10 * qt);
		contextName.arc(centerPointX, centerPointY + 10 * qt, 12 * qt, 0 * Math.PI, 1 * Math.PI );
		contextName.lineTo(centerPointX - 12 * qt, centerPointY + 10 * qt);
		contextName.lineTo(centerPointX - 12 * qt, centerPointY);
		contextName.lineTo(centerPointX + 12 * qt, centerPointY);
		
		contextName.closePath();
		contextName.fill();
		contextName.stroke();			
		
	}
		
    // Функция, рисующая шею (прямоугольник)
    
    function drawNeck (contextName, cellNumber, curPosY) {
	    var topPointX = 150 * qt + 200 * qt * cellNumber;
		var topPointY = 130 * qt + curPosY;
		
        contextName.fillRect(topPointX, topPointY, 100 * qt, 35 * qt);
		contextName.strokeRect(topPointX, topPointY, 100 * qt, 35 * qt);
		
	}
		
	// Функция, рисующая фрагменты верхней грани коробки спереди от отверстий
	
    function drawHoleEddge(contextName, cellNumber, figColor) {
		
	    var startPointX = 110 * qt + 200 * qt * cellNumber;
		contextName.save();
        contextName.beginPath();
		
		contextName.moveTo(startPointX, 220 * qt);
			
		contextName.bezierCurveTo(
			startPointX, 260 * qt,
		    startPointX + 180 * qt, 260 * qt,
			startPointX + 180 * qt, 220 * qt);
			
		contextName.lineTo(startPointX + 180 * qt, 270 * qt);
		contextName.lineTo(startPointX, 270 * qt);
		contextName.lineTo(startPointX, 220 * qt);
        	
	    context.fillStyle = figColor; // Цвет фрагментов	

        contextName.fill();
		contextName.closePath();
		
		contextName.beginPath();
		
		contextName.moveTo(startPointX, 220 * qt);
			
		contextName.bezierCurveTo(
			startPointX, 260 * qt,
		    startPointX + 180 * qt, 260 * qt,
			startPointX + 180 * qt, 220 * qt);
			
		contextName.stroke();
			
		contextName.beginPath();
		contextName.moveTo(startPointX + 180 * qt, 270 * qt);
		contextName.lineTo(startPointX, 270 * qt);
		contextName.closePath();
		contextName.stroke();
		
	    context.restore;			
        
    }
		
	// Функция, собирающая всего кота из фигур, созданных рисующими функциями
	
	function drawCat(contextName, cellNumber, curPosY, colorScheme) {
		
		var nowColorScheme = colorScheme;			
		
		context.fillStyle = nowColorScheme[0]; // Шея
		drawNeck (context, cellNumber, curPosY);
		
		context.fillStyle = nowColorScheme[0]; // Цвет эллипса, морда
	    var ellipseCenterY = curPosY + 80 * qt;
	    drawEllipse(context, 200 * qt + 200 * qt * cellNumber, ellipseCenterY, 200 * qt, 140 * qt);
		
		context.fillStyle = nowColorScheme[0]; // Уши
		drawEars(context, cellNumber, curPosY);
		
		context.fillStyle = nowColorScheme[1]; // Глаза
		drawEyes(context, cellNumber, curPosY);
		
		context.save(); // Нос
		context.fillStyle = nowColorScheme[2];
		context.strokeStyle = nowColorScheme[3];
		drawNose(context, cellNumber, curPosY);
		context.restore();
		
		context.save(); // Язык
		context.fillStyle = 'rgba(255, 145, 180, 1)';
		drawTongu(context, cellNumber, curPosY);
		context.restore();
		
		context.save(); // Вискербрейк
		context.fillStyle = nowColorScheme[0];
		context.strokeStyle = nowColorScheme[3]; 
		drawWhiskerbreak(context, cellNumber, curPosY);
		context.restore();
		
		context.save(); // Фрагменты верхней грани коробки спереди от отверстий
		   drawHoleEddge (context, cellNumber, 'rgba(186, 216, 67, 1)');
		context.restore();
	}
	
	
	
	// функция, собирающая силуэт кота на слое canvUn
	
	function drawCatUnder (contextName, hexedColor, cellNumber, curPosY) {
		
		clearPrevFrameDown(contextName, cellNumber, curPosY);
		
		
	    ctxUn.save(); // Шея (прямоугольник)
		ctxUn.fillStyle = hexedColor;
		drawNeck (ctxUn, cellNumber, curPosY);
		ctxUn.restore();	
		
        ctxUn.save(); // Морда (эллипс)
  	    ctxUn.fillStyle = hexedColor;
	    var ellipseCenterY = curPosY + 80 * qt;
	    drawEllipse(ctxUn, 200 * qt + 200 * qt * cellNumber, ellipseCenterY, 200 * qt, 140 * qt);
		
		ctxUn.save(); // Уши (треугольники)
		ctxUn.fillStyle = hexedColor;
		drawEars(ctxUn, cellNumber, curPosY);
        ctxUn.restore();
		
		ctxUn.restore();
		ctxUn.save();
		drawHoleEddge (ctxUn, 0, 'rgba(0, 0, 0, 1)');
		ctxUn.restore();	
		
	}
		
// Конец Рисующие функции
		

// Отрисовка

	// Функция, вычисляющая при движении ВВЕРХ, какой была текущая позиция (переменная вида currentPositionY_n) в предыдущем кадре
		
	function calcPrevPosYUp(curPosY) {
		var nowCurrentPositionY = curPosY;			
	    prevPosYUp = nowCurrentPositionY + stepUp;
		return (prevPosYUp);
	}
		
	// Функция, вычисляющая при движении ВНИЗ, какой была текущая позиция (переменная вида currentPositionY_n) в предыдущем кадре
		
	function calcPrevPosYDown(curPosY) {
		var nowCurrentPositionY = curPosY;			
	    prevPosYDown = nowCurrentPositionY - stepDown;
		return (prevPosYDown);
	}
		
	// Функция, стирающая фигуры, нарисованные в предыдущем кадре при движении ВВЕРХ
	
	function clearPrevFrameUp(contextName, cellNumber, curPosY) {
		
        calcPrevPosYUp(curPosY); 
 	    contextName.clearRect(100 * qt + 200 * qt * cellNumber, prevPosYUp, 200 * qt, 200 * qt);
	}
		
	// Функция, стирающая фигуры, нарисованные в предыдущем кадре при движении ВНИЗ
	
	function clearPrevFrameDown(contextName, cellNumber, curPosY) {
		
        calcPrevPosYDown(curPosY) 
 	    contextName.clearRect(100 * qt + 200 * qt * cellNumber, prevPosYDown, 200 * qt, 200 * qt);
	}
	
    // Нулевая фигура
		
	function drawUp_0 () {	// Функция, отрисовывающая движение вверх для нулевой позиции на основном холсте (id = 'canvas')		
		
		clearPrevFrameUp(context, 0, currentPositionY_0);
		drawCat(context, 0, currentPositionY_0, colorScheme_0);
		
	}	

	function drawUpUnder_0 () {  // Функция, отрисовывающая движение вверх для нулевой позиции на служебном холсте (id = 'canvas') 	        
		
		clearPrevFrameUp(ctxUn, 0, currentPositionY_0);
		drawCatUnder (ctxUn, hexedColor_0, 0, currentPositionY_0);
		
	}
	
	function drawDown_0 () {
		
		clearPrevFrameDown(context, 0, currentPositionY_0);
		drawCat(context, 0, currentPositionY_0, colorScheme_0);
	
	}	
	
	function drawDownUnder_0 () {
		
		clearPrevFrameDown (ctxUn, 0, currentPositionY_0);
		drawCatUnder (ctxUn, hexedColor_0, 0, currentPositionY_0);
		
	}		
    // Конец Нулевая фигура
		
    // Первая фигура
	
	function drawUp_1 () {			
		
		clearPrevFrameUp(context, 1, currentPositionY_1);
		drawCat(context, 1, currentPositionY_1, colorScheme_1);
		
	}	
	
	function drawUpUnder_1 () {   	        
		
		clearPrevFrameUp(ctxUn, 1, currentPositionY_1);
		drawCatUnder (ctxUn, hexedColor_1, 1, currentPositionY_1);
		
	}
	
	function drawDown_1 () {
		
		clearPrevFrameDown(context, 1, currentPositionY_1);
		drawCat(context, 1, currentPositionY_1, colorScheme_1);
		
	}	
	
	function drawDownUnder_1 () {
		
		clearPrevFrameDown (ctxUn, 1, currentPositionY_1);
		drawCatUnder (ctxUn, hexedColor_1, 1, currentPositionY_1);
		
	}
    // Конец Первая фигура
			
	// Вторая фигура
	
    function drawUp_2 () {			
        
		clearPrevFrameUp(context, 2, currentPositionY_2);
		drawCat(context, 2, currentPositionY_2, colorScheme_2);
		
	}	

	function drawUpUnder_2 () {   	        
		
		clearPrevFrameUp(ctxUn, 2, currentPositionY_2);
		drawCatUnder (ctxUn, hexedColor_2, 2, currentPositionY_2);
		
	}
	
	function drawDown_2 () {
		
		clearPrevFrameDown(context, 2, currentPositionY_2);
		drawCat(context, 2, currentPositionY_2, colorScheme_2);
	
	}	
	
	function drawDownUnder_2 () {
		
		clearPrevFrameDown (ctxUn, 2, currentPositionY_2);
		drawCatUnder (ctxUn, hexedColor_2, 2, currentPositionY_2);
			
	}
    // Конец Вторая фигура
		
	// Третья фигура
	
	function drawUp_3 () {			
        
		clearPrevFrameUp(context, 3, currentPositionY_3);
		drawCat(context, 3, currentPositionY_3, colorScheme_3);
		
	}	
	
	function drawUpUnder_3 () {   	        
		
		clearPrevFrameUp(ctxUn, 3, currentPositionY_3);
		drawCatUnder (ctxUn, hexedColor_3, 3, currentPositionY_3);
		
	}
	
	function drawDown_3 () {
		
		clearPrevFrameDown(context, 3, currentPositionY_3);
		drawCat(context, 3, currentPositionY_3, colorScheme_3);
		
	}	
	
	function drawDownUnder_3 () {
		
		clearPrevFrameDown (ctxUn, 3, currentPositionY_3);
		drawCatUnder (ctxUn, hexedColor_3, 3, currentPositionY_3);
			
	}
    // Конец Третья фигура

// Конец Отрисовка

	// Анимация
	
    // Нулевая фигура
	function catUp_0 () {
		
		if(!movingUp_0) return false;
		if ( currentPositionY_0 == undefined ) {
			currentPositionY_0 = 280 * qt;
		
		} else {
			
			dumping = false;
			inUse_0 = true;
			inBottom_0 = false;
	        currentPositionY_0 = currentPositionY_0 - stepUp;
	    	if ( currentPositionY_0 < 90 * qt) {			    
	    		currentPositionY_0 = 90 * qt;
				inTop_0 = true;
				setThreeInTop ();
				setTimeout(freezThreeInTop, 1000);
				setTimeout(catsDump, 1000);
				movingUp_0 = false;					
	    	}
	    }
		
    	drawUp_0();
		drawUpUnder_0();
		
	}

	function catDown_0 () {
		
		if(!movingDown_0) return false;
    	currentPositionY_0 = currentPositionY_0 + stepDown;		
		if ( currentPositionY_0 > 280 * qt ) {			    
			currentPositionY_0 = 280 * qt;
			movingDown_0 = false;
			reverseUp_0 == 'off'
			inUse_0 = false;
			inBottom_0 = true;
		}
		
		drawDown_0();
		drawDownUnder_0();
		
	}
	// Конец Нулевая фигура

	// Первая фигура
	function catUp_1 () {
		
		if(!movingUp_1) return false;
		if ( currentPositionY_1 == undefined ) {
			currentPositionY_1 = 280 * qt;
			
		} else {
			
			dumping = false;
			inUse_1 = true;
			inBottom_1 = false;
        	currentPositionY_1 = currentPositionY_1 - stepUp;	
			if ( currentPositionY_1 < 90 * qt ) {			    
    			currentPositionY_1 = 90 * qt;
				inTop_1 = true;
				setThreeInTop ();
				setTimeout(freezThreeInTop, 1000);
				setTimeout(catsDump, 1000);
				movingUp_1 = false;
	    	}
    	}
	
    	drawUp_1();
		drawUpUnder_1();
	}
	
	function catDown_1 () {
		
		if(!movingDown_1) return false;
	    currentPositionY_1 = currentPositionY_1 + stepDown;	
		if ( currentPositionY_1 > 280 * qt ) {			    
			currentPositionY_1 = 280 * qt;
			movingDown_1 = false;
			reverseUp_1 == 'off'
			inUse_1 = false;
			inBottom_1 = true;
		}
		
		drawDown_1();
		drawDownUnder_1();
	}
	// Конец Первая фигура
			
	// Вторая фигура
    function catUp_2 () {
		
		if(!movingUp_2) return false;
		if ( currentPositionY_2 == undefined ) {
		    currentPositionY_2 = 280 * qt;
			
		} else {
			
			dumping = false;
			inUse_2 = true;
			inBottom_2 = false;
        	currentPositionY_2 = currentPositionY_2 - stepUp;	
    		if ( currentPositionY_2 < 90 * qt ) {			    
    			currentPositionY_2 = 90 * qt;
				inTop_2 = true;
				setThreeInTop ();
				setTimeout(freezThreeInTop, 1000);
				setTimeout(catsDump, 1000);
				movingUp_2 = false;
	    	}
    	}
		
    	drawUp_2();
		drawUpUnder_2();
	}
	
	function catDown_2 () {
		
		if(!movingDown_2) return false;
	    currentPositionY_2 = currentPositionY_2 + stepDown;	
		if ( currentPositionY_2 > 280 * qt ) {			    
			currentPositionY_2 = 280 * qt;
			movingDown_2 = false;
			reverseUp_2 == 'off'
			inUse_2 = false;
			inBottom_2 = true;
		}
		
		drawDown_2();
		drawDownUnder_2();
	}
	// Конец Вторая фигура

    // Третья фигура
	function catUp_3 () {
		
		if(!movingUp_3) return false;
		if ( currentPositionY_3 == undefined ) {
		    currentPositionY_3 = 280 * qt;
			
		} else {
			
			dumping = false;
			inUse_3 = true;
			inBottom_3 = false;
        	currentPositionY_3 = currentPositionY_3 - stepUp;	
    		if ( currentPositionY_3 < 90 * qt ) {			    
    			currentPositionY_3 = 90 * qt;
				inTop_3 = true;
				setThreeInTop ();
				setTimeout(freezThreeInTop, 1000);
				setTimeout(catsDump, 1000);
				movingUp_3 = false;
	    	}
    	}
		
    	drawUp_3();
		drawUpUnder_3();
	}
	
	function catDown_3 () {
		
	    if(!movingDown_3) return false;
		currentPositionY_3 = currentPositionY_3 + stepDown;	
		if ( currentPositionY_3 > 280 * qt ) {			    
			currentPositionY_3 = 280 * qt;
			movingDown_3 = false;
			reverseUp_3 == 'off'
			inUse_3 = false;
			inBottom_3 = true;
		}
		
		drawDown_3();
		drawDownUnder_3();
	}
	// Конец Третья фигура

	
			
	function animate () {
		
	  
		
		// Значок "Загрузка"		
		
		var load_0 = function(){ // Функция выводит зачок "Загрузка" для ячейки 0
		
			if( !( inBottom_0 == false ) ){
				
				clearIcon(0);
				drawLoadIcon(0);
				
			}
			
		} ();
			
		var load_1 = function(){ // Функция выводит зачок "Загрузка" для ячейки 1
			
			if( !( inBottom_1 == false ) ){
				
				clearIcon(1);
			    drawLoadIcon(1);
				
			}
				
		} ();
		
		var load_2 = function(){ // Функция выводит зачок "Загрузка" для ячейки 2
			
			if( !( inBottom_2 == false ) ){
				
				clearIcon(2);
				   drawLoadIcon(2);
				
			}
			
		} ();
		
		var load_3 = function(){ // Функция выводит зачок "Загрузка" для ячейки 3
			
			if( !( inBottom_3 == false ) ){
				
				clearIcon(3);
			    drawLoadIcon(3);
				
		    }
			
		} ();
			
		// Конец Значок "Загрузка"
		
		// Значок "Обновиь"			
			
			
        var refresh_0 = function(){ // Функция выводит значок "Обновить" для ячейки 0
			
			if( ( inBottom_0 == false ) && ( freez == false ) ){
				
				load_0 = false;
				clearIcon(0);
			    drawRefreshIcon(0);
				
		    }
			
		} ();
		
        var refresh_1 = function(){ // Функция выводит значок "Обновить" для ячейки 1
			
			if( ( inBottom_1 == false ) && ( freez == false ) ){
				
				load_1 = false;
				clearIcon(1);
			    drawRefreshIcon(1);
				
			}
			
		} ();
		
        var refresh_2 = function(){ // Функция выводит значок "Обновить" для ячейки 2
			
			if( ( inBottom_2 == false ) && ( freez == false ) ){
				
				load_2 = false;
				clearIcon(2);
				   drawRefreshIcon(2);
				
			}
			
		} ();
		
        var refresh_3 = function(){ // Функция выводит значок "Обновить" для ячейки 3
			
			if( ( inBottom_3 == false ) && ( freez == false ) ){
				
				load_3 = false;
				clearIcon(3);
			    drawRefreshIcon(3);
					
		    }
			
		} ();
		
		
		// Конец Значок "Обновиь"
		
		
		var clearIcons = function(){
			if(  freez == true && inTop_0 == true && inTop_1 == true && inTop_2 == true && inTop_3 == true ){
				
				setDeltaScore ();
				//clearScore();
				//clearIcon(0);
				//clearIcon(1);
				//clearIcon(2);
				//clearIcon(3);
				//clearScore();
				ctxScore.font = 100 * qt + 'px a_futurarounddemiregular';
				writeDeltaScore (); // Вывод изменения счёта
				var message = newScore;			
			    writeMessage(canvas, message);
		    }
				
		} ();
		
		function clearScore() {
			
			if (dumping == true) {
				
				ctxScore.save();
				ctxScore.strokeStyle = cColor;
				ctxScore.lineWidth = 2 * qt;
				//ctxScore.fillStyle = 'rgba(211, 255, 125, 1)';
				ctxScore.clearRect(  50 * qt, 0 * qt, 900 * qt, 250 * qt );
				ctxScore.fillRect(  50 * qt, 0 * qt, 900 * qt, 250 * qt );
				ctxScore.strokeRect(  50 * qt, 0 * qt, 900 * qt, 250 * qt );
				ctxScore.restore();
				score = newScore;
				
			}
			
		}
		
		clearScore();
		drawInfoButton();
	    drawInfoButtonUnder();
	  if (stopGame == false) {	
		catUp_0();
		catDown_0();
		catUp_1();
		catDown_1();
		catUp_2();
		catDown_2();
		catUp_3();
		catDown_3();
		
	  
		animateId = requestAnimationFrame(animate);
	  }

	
	}
	

	animateId = requestAnimationFrame(animate); 
		
		
	
	// Конец Анимация
		

    function starting () {
		
		
			
	}
	
    
	function setThreeInTop () {
		
		if (  ( inTop_0 && inTop_1 && inTop_2 ) || ( inTop_0 && inTop_1 && inTop_3 ) || ( inTop_0 && inTop_2 && inTop_3 ) || ( inTop_1 && inTop_2 && inTop_3 )  ) {
		
		    threeInTop = true;	
				
		}
			
	}
	
    // Значок "Готово"
	
		
	function checkIcon_0 () { // Функция выводит зачок "Готово" для ячейки 0
			
		if(  inTop_0 == true && freez == true ){
				
			clearIcon(0);
			drawCheckIcon(0);
			
		}
				
	}
	
	function checkIcon_1 () { // Функция выводит зачок "Готово" для ячейки 1
		
		if( inTop_1 == true && freez == true ){
			
			clearIcon(1);
		    drawCheckIcon(1);
			
		}
			
	}
	
	function checkIcon_2 () { // Функция выводит зачок "Готово" для ячейки 2
		
		if( inTop_2 == true && freez == true ){
			
			clearIcon(2);
		    drawCheckIcon(2);
			
		}
			
	}
	
	function checkIcon_3 () { // Функция выводит зачок "Готово" для ячейки 3
		
		if( inTop_3 == true && freez == true ){
			
			clearIcon(3);
		    drawCheckIcon(3);
			
		}
		
	}
	
	
	// Конец Значок "Готово"
	
	
	/* checkIcon_0 ();
	checkIcon_1 ();
	checkIcon_2 ();
	checkIcon_3 (); */
		
	function freezThreeInTop () {
		if (threeInTop == true) {
			freez = true;
			checkIcon_0 ();
			checkIcon_1 ();
			checkIcon_2 ();
			checkIcon_3 ();
		}
	}
	
	
	
	canvas.onclick = function() { // Меняет направление движения при клике
        
		if ( freez == false ) {
		
    	    if (reverseUp_0 == 'on') {
				
				catUpStop_0();
				catDownStart_0();
				catDown_0 ();
				reverseBack_0 ();
				threeInTop = false;
				inTop_0 = false;
				
		    }
			
		    if (reverseUp_1 == 'on') {
				
				catUpStop_1();
				catDownStart_1();
				catDown_1 ();
				reverseBack_1 ();
				threeInTop = false;
				inTop_1 = false;				
				
	    	}
			
            if (reverseUp_2 == 'on') {
				
				catUpStop_2();
				catDownStart_2();
				catDown_2 ();	
				reverseBack_2 ();
				threeInTop = false;
				inTop_2 = false;
				
	    	}
			
            if (reverseUp_3 == 'on') {
				
				catUpStop_3();
				catDownStart_3();
				catDown_3 ();
				reverseBack_3 ();
				threeInTop = false;
				inTop_3 = false;				
				
	    	}
			
		}
			
			//console.log(freez);	
	}
		
	function colorCombo ( a, b, c, d ) {
		
		var clrCmb = [];
		var comboNow = clrCmb.push( [ a, b, c, d ].join( '' ) );
		//console.log(comboNow);
		
	}
	
    function catsDump() { // Инициирует движение вниз одновременно во всех четырёх позицях
		
		
    	if ( inTop_0 == true && inTop_1 == true && inTop_2 == true && inTop_3 == true ) {
			
				/* if (colorScheme_0) {
					
					score = 

				} */
				
				
			if ( colorScheme_0 == colorSchemeWhite ) {
				
				curCol_0 = 0;
				
			} else if ( colorScheme_0 == colorSchemeGinger ) {
				
				curCol_0 = 1;
				
			} else if ( colorScheme_0 == colorSchemeGray ) {
				
				curCol_0 = 2;
			
            } else if ( colorScheme_0 == colorSchemeBlack ) {
				
				curCol_0 = 3;
			
			} else {
				
				curCol_0 = undefined;
				
			}
			
			if ( colorScheme_1 == colorSchemeWhite ) {
				
				curCol_1 = 0;
				
			} else if ( colorScheme_1 == colorSchemeGinger ) {
				
				curCol_1 = 1;
				
			} else if ( colorScheme_1 == colorSchemeGray ) {
				
				curCol_1 = 2;
				
            } else if ( colorScheme_1 == colorSchemeBlack ) {
				
				curCol_1 = 3;
				
				
			} else {
				
				curCol_1 = 'undefined';
				
			}
			
			
			
			if ( colorScheme_2 == colorSchemeWhite ) {
				
			    curCol_2 = 0;
			
			} else if ( colorScheme_2 == colorSchemeGinger ) {
				
				curCol_2 = 1;
				
			} else if ( colorScheme_2 == colorSchemeGray ) {
				
				curCol_2 = 2;
				
            } else if ( colorScheme_2 == colorSchemeBlack ) {
				
				curCol_2 = 3;
				
				
			} else {
					
				curCol_2 = 'undefined';
				
			}
			
			
			
			if ( colorScheme_3 == colorSchemeWhite ) {
				
				curCol_3 = 0;
				
			} else if ( colorScheme_3 == colorSchemeGinger ) {
				
				curCol_3 = 1;
					
			} else if ( colorScheme_3 == colorSchemeGray ) {
				
				curCol_3 = 2;
				
            } else if ( colorScheme_3 == colorSchemeBlack ) {
				
				curCol_3 = 3;				
				
			} else {
				
				curCol_3 = 'undefined';
				
			}
			
			
			//var message = curCol_0  + ' ' + colorScheme_0;
			/* var message = score;
			
			writeMessage(canvas, message); */
				
				
			colorCombo (curCol_0, curCol_1, curCol_2, curCol_3);
				
			//console.log(colorScheme_0);
		    freez = false;
			threeInTop = false;
			
        	catUpStop_0();
			catDownStart_0();
        	catDown_0 ();
			reverseBack_0 ();
			inTop_0 = false;
			
        	catUpStop_1();
			catDownStart_1();
        	catDown_1 ();
            reverseBack_1 ();
            inTop_1 = false;				
			
        	catUpStop_2();
			catDownStart_2();
        	catDown_2 ();	
            reverseBack_2 ();
			inTop_2 = false;
			
        	catUpStop_3();
			catDownStart_3();
        	catDown_3 ();
            reverseBack_3 ();
            inTop_3 = false;
		
			dumping = true;
			//clearScore();
			deltaScoreDisplayed = false;
			deltaScore = 0;
	    }
			
	}
	
	// Функция, осуществляющая вывод изменения счёта


	function writeDeltaScore (){
		
		if (deltaScoreDisplayed == false) {
		
		
			clearIcon(0);
			clearIcon(1);
			clearIcon(2);
			clearIcon(3);
		
		
			ctxScore.save();
			//ctxUpp.fillStyle = 'rgba(0, 0, 0, 1)';
			//ctxUpp.strokeStyle = 'rgba(0, 0, 0, 1)';
			ctxScore.fillStyle = aColor;
			//ctxScore.strokeStyle = 'rgba(0, 0, 0, 1)';
			ctxScore.strokeStyle = cColor;
			ctxScore.lineWidth = 2.5 * qt
			ctxScore.font = 100 * qt + 'px a_futurarounddemiregular';
			ctxScore.textAlign = "center";
			ctxScore.textBaseline = "middle"; 
			//ctxScore.shadowColor = 'rgba(0, 0, 0, 1)';
			//ctxScore.shadowOffsetX = 0;
			//ctxScore.shadowOffsetY = 0;
			//ctxScore.shadowBlur = 5;
			scoreText = deltaScore;
			
			ctxScore.fillText(scoreText, 500 * qt, 128 * qt);
			ctxScore.strokeText(scoreText, 500 * qt, 128 * qt);
			ctxScore.restore();
			
			deltaScoreDisplayed = true;
			
		}
	}
	
//var scoreText = 'SCORE' + ' ' + score;
//var scoreText = 'EEEEEEEE645661352EEEEEEEEE';
//var scoreFont = 100 * qt + 'px a_futuraroundregular';
//var scoreFont = 100 * qt + 'px a_futuraroundbold';
//var scoreFont = 100 * qt + 'px a_futurarounddemiregular';


//ctxUpp.fillStyle = 'rgba(0, 0, 0, 1)';
//ctxUpp.strokeStyle = 'rgba(0, 0, 0, 1)';
//ctxUpp.font = scoreFont;
//ctxUpp.textAlign = "center";
//ctxUpp.textBaseline = "middle";


//writeDeltaScore ();


		
	// Конец Функция, осуществляющая вывод изменения счёта
	
	// Информационный блок
	
	function fontLoadInfo (){
	ctxInfo.save();
	ctxInfo.font = 100 * qt + 'px a_futurarounddemiregular';
	ctxInfo.strokeStyle = 'rgba(0, 0, 0, 0)';
	ctxInfo.strokeText('a', 0, 0);
	ctxInfo.restore();
}
	
	fontLoadInfo ();
	
	var curPage;
	
	var closeButtonX = newWidth - 59 * qt;
	var closeButtonY = 9 * qt;
	var closeButtonWidth = 38 * qt;
	var closeButtonHeight = 38 * qt;
	
	
	var forwardButtonWidth = 38 * qt;
	var forwardButtonHeight = 76 * qt;
	var forwardButtonX = newWidth - 97 * qt;
	var forwardButtonY = newHeight / 2 - forwardButtonHeight / 2;
	
	var backwardButtonWidth = 38 * qt;
	var backwardButtonHeight = 76 * qt;
	var backwardButtonX = 59 * qt;
	var backwardButtonY = newHeight / 2 - backwardButtonHeight /2;
	
	
	function drawInfoPageBg(pageNum){
		ctxInfo.save(); // Фон Информационного блока
		//ctxInfo.fillStyle = 'rgba(255, 255, 255, 0.2)';
		ctxInfo.fillStyle = 'rgba(225, 238, 255, 1)';
		ctxInfo.fillRect(0, 0, newWidth, newHeight);
		ctxInfo.restore();
		
		
		
		ctxInfo.save(); // Кнопка "Закрыть"
		//ctxInfo.fillStyle = 'rgba(255, 255, 255, 0.5)';
		ctxInfo.fillStyle = 'rgba(225, 238, 255, 1)';
		ctxInfo.fillRect(closeButtonX, closeButtonY, closeButtonWidth, closeButtonHeight );
		ctxInfo.restore();
			
		ctxInfo.save(); // Крестик на кнопке "Закрыть" 
		ctxInfo.beginPath();
		ctxInfo.moveTo(closeButtonX + 5 * qt, closeButtonY + 5 * qt);
		ctxInfo.lineTo(closeButtonX + closeButtonWidth - 5 * qt, closeButtonY + closeButtonHeight - 5 * qt);
		ctxInfo.lineCap = "round";
		ctxInfo.strokeStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.lineWidth = 7 * qt;
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.moveTo(closeButtonX + closeButtonWidth - 5 * qt, closeButtonY + 5 * qt);
		ctxInfo.lineTo(closeButtonX + 5 * qt, closeButtonY + closeButtonHeight - 5 * qt);
		ctxInfo.lineCap = "round";
		ctxInfo.strokeStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.lineWidth = 7 * qt;
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();   // Конец Крестик на кнопке "Закрыть"
		
		ctxInfo.save();
		ctxInfo.fillStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 48 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "left";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText(pageNum, 28 * qt, canvas.height / 20 + 0 * qt);
		
	}
	
	function forward(){ // Кнопка "Вперёд" 
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(255, 255, 255, 1)';
		//ctxInfo.fillRect(forwardButtonX, forwardButtonY, forwardButtonWidth, forwardButtonHeight);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.moveTo(forwardButtonX, forwardButtonY);
		ctxInfo.lineTo(forwardButtonX + forwardButtonWidth, forwardButtonY + forwardButtonHeight / 2);
		ctxInfo.lineCap = "round";
		ctxInfo.strokeStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.lineWidth = 7 * qt;
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.moveTo(forwardButtonX + forwardButtonWidth, forwardButtonY + forwardButtonHeight / 2);
		ctxInfo.lineTo(forwardButtonX, forwardButtonY + forwardButtonHeight);
		ctxInfo.lineCap = "round";
		ctxInfo.strokeStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.lineWidth = 7 * qt;
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();    // Конец Кнопка "Вперёд"
	}
	
	function backward(){ // Кнопка "Назад"
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(255, 255, 255, 1)';
		//ctxInfo.fillRect(backwardButtonX, backwardButtonY, backwardButtonWidth, backwardButtonHeight);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save(); 
		ctxInfo.beginPath();
		ctxInfo.moveTo(backwardButtonX + backwardButtonWidth, backwardButtonY);
		ctxInfo.lineTo(backwardButtonX, backwardButtonY + backwardButtonHeight / 2);
		ctxInfo.lineCap = "round";
		ctxInfo.strokeStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.lineWidth = 7 * qt;
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.moveTo(backwardButtonX, backwardButtonY + backwardButtonHeight / 2);
		ctxInfo.lineTo(backwardButtonX + backwardButtonWidth, backwardButtonY + backwardButtonHeight);
		ctxInfo.lineCap = "round";
		ctxInfo.strokeStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.lineWidth = 7 * qt;
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();    // Конец Кнопка "Назад"
	}
	
	function comb ( rectX, rectY, rectW, col_0, col_1, col_2, col_3 ) {
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.fillRect(rectX, rectY, rectW, rectW / 8);
		ctxInfo.strokeRect(rectX, rectY, rectW, rectW / 8);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = col_0;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.arc(rectX + rectW / 8, rectY, ( rectW / 40 ) * 4, 0 * Math.PI, 2 * Math.PI);
		ctxInfo.fill();
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = col_1;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.arc(rectX + rectW / 8 + rectW / 4 , rectY, ( rectW / 40 ) * 4, 0 * Math.PI, 2 * Math.PI);
		ctxInfo.fill();
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = col_2;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.arc(rectX + rectW / 8 + rectW / 2, rectY, ( rectW / 40 ) * 4, 0 * Math.PI, 2 * Math.PI);
		ctxInfo.fill();
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = col_3;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.arc(rectX + rectW / 8 + ( rectW / 4 ) * 3, rectY, ( rectW / 40 ) * 4, 0 * Math.PI, 2 * Math.PI);
		ctxInfo.fill();
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();
	}
	
	// Нулевая страница информационного блока

	function infoPage_0 () {
		
		curPage = '0';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('1');
		
		forward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
	
		//ctxInfo.fillStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('+500', 500 * qt, 50 * qt);
		//ctxInfo.strokeText('+500', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();		
		
		
		
		comb ( 350 * qt, 140 * qt, 300 * qt, cWh, cWh, cWh, cWh ); // Ряд 0
		
		comb ( 350 * qt, 240 * qt, 300 * qt, cGn, cGn, cGn, cGn ); // Ряд 1
		
		comb ( 350 * qt, 340 * qt, 300 * qt, cGy, cGy, cGy, cGy ); // Ряд 2
		
		comb ( 350 * qt, 440 * qt, 300 * qt, cBc, cBc, cBc, cBc ); // Ряд 3
		
		// Конец Третий ряд
	} // Конец Нулевая страница информационного блока
	
	// Первая страница информационного блока
	
	function infoPage_1() { 
		
		curPage = '1';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('2');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('+120', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		// Колонка 0
		
		comb ( 155 * qt, 120 * qt, 150 * qt, cWh, cGn, cGy, cBc ); // Ряд 0
		
		comb ( 155 * qt, 190 * qt, 150 * qt, cWh, cGy, cBc, cGn ); // Ряд 1
		
		comb ( 155 * qt, 260 * qt, 150 * qt, cWh, cBc, cGn, cGy ); // Ряд 2
		
		comb ( 155 * qt, 330 * qt, 150 * qt, cWh, cGy, cGn, cBc ); // Ряд 3
		
		comb ( 155 * qt, 400 * qt, 150 * qt, cGn, cWh, cBc, cGy ); // Ряд 4
		
		comb ( 155 * qt, 470 * qt, 150 * qt, cGy, cBc, cGn, cWh ); // Ряд 5
		
		// Колонка 1
		
		comb ( 335 * qt, 120 * qt, 150 * qt, cGn, cGy, cBc, cWh ); // Ряд 0
		
		comb ( 335 * qt, 190 * qt, 150 * qt, cGn, cBc, cWh, cGy ); // Ряд 1
		
		comb ( 335 * qt, 260 * qt, 150 * qt, cGn, cWh, cGy, cBc ); // Ряд 2
		
		comb ( 335 * qt, 330 * qt, 150 * qt, cWh, cBc, cGy, cGn ); // Ряд 3
		
		comb ( 335 * qt, 400 * qt, 150 * qt, cGn, cBc, cGy, cWh ); // Ряд 4
		
		comb ( 335 * qt, 470 * qt, 150 * qt, cBc, cWh, cGy, cGn ); // Ряд 5
		
		// Колонка 2
		
		comb ( 515 * qt, 120 * qt, 150 * qt, cGy, cBc, cWh, cGn ); // Ряд 0
		
		comb ( 515 * qt, 190 * qt, 150 * qt, cGy, cWh, cGn, cBc ); // Ряд 1
		
		comb ( 515 * qt, 260 * qt, 150 * qt, cGy, cGn, cBc, cWh ); // Ряд 2
		
		comb ( 515 * qt, 330 * qt, 150 * qt, cWh, cGn, cBc, cGy ); // Ряд 3
		
		comb ( 515 * qt, 400 * qt, 150 * qt, cGy, cWh, cBc, cGn ); // Ряд 4
		
		comb ( 515 * qt, 470 * qt, 150 * qt, cBc, cGn, cWh, cGy ); // Ряд 5
		
		// Колонка 3
		
		comb ( 695 * qt, 120 * qt, 150 * qt, cBc, cWh, cGn, cGy ); // Ряд 0
		
		comb ( 695 * qt, 190 * qt, 150 * qt, cBc, cGn, cGy, cWh ); // Ряд 1
		
		comb ( 695 * qt, 260 * qt, 150 * qt, cBc, cGy, cWh, cGn ); // Ряд 2
		
		comb ( 695 * qt, 330 * qt, 150 * qt, cGn, cGy, cWh, cBc ); // Ряд 3
		
		comb ( 695 * qt, 400 * qt, 150 * qt, cGy, cGn, cWh, cBc ); // Ряд 4
		
		comb ( 695 * qt, 470 * qt, 150 * qt, cBc, cGy, cGn, cWh ); // Ряд 5
		
		
	} // Конец Первая страница информационного блока
	
	// Вторая страница информационного блока
	
	function infoPage_2() { 
		
		curPage = '2';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('3');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
	
		//ctxInfo.fillStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';
			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('0', 500 * qt, 50 * qt);
		//ctxInfo.strokeText('+120', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		
		// Колонка 0
		
		comb ( 200 * qt, 120 * qt, 150 * qt, cWh, cWh, cGn, cGn ); // Ряд 0
		
		comb ( 200 * qt, 190 * qt, 150 * qt, cGn, cGn, cGy, cGy ); // Ряд 1
		
		comb ( 200 * qt, 260 * qt, 150 * qt, cGy, cGy, cBc, cBc ); // Ряд 2
		
		comb ( 200 * qt, 340 * qt, 150 * qt, cBc, cBc, cWh, cWh ); // Ряд 3
		
		comb ( 200 * qt, 410 * qt, 150 * qt, cWh, cGn, cWh, cGn ); // Ряд 4
		
		comb ( 200 * qt, 480 * qt, 150 * qt, cGn, cGy, cGn, cGy ); // Ряд 5
		
		// Колонка 1
		
		comb ( 425 * qt, 120 * qt, 150 * qt, cWh, cWh, cGy, cGy ); // Ряд 0
		
		comb ( 425 * qt, 190 * qt, 150 * qt, cGn, cGn, cBc, cBc ); // Ряд 1
		
		comb ( 425 * qt, 260 * qt, 150 * qt, cGy, cGy, cWh, cWh ); // Ряд 2
		
		comb ( 425 * qt, 340 * qt, 150 * qt, cBc, cBc, cGn, cGn ); // Ряд 3
		
		comb ( 425 * qt, 410 * qt, 150 * qt, cWh, cGy, cWh, cGy ); // Ряд 4
		
		comb ( 425 * qt, 480 * qt, 150 * qt, cGn, cBc, cGn, cBc ); // Ряд 5
		
		// Колонка 2
		
		comb ( 650 * qt, 120 * qt, 150 * qt, cWh, cWh, cBc, cBc ); // Ряд 0
		
		comb ( 650 * qt, 190 * qt, 150 * qt, cGn, cGn, cWh, cWh ); // Ряд 1
		
		comb ( 650 * qt, 260 * qt, 150 * qt, cGy, cGy, cGn, cGn ); // Ряд 2
		
		comb ( 650 * qt, 340 * qt, 150 * qt, cBc, cBc, cGy, cGy ); // Ряд 3
		
		comb ( 650 * qt, 410 * qt, 150 * qt, cWh, cBc, cWh, cBc ); // Ряд 4
		
		comb ( 650 * qt, 480 * qt, 150 * qt, cGn, cWh, cGn, cWh ); // Ряд 5
		
		
	} // Конец Вторая страница информационного блока
	
	// Третья страница информационного блока
	
	function infoPage_3() { 
		
		curPage = '3';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('4');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
	
		//ctxInfo.fillStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';
			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('0', 500 * qt, 50 * qt);
		//ctxInfo.strokeText('+120', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		
		// Колонка 0
		
		comb ( 200 * qt, 120 * qt, 150 * qt, cGy, cBc, cGy, cBc ); // Ряд 0
		
		comb ( 200 * qt, 190 * qt, 150 * qt, cBc, cWh, cBc, cWh ); // Ряд 1
		
		comb ( 200 * qt, 260 * qt, 150 * qt, cWh, cGn, cGn, cWh ); // Ряд 2
		
		comb ( 200 * qt, 340 * qt, 150 * qt, cGn, cGy, cGy, cGn ); // Ряд 3
		
		comb ( 200 * qt, 410 * qt, 150 * qt, cGy, cBc, cBc, cGy ); // Ряд 4
		
		comb ( 200 * qt, 480 * qt, 150 * qt, cBc, cWh, cWh, cBc ); // Ряд 5
		
		// Колонка 1
		
		comb ( 425 * qt, 120 * qt, 150 * qt, cGy, cWh, cGy, cWh ); // Ряд 0
		
		comb ( 425 * qt, 190 * qt, 150 * qt, cBc, cGn, cBc, cGn ); // Ряд 1
		
		comb ( 425 * qt, 260 * qt, 150 * qt, cWh, cGy, cGy, cWh ); // Ряд 2
		
		comb ( 425 * qt, 340 * qt, 150 * qt, cGn, cBc, cBc, cGn ); // Ряд 3
		
		comb ( 425 * qt, 410 * qt, 150 * qt, cGy, cWh, cWh, cGy ); // Ряд 4
		
		comb ( 425 * qt, 480 * qt, 150 * qt, cBc, cGn, cGn, cBc ); // Ряд 5
		
		// Колонка 2
		
		comb ( 650 * qt, 120 * qt, 150 * qt, cGy, cGn, cGy, cGn ); // Ряд 0
		
		comb ( 650 * qt, 190 * qt, 150 * qt, cBc, cGy, cBc, cGy ); // Ряд 1
		
		comb ( 650 * qt, 260 * qt, 150 * qt, cWh, cBc, cBc, cWh ); // Ряд 2
		
		comb ( 650 * qt, 340 * qt, 150 * qt, cGn, cWh, cWh, cGn ); // Ряд 3
		
		comb ( 650 * qt, 410 * qt, 150 * qt, cGy, cGn, cGn, cGy ); // Ряд 4
		
		comb ( 650 * qt, 480 * qt, 150 * qt, cBc, cGy, cGy, cBc ); // Ряд 5
		
		
	} // Конец Третья страница информационного блока
	
	// Четвёртая страница информационного блока
	
	function infoPage_4() { 
		
		curPage = '4';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('5');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('0', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		// Колонка 0
		
		comb ( 155 * qt, 190 * qt, 150 * qt, cWh, cWh, cWh, cGn ); // Ряд 0
		
		comb ( 155 * qt, 260 * qt, 150 * qt, cWh, cWh, cWh, cBc ); // Ряд 1
		
		comb ( 155 * qt, 330 * qt, 150 * qt, cGn, cGn, cGn, cGy ); // Ряд 2
		
		comb ( 155 * qt, 400 * qt, 150 * qt, cGn, cGn, cGn, cWh ); // Ряд 3
		
		// Колонка 1
		
		comb ( 335 * qt, 190 * qt, 150 * qt, cWh, cWh, cGn, cWh ); // Ряд 0
		
		comb ( 335 * qt, 260 * qt, 150 * qt, cWh, cWh, cBc, cWh ); // Ряд 1
		
		comb ( 335 * qt, 330 * qt, 150 * qt, cGn, cGn, cGy, cGn ); // Ряд 2
		
		comb ( 335 * qt, 400 * qt, 150 * qt, cGn, cGn, cWh, cGn ); // Ряд 3
		
		// Колонка 2
		
		comb ( 515 * qt, 190 * qt, 150 * qt, cWh, cGn, cWh, cWh ); // Ряд 0
		
		comb ( 515 * qt, 260 * qt, 150 * qt, cWh, cBc, cWh, cWh ); // Ряд 1
		
		comb ( 515 * qt, 330 * qt, 150 * qt, cGn, cGy, cGn, cGn ); // Ряд 2
		
		comb ( 515 * qt, 400 * qt, 150 * qt, cGn, cWh, cGn, cGn ); // Ряд 3
		
		// Колонка 3
		
		comb ( 695 * qt, 190 * qt, 150 * qt, cGn, cWh, cWh, cWh ); // Ряд 0
		
		comb ( 695 * qt, 260 * qt, 150 * qt, cBc, cWh, cWh, cWh ); // Ряд 1
		
		comb ( 695 * qt, 330 * qt, 150 * qt, cGy, cGn, cGn, cGn ); // Ряд 2
		
		comb ( 695 * qt, 400 * qt, 150 * qt, cWh, cGn, cGn, cGn ); // Ряд 3
		
		
	} // Конец Четвёртая страница информационного блока
	
	// Пятая страница информационного блока
	
	function infoPage_5() { 
		
		curPage = '5';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('6');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('0', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		// Колонка 0
		
		comb ( 155 * qt, 190 * qt, 150 * qt, cGy, cGy, cGy, cBc ); // Ряд 0
		
		comb ( 155 * qt, 260 * qt, 150 * qt, cGy, cGy, cGy, cGn ); // Ряд 1
		
		comb ( 155 * qt, 330 * qt, 150 * qt, cBc, cBc, cBc, cWh ); // Ряд 2
		
		comb ( 155 * qt, 400 * qt, 150 * qt, cBc, cBc, cBc, cGy ); // Ряд 3
		
		// Колонка 1
		
		comb ( 335 * qt, 190 * qt, 150 * qt, cGy, cGy, cBc, cGy ); // Ряд 0
		
		comb ( 335 * qt, 260 * qt, 150 * qt, cGy, cGy, cGn, cGy ); // Ряд 1
		
		comb ( 335 * qt, 330 * qt, 150 * qt, cBc, cBc, cWh, cBc ); // Ряд 2
		
		comb ( 335 * qt, 400 * qt, 150 * qt, cBc, cBc, cGy, cBc ); // Ряд 3
		
		// Колонка 2
		
		comb ( 515 * qt, 190 * qt, 150 * qt, cGy, cBc, cGy, cGy ); // Ряд 0
		
		comb ( 515 * qt, 260 * qt, 150 * qt, cGy, cGn, cGy, cGy ); // Ряд 1
		
		comb ( 515 * qt, 330 * qt, 150 * qt, cBc, cWh, cBc, cBc ); // Ряд 2
		
		comb ( 515 * qt, 400 * qt, 150 * qt, cBc, cGy, cBc, cBc ); // Ряд 3
		
		// Колонка 3
		
		comb ( 695 * qt, 190 * qt, 150 * qt, cBc, cGy, cGy, cGy ); // Ряд 0
		
		comb ( 695 * qt, 260 * qt, 150 * qt, cGn, cGy, cGy, cGy ); // Ряд 1
		
		comb ( 695 * qt, 330 * qt, 150 * qt, cWh, cBc, cBc, cBc ); // Ряд 2
		
		comb ( 695 * qt, 400 * qt, 150 * qt, cGy, cBc, cBc, cBc ); // Ряд 3
		
		
	} // Конец Пятая страница информационного блока
	
	// Шестая страница информационного блока
	
	function infoPage_6() { 
		
		curPage = '6';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('7');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('-125', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		// Колонка 0
		
		comb ( 155 * qt, 190 * qt, 150 * qt, cWh, cWh, cWh, cGy ); // Ряд 0
		
		comb ( 155 * qt, 260 * qt, 150 * qt, cGn, cGn, cGn, cBc ); // Ряд 1
		
		comb ( 155 * qt, 330 * qt, 150 * qt, cGy, cGy, cGy, cWh ); // Ряд 2
		
		comb ( 155 * qt, 400 * qt, 150 * qt, cBc, cBc, cBc, cGn ); // Ряд 3
		
		// Колонка 1
		
		comb ( 335 * qt, 190 * qt, 150 * qt, cWh, cWh, cGy, cWh ); // Ряд 0
		
		comb ( 335 * qt, 260 * qt, 150 * qt, cGn, cGn, cBc, cGn ); // Ряд 1
		
		comb ( 335 * qt, 330 * qt, 150 * qt, cGy, cGy, cWh, cGy ); // Ряд 2
		
		comb ( 335 * qt, 400 * qt, 150 * qt, cBc, cBc, cGn, cBc); // Ряд 3
		
		// Колонка 2
		
		comb ( 515 * qt, 190 * qt, 150 * qt, cWh, cGy, cWh, cWh ); // Ряд 0
		
		comb ( 515 * qt, 260 * qt, 150 * qt, cBc, cGn, cGn, cGn ); // Ряд 1
		
		comb ( 515 * qt, 330 * qt, 150 * qt, cGy, cWh, cGy, cGy ); // Ряд 2
		
		comb ( 515 * qt, 400 * qt, 150 * qt, cBc, cGn, cBc, cBc ); // Ряд 3
		
		// Колонка 3
		
		comb ( 695 * qt, 190 * qt, 150 * qt, cGy, cWh, cWh, cWh ); // Ряд 0
		
		comb ( 695 * qt, 260 * qt, 150 * qt, cBc, cGn, cGn, cGn ); // Ряд 1
		
		comb ( 695 * qt, 330 * qt, 150 * qt, cWh, cGy, cGy, cGy ); // Ряд 2
		
		comb ( 695 * qt, 400 * qt, 150 * qt, cGn, cBc, cBc, cBc ); // Ряд 3
		
		
	} // Конец Шестая страница информационного блока
	
	function segm(arcX, arcY, segW, segCol){
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.fillRect(arcX - segW / 2, arcY, segW, segW / 2);
		ctxInfo.strokeRect(arcX - segW / 2, arcY, segW, segW / 2);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = segCol;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.arc(arcX, arcY, 30 * qt, 0 * Math.PI, 2 * Math.PI);
		ctxInfo.fill();
		ctxInfo.stroke();
		ctxInfo.closePath();
		ctxInfo.restore();
		
	}
	
	function plu(pluX, pluY) {
		
		ctxInfo.save();
		ctxInfo.beginPath();	
		//ctxInfo.fillStyle = 'rgba(195, 222, 255, 1)';
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 60 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('+', pluX, pluY);
		ctxInfo.closePath();
		ctxInfo.restore();
		
	}
	
	// Седьмая страница информационного блока
	
	function infoPage_7() { 
		
		curPage = '7';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('8');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('-30', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		
		segm(275 * qt, 140 * qt, 80 * qt, this.cWh);
		
		segm(425 * qt, 140 * qt, 80 * qt, this.cWh);
		
		segm(575 * qt, 140 * qt, 80 * qt, this.cGn);
		
		segm(725 * qt, 140 * qt, 80 * qt, this.cGy);
		
		
		plu(350 * qt, 135 * qt);
		
		plu(500 * qt, 135 * qt);
		
		plu(650 * qt, 135 * qt);
		
		
		segm(275 * qt, 280 * qt, 80 * qt, this.cWh);
		
		segm(425 * qt, 280 * qt, 80 * qt, this.cWh);
		
		segm(575 * qt, 280 * qt, 80 * qt, this.cGn);
		
		segm(725 * qt, 280 * qt, 80 * qt, this.cBc);
		
		
		plu(350 * qt, 275 * qt);
		
		plu(500 * qt, 275 * qt);
		
		plu(650 * qt, 275 * qt);
		
		
		segm(275 * qt, 420 * qt, 80 * qt, this.cWh);
		
		segm(425 * qt, 420 * qt, 80 * qt, this.cWh);
		
		segm(575 * qt, 420 * qt, 80 * qt, this.cGy);
		
		segm(725 * qt, 420 * qt, 80 * qt, this.cBc);
		
		
		plu(350 * qt, 415 * qt);
		
		plu(500 * qt, 415 * qt);
		
		plu(650 * qt, 415 * qt);
		
		
	} // Конец Седьмая страница информационного блока
	
	// Восьмая страница информационного блока
	
	function infoPage_8() { 
		
		curPage = '8';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('9');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('-30', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		
		segm(275 * qt, 140 * qt, 80 * qt, this.cGn);
		
		segm(425 * qt, 140 * qt, 80 * qt, this.cGn);
		
		segm(575 * qt, 140 * qt, 80 * qt, this.cGy);
		
		segm(725 * qt, 140 * qt, 80 * qt, this.cBc);
		
		
		plu(350 * qt, 135 * qt);
		
		plu(500 * qt, 135 * qt);
		
		plu(650 * qt, 135 * qt);
		
		
		segm(275 * qt, 280 * qt, 80 * qt, this.cGn);
		
		segm(425 * qt, 280 * qt, 80 * qt, this.cGn);
		
		segm(575 * qt, 280 * qt, 80 * qt, this.cGy);
		
		segm(725 * qt, 280 * qt, 80 * qt, this.cWh);
		
		
		plu(350 * qt, 275 * qt);
		
		plu(500 * qt, 275 * qt);
		
		plu(650 * qt, 275 * qt);
		
		
		segm(275 * qt, 420 * qt, 80 * qt, this.cGn);
		
		segm(425 * qt, 420 * qt, 80 * qt, this.cGn);
		
		segm(575 * qt, 420 * qt, 80 * qt, this.cBc);
		
		segm(725 * qt, 420 * qt, 80 * qt, this.cWh);
		
		
		plu(350 * qt, 415 * qt);
		
		plu(500 * qt, 415 * qt);
		
		plu(650 * qt, 415 * qt);
		
		
	} // Конец Восьмая страница информационного блока
	
	// Девятая страница информационного блока
	
	function infoPage_9() { 
		
		curPage = '9';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('10');
		
		forward();
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('-30', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		
		segm(275 * qt, 140 * qt, 80 * qt, this.cGy);
		
		segm(425 * qt, 140 * qt, 80 * qt, this.cGy);
		
		segm(575 * qt, 140 * qt, 80 * qt, this.cBc);
		
		segm(725 * qt, 140 * qt, 80 * qt, this.cWh);
		
		
		plu(350 * qt, 135 * qt);
		
		plu(500 * qt, 135 * qt);
		
		plu(650 * qt, 135 * qt);
		
		
		segm(275 * qt, 280 * qt, 80 * qt, this.cGy);
		
		segm(425 * qt, 280 * qt, 80 * qt, this.cGy);
		
		segm(575 * qt, 280 * qt, 80 * qt, this.cBc);
		
		segm(725 * qt, 280 * qt, 80 * qt, this.cGn);
		
		
		plu(350 * qt, 275 * qt);
		
		plu(500 * qt, 275 * qt);
		
		plu(650 * qt, 275 * qt);
		
		
		segm(275 * qt, 420 * qt, 80 * qt, this.cGy);
		
		segm(425 * qt, 420 * qt, 80 * qt, this.cGy);
		
		segm(575 * qt, 420 * qt, 80 * qt, this.cWh);
		
		segm(725 * qt, 420 * qt, 80 * qt, this.cGn);
		
		
		plu(350 * qt, 415 * qt);
		
		plu(500 * qt, 415 * qt);
		
		plu(650 * qt, 415 * qt);
		
		
	} // Конец Девятая страница информационного блока
	
	// Десятая страница информационного блока
	
	function infoPage_10() { 
		
		curPage = '10';
		
		ctxInfo.clearRect(0, 0, newWidth, newHeight);
		
		drawInfoPageBg('11');
		
		backward();
		
		ctxInfo.save();
		ctxInfo.beginPath();
		ctxInfo.fillStyle = 'rgba(186, 216, 67, 1)';			
		ctxInfo.strokeStyle = cColor;
		ctxInfo.lineWidth = 2.5 * qt
		ctxInfo.font = 50 * qt + 'px a_futurarounddemiregular';
		ctxInfo.textAlign = "center";
		ctxInfo.textBaseline = "middle"; 
		ctxInfo.fillText('-30', 500 * qt, 50 * qt);
		ctxInfo.closePath();
		ctxInfo.restore();
		
		
		segm(275 * qt, 140 * qt, 80 * qt, this.cBc);
		
		segm(425 * qt, 140 * qt, 80 * qt, this.cBc);
		
		segm(575 * qt, 140 * qt, 80 * qt, this.cWh);
		
		segm(725 * qt, 140 * qt, 80 * qt, this.cGn);
		
		
		plu(350 * qt, 135 * qt);
		
		plu(500 * qt, 135 * qt);
		
		plu(650 * qt, 135 * qt);
		
		
		segm(275 * qt, 280 * qt, 80 * qt, this.cBc);
		
		segm(425 * qt, 280 * qt, 80 * qt, this.cBc);
		
		segm(575 * qt, 280 * qt, 80 * qt, this.cWh);
		
		segm(725 * qt, 280 * qt, 80 * qt, this.cGy);
		
		
		plu(350 * qt, 275 * qt);
		
		plu(500 * qt, 275 * qt);
		
		plu(650 * qt, 275 * qt);
		
		
		segm(275 * qt, 420 * qt, 80 * qt, this.cBc);
		
		segm(425 * qt, 420 * qt, 80 * qt, this.cBc);
		
		segm(575 * qt, 420 * qt, 80 * qt, this.cGn);
		
		segm(725 * qt, 420 * qt, 80 * qt, this.cGy);
		
		
		plu(350 * qt, 415 * qt);
		
		plu(500 * qt, 415 * qt);
		
		plu(650 * qt, 415 * qt);
		
		
	} // Конец Десятая страница информационного блока
	
	
	setTimeout(infoPage_0, 100);
	
	function drawInfoBox(){ // Добавление информационного блока в DOM
	
		gameArea.appendChild(canvInfo);
	
	}
	
	function getMousePos(canvInfo, evt) { // Получение координат курсора
        var rect = canvInfo.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvInfo.addEventListener('mousedown', function(evt) { // Удаление информационного блока и возобновление игры
        var mousePos = getMousePos(canvInfo, evt);
		
        if ( mousePos.x > closeButtonX && mousePos.x < closeButtonX + closeButtonWidth && mousePos.y > closeButtonY && mousePos.y < closeButtonY + closeButtonHeight ){
			
			infoRequest = false;
			stopGame = false;
			animateId = requestAnimationFrame(animate);
			canvInfo.parentNode.removeChild(canvInfo);
			
		}
		
		if ( mousePos.x > forwardButtonX && mousePos.x < forwardButtonX + forwardButtonWidth && mousePos.y > forwardButtonY && mousePos.y < forwardButtonY + forwardButtonHeight ){
			
			if (curPage == '0') {
				infoPage_1();
			} else if (curPage == '1') {
				infoPage_2();
			} else if (curPage == '2') {
				infoPage_3();
			} else if (curPage == '3') {
				infoPage_4();
			} else if (curPage == '4') {
				infoPage_5();
			} else if (curPage == '5') {
				infoPage_6();
			} else if (curPage == '6') {
				infoPage_7();
			} else if (curPage == '7') {
				infoPage_8();
			} else if (curPage == '8') {
				infoPage_9();
			} else if (curPage == '9') {
				infoPage_10();
			}
		}
		
		
		
		if ( mousePos.x > backwardButtonX && mousePos.x < backwardButtonX + backwardButtonWidth && mousePos.y > backwardButtonY && mousePos.y < backwardButtonY + backwardButtonHeight ){
			
			if (curPage == '10') {
				infoPage_9();
			} else if (curPage == '9') {
				infoPage_8();
			} else if (curPage == '8') {
				infoPage_7();
			} else if (curPage == '7') {
				infoPage_6();
			} else if (curPage == '6') {
				infoPage_5();
			} else if (curPage == '5') {
				infoPage_4();
			} else if (curPage == '4') {
				infoPage_3();
			} else if (curPage == '3') {
				infoPage_2();
			} else if (curPage == '2') {
				infoPage_1();
			} else if (curPage == '1') {
				infoPage_0();
			}
		}
		
	} );
	
    function showInfo(){ // Функция, осуществляющая вывод блока с информацией
		
		drawInfoBox();
		
	}	
	// Конец Информационный блок
}

// Конец Функция авторесайза


/* function setDeltaScore () { // Функция устанавливает текущее значение изменения счёта (deltaScore)
	
	if ( colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] || colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] || colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] || colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] ) {
		
		deltaScore = '+500';
		
	}
	
	if () {
		
		
		
	}
	
} */

function setDeltaScore () { // Функция устанавливает текущее значение изменения счёта (deltaScore)
	
	if ( // 4 * 1 (+500)
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] ||
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] ||
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '+500';
		newScore = score + 500;
		
	}
	
	else if ( // 1 + 1 + 1 + 1 (+120) (0) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[1] && colorScheme_2 == colors[2] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[2] && colorScheme_2 == colors[3] && colorScheme_3 == colors[0] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[3] && colorScheme_2 == colors[0] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[0] && colorScheme_2 == colors[1] && colorScheme_3 == colors[2] 
	
	) {
		
		deltaScore = '+120';
		newScore = score + 120;
		
	}
	
	else if ( // 1 + 1 + 1 + 1 (+120) (1) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[2] && colorScheme_2 == colors[3] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[3] && colorScheme_2 == colors[0] && colorScheme_3 == colors[2] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[0] && colorScheme_2 == colors[1] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[1] && colorScheme_2 == colors[2] && colorScheme_3 == colors[0] 
	
	) {
		
		deltaScore = '+120';
		newScore = score + 120;
		
	}
	
	else if ( // 1 + 1 + 1 + 1 (+120) (2) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[3] && colorScheme_2 == colors[1] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[0] && colorScheme_2 == colors[2] && colorScheme_3 == colors[3] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[1] && colorScheme_2 == colors[3] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[2] && colorScheme_2 == colors[0] && colorScheme_3 == colors[1] 
	
	) {
		
		deltaScore = '+120';
		newScore = score + 120;
		
	}
	
	else if ( // 1 + 1 + 1 + 1 (+120) (3) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[2] && colorScheme_2 == colors[1] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[0] && colorScheme_1 == colors[3] && colorScheme_2 == colors[2] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[0] && colorScheme_1 == colors[1] && colorScheme_2 == colors[3] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[2] && colorScheme_2 == colors[0] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '+120';
		newScore = score + 120;
		
	}
	
	else if ( // 1 + 1 + 1 + 1 (+120) (4) V
	colorScheme_0 == colors[1] && colorScheme_1 == colors[0] && colorScheme_2 == colors[3] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[3] && colorScheme_2 == colors[2] && colorScheme_3 == colors[0] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[0] && colorScheme_2 == colors[3] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[2] && colorScheme_1 == colors[1] && colorScheme_2 == colors[0] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '+120';
		newScore = score + 120;
		
	}
	
	else if ( // 1 + 1 + 1 + 1 (+120) (5) V
	colorScheme_0 == colors[2] && colorScheme_1 == colors[3] && colorScheme_2 == colors[1] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[0] && colorScheme_2 == colors[2] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[3] && colorScheme_1 == colors[1] && colorScheme_2 == colors[0] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[2] && colorScheme_2 == colors[1] && colorScheme_3 == colors[0] 
	
	) {
		
		deltaScore = '+120';
		newScore = score + 120;
		
	}
	
	else if ( // 2 + 2 (0) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] 
	
	) {
		
		deltaScore = '0';
		newScore = score;
		
	}
	
	else if ( // 2 + 2 (1) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] 
	
	) {
		
		deltaScore = '0';
		newScore = score;
		
	}
	
	else if ( // 2 + 2 (2) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] 
	
	) {
		
		deltaScore = '0';
		newScore = score;
		
	}
	
	else if ( // 2 + 2 (3) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[1] && colorScheme_2 == colors[0] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[2] && colorScheme_2 == colors[1] && colorScheme_3 == colors[2] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[3] && colorScheme_2 == colors[2] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[0] && colorScheme_2 == colors[3] && colorScheme_3 == colors[0] 
	
	) {
		
		deltaScore = '0';
		newScore = score;
		
	}
	
	else if ( // 2 + 2 (4) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[2] && colorScheme_2 == colors[0] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[3] && colorScheme_2 == colors[1] && colorScheme_3 == colors[3] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[0] && colorScheme_2 == colors[2] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[1] && colorScheme_2 == colors[3] && colorScheme_3 == colors[1] 
	
	) {
		
		deltaScore = '0';
		newScore = score;
		
	}
	
	else if ( // 2 + 2 (5) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[3] && colorScheme_2 == colors[0] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[0] && colorScheme_2 == colors[1] && colorScheme_3 == colors[0] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[1] && colorScheme_2 == colors[2] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[2] && colorScheme_2 == colors[3] && colorScheme_3 == colors[2] 
	
	) {
		
		deltaScore = '0';
		newScore = score;
		
	}
	
	else if ( // 2 + 2 (6) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '0';
		newScore = score;
		
	}
	
	else if ( // 2 + 2 (7) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '0';
		newScore = score
		
	}
	
	else if ( // 2 + 2 (8) V
	colorScheme_0 == colors[0] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '0';		
		newScore = score;
		
	}
	
	else if ( // 3 + 1 == (0)
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[1] && colorScheme_3 == colors[0] ||
	colorScheme_0 == colors[0] && colorScheme_1 == colors[1] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] 
	
	) {
		
		deltaScore = '0';
		
	}
	
	else if ( // 3 + 1 == (1)
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[3] && colorScheme_3 == colors[0] ||
	colorScheme_0 == colors[0] && colorScheme_1 == colors[3] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] 
	
	) {
		
		deltaScore = '0';		
		newScore = score;
		
	}
	
	else if ( // 3 + 1 == (2)
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[2] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[1] && colorScheme_1 == colors[2] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[2] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] 
	
	) {
		
		deltaScore = '0';		
		newScore = score;
		
	}
	
	else if ( // 3 + 1 == (3)
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[0] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[1] && colorScheme_1 == colors[0] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[0] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] 
	
	) {
		
		deltaScore = '0';		
		newScore = score;
		
	}
	
	else if ( // 3 + 1 == (4)
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[3] && colorScheme_3 == colors[2] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[3] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] 
	
	) {
		
		deltaScore = '0';		
		newScore = score;
		
	}
	
	else if ( // 3 + 1 == (5)
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[1] && colorScheme_3 == colors[2] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[1] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] 
	
	) {
		
		deltaScore = '0';		
		newScore = score;
		
	}
	
	else if ( // 3 + 1 == (6)
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[0] && colorScheme_3 == colors[3] ||
	colorScheme_0 == colors[3] && colorScheme_1 == colors[0] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[0] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '0';		
		newScore = score;
		
	}
	
	else if ( // 3 + 1 == (7)
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[2] && colorScheme_3 == colors[3] ||
	colorScheme_0 == colors[3] && colorScheme_1 == colors[2] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[2] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '0';		
		newScore = score;
		
	}
	
	else if ( // 3 + 1 -125 (0)
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[0] && colorScheme_1 == colors[0] && colorScheme_2 == colors[2] && colorScheme_3 == colors[0] ||
	colorScheme_0 == colors[0] && colorScheme_1 == colors[2] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[2] && colorScheme_1 == colors[0] && colorScheme_2 == colors[0] && colorScheme_3 == colors[0] 
	
	) {
		
		deltaScore = '-125';
		newScore = score - 125;
		/* if ( newScore <= 0 ) {
			newScore = 0;
		} */
		
	}
	
	else if ( // 3 + 1 -125 (1)
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[1] && colorScheme_2 == colors[3] && colorScheme_3 == colors[1] ||
	colorScheme_0 == colors[3] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[1] && colorScheme_2 == colors[1] && colorScheme_3 == colors[1] 
	
	) {
		
		deltaScore = '-125';
		newScore = score - 125;
		/* if ( newScore <= 0 ) {
			newScore = 0;
		} */
		
	}
	
	else if ( // 3 + 1 -125 (2)
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[0] || 
	colorScheme_0 == colors[2] && colorScheme_1 == colors[2] && colorScheme_2 == colors[0] && colorScheme_3 == colors[2] ||
	colorScheme_0 == colors[2] && colorScheme_1 == colors[0] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] || 
	colorScheme_0 == colors[0] && colorScheme_1 == colors[2] && colorScheme_2 == colors[2] && colorScheme_3 == colors[2] 
	
	) {
		
		deltaScore = '-125';
		newScore = score - 125;
		/* if ( newScore <= 0 ) {
			newScore = 0;
		} */
		
	}
	
	else if ( // 3 + 1 -125 (3)
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[1] || 
	colorScheme_0 == colors[3] && colorScheme_1 == colors[3] && colorScheme_2 == colors[1] && colorScheme_3 == colors[3] ||
	colorScheme_0 == colors[3] && colorScheme_1 == colors[1] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] || 
	colorScheme_0 == colors[1] && colorScheme_1 == colors[3] && colorScheme_2 == colors[3] && colorScheme_3 == colors[3] 
	
	) {
		
		deltaScore = '-125';
		newScore = score - 125;
		/* if ( newScore <= 0 ) {
			newScore = 0;
		} */
		
	}
	
	else {
		
		deltaScore = '-30';
		newScore = score - 30;
		/* if ( newScore <= 0 ) {
			newScore = 0;
		} */
		
	}
}

// Мигание кружка 0

var firstBlink_0 = function() {
	col_0 = bColor;
	setTimeout(
	    function() {
			col_0 = aColor;
		},
			
		250
	);
} ();	

var blink_0 = setInterval (
	
	function() {
		col_0 = bColor;
		setTimeout(
			function() {
				col_0 = aColor;
			},
			
			250
		);
	},
	
	2000
	
);

// Мигание кружка 1

var firstBlink_1 = function() {
	col_1 = aColor;
	setTimeout(
	    function() {
			col_1 = bColor;
		},
			
		250
	);
	setTimeout(
		function() {
			col_1 = aColor;
		},
				
		500
	);
} ();

var blink_1 = setInterval (
	
	function() {
		setTimeout(
		    function() {
				col_1 = bColor;
			},
			
			250
		);
		setTimeout(
		    function() {
				col_1 = aColor;
			},
			
			500
		);
	},
	
	2000
	
);

// Мигание кружка 2

var firstBlink_2 = function() {
	col_2 = aColor;
	setTimeout(
	    function() {
			col_2 = bColor;
		},
		
		500
	);
	setTimeout(
	    function() {
			col_2 = aColor;
		},
		
		750
	);
} ();	

var blink_2 = setInterval (

    function() {
		setTimeout(
		    function() {
				col_2 = bColor;
			},
			
			700
		);
		setTimeout(
		    function() {
				col_2 = aColor;
			},
			
			750
		);
	},
	
	2000
	
);	

// Мигание кружка 3

var firstBlink_3 = function() {
	col_3 = aColor;
	setTimeout(
	    function() {
			col_3 = bColor;
		},
			
		750
	);
	setTimeout(
	    function() {
			col_3 = aColor;
		},
			
		1000
	);
} ();

var blink_3 = setInterval (
	
    function() {
		setTimeout(
		    function() {
				col_3 = bColor;
			},
			
			750
		);
		setTimeout(
		    function() {
				col_3 = aColor;
			},
			
			1000
		);
	},
	
	2000
	
);

// Мигание кружка 4

var firstBlink_4 = function() {
	col_4 = aColor;
	setTimeout(
	    function() {
			col_4 = bColor;
		},
		
		1000
	);
	setTimeout(
	    function() {
			col_4 = aColor;
		},
		
		1250
	);
} ();

var blink_4 = setInterval (
	
	function() {
		setTimeout(
		    function() {
				col_4 = bColor;
			},
			
			1000
		);
		setTimeout(
		    function() {
				col_4 = aColor;
			},
			
			1250
		);
	},
	
	2000
	
);

// Мигание кружка 5

var firstBlink_5 = function() {
	col_5 = aColor;
	setTimeout(
		function() {
			col_5 = bColor;
		},
		
		1250
	);
	setTimeout(
	    function() {
			col_5 = aColor;
		},
		
		1500
	);
} ();

var blink_5 = setInterval (
	
	function() {
		setTimeout(
		    function() {
				col_5 = bColor;
			},
			
			1250
		);
		setTimeout(
			function() {
				col_5 = aColor;
			},
			
			1500
		);
	},
	
	2000
	
);

// Мигание кружка 6

var firstBlink_6 = function() {
	col_6 = aColor;
	setTimeout(
	    function() {
			col_6 = bColor;
		},
		
		1500
	);
	setTimeout(
	    function() {
			col_6 = aColor;
		},
		
	1750
	);
} ();

var blink_6 = setInterval (
	
	function() {
		setTimeout(
		    function() {
				col_6 = bColor;
			},
			
			1500
		);
		setTimeout(
		    function() {
				col_6 = aColor;
			},
			
			1750
		);
	},
	
	2000
	
);

// Мигание кружка 7

var firstBlink_7 = function() {
	col_7 = aColor;
	setTimeout(
		function() {
			col_7 = bColor;
		},
		
		1750
	);
	setTimeout(
	    function() {
			col_7 = aColor;
		},
		
		2000
	);
} ();

var blink_7 = setInterval (
	
	function() {
		setTimeout(
		    function() {
				col_7 = bColor;
			},
			
			1750
		);
		setTimeout(
		    function() {
				col_7 = aColor;
			},
			
			2000
		);
	},
	
	2000
	
);
			//setTimeout(circleStrokeStyleBack, 2000); 

window.addEventListener('resize', resizeGame, false);
window.addEventListener('orientationchange', resizeGame, false);	



var cats = ['cat_0', 'cat_1', 'cat_2', 'cat_3'];

function catFirstStartRand () { // Функция, выбирающая случайным образом позицию кота, который появится первым при загрузке страницы

    if ( inUse_0 == false && inUse_1 == false && inUse_2 == false && inUse_3 == false ) {
	
	    catStartRand ();
		setInterval (catStartRand, 2000);
		//writeFirstMessage(canvas, message);
	
	}

}

function catStartRand () { // Функция, выбирающая случайным образом позицию кота
	
  if (stopGame == false) {
	
	
	var catRandom = Math.floor(Math.random() * cats.length);
	console.log(catRandom);
	
	if ( catRandom == 0 && inUse_0 == true ) {
		
		catRandom = 1; 
		
	}
	
	if ( catRandom == 1 && inUse_1 == true ) {
		
		catRandom = 2; 
		
	}
	
	if ( catRandom == 2 && inUse_2 == true ) {
		
		catRandom = 3; 
		
	}
	
	if ( catRandom == 3 && inUse_3 == true ) {
		
		catRandom = 0; 
		
	}
	
	if ( inUse_0 == false && cats[catRandom] == 'cat_0' && inUse_0 == false ) {
		//console.log(cats[catRandom]);
		//console.log(inUse_0);
		renewRandColor ();
		colorScheme_0 = colors[randColor];
		catUpStart_0();
		
	}
	if ( inUse_1 == false && cats[catRandom] == 'cat_1' && inUse_1 == false  ) {
		//console.log(cats[catRandom]);
		//console.log(inUse_1);
		renewRandColor ();
		colorScheme_1 = colors[randColor];
		catUpStart_1();
	}
	if ( inUse_2 == false && cats[catRandom] == 'cat_2' && inUse_2 == false  ) {
		//console.log(cats[catRandom]);
		//console.log(inUse_2);
		renewRandColor ();
		colorScheme_2 = colors[randColor];
		catUpStart_2();
	}
	if ( inUse_3 == false && cats[catRandom] == 'cat_3' && inUse_3 == false  ) {
		//console.log(cats[catRandom]);
		//console.log(inUse_3);
		renewRandColor ();
		colorScheme_3 = colors[randColor];
		catUpStart_3();
	}
	
  }
}


function writeFirstMessage(canvas) {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height / 10);
	context.fillStyle = 'rgba(225, 238, 255, 1)';
	context.fillRect(0, 0, canvas.width, canvas.height / 10);
	//var firstMessage = '100';
    context.font = 50 * qt + 'px a_futurarounddemiregular';
	context.textAlign = "right";
	context.textBaseline = "middle"; 
    context.fillStyle = 'rgba(195, 222, 255, 1)';
    context.fillText('0', canvas.width - 20 * qt, canvas.height / 20 + 2 * qt);
	
};

function fontLoad (){
	ctxScore.save();
	ctxScore.font = 100 * qt + 'px a_futurarounddemiregular';
	ctxScore.strokeStyle = 'rgba(0, 0, 0, 0)';
	ctxScore.strokeText('a', 0 - 100 * qt, 0 - 100 * qt);
	ctxScore.restore();
	ctxInfo.save();
	ctxInfo.font = 100 * qt + 'px a_futurarounddemiregular';
	ctxInfo.strokeStyle = 'rgba(0, 0, 0, 0)';
	ctxInfo.strokeText('a', 0, 0);
	ctxInfo.restore();
}

function init() {
	
	fontLoad ();
	
	resizeSaver();
	
	setTimeout(startMain, 5000);
	
	
}


function startMain() {
	
	resizeGame();
	
	fontLoad ();

	setInterval (catStartRand, 2000);
	
	setTimeout (writeFirstMessage, 100);

}