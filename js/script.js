

window.onload = function() {  //make sure this Anonymous function load....., after everything is ready.
    /*------------------------------------------------
    Variables
    --------------------------------------------
    */
    var num; //hold number of canvas
    var box; // hold canvas element, "holds: which box was clicked?"
    var context; //
    var numberOfTurns = 1; //how many turns
    var filled; //9 values of true or false
    var symbols; //x or o
    var winner;
    var gameOver = false;

    filled = [false, false, false, false, false, false, false, false, false];
    symbols = ['','','','','', '','','',''];
    winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    //2. NewGame event function
    // New Game click event
    var butt = document.getElementById("button");
    butt.addEventListener("click", newGame);

    //newGame function
    function newGame() {
        document.location.reload();
    }
    //3.Canvas is clicked on box number
    document.getElementById("ticTacToe-container").addEventListener("click", function (even) {
        boxClick(even.target.id);
    });
    // defining the boxClicking function
    function boxClick(numId) {
        box = document.getElementById(numId);
        context = box.getContext("2d");

        switch (numId) {
            case "square1": num = 1;
            break;
            case "square2": num = 2;
                break;
            case "square3": num = 3;
                break;
            case "square4": num = 4;
                break;
            case "square5": num = 5;
                break;
            case "square6": num = 6;
                break;
            case "square7": num = 7;
                break;
            case "square8": num = 8;
                break;
            case "square9": num = 9;
                break;

        }
        //Draw X and O on the canvas
        if(filled[num-1] === false){
            if(gameOver === false) {
                if (numberOfTurns % 2 !== 0) {
                    context.beginPath();
                    context.moveTo(15, 15);
                    context.lineTo(85, 85);
                    context.moveTo(85, 15);
                    context.lineTo(15, 85);
                    context.strokeStyle = "white";
                    context.stroke();
                    context.closePath();
                    symbols[num - 1] = 'X';
                }
                else {
                    context.beginPath();
                    context.arc(50, 50, 35, 0, 2 * Math.PI, false);
                    context.strokeStyle = "white";
                    context.stroke();
                    context.closePath();
                    symbols[num - 1] = 'O';
                }
                numberOfTurns++;
                filled[num - 1] = true;
            }
        }
        else{

        }
    }


}