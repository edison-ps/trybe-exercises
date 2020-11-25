let a = "bishop";

switch (a.toLowerCase()) {

    case "king":
    case "queen":
    case "pawn":

        console.log  ("All directions");
        break;

    case "rock":

        console.log  ("Horizontal and vertical");
        break;

    case "bishop":

        console.log  ("Diagonals");
        break;

    case "knight":

        console.log  ("L movement");
        break;

    default:

        console.log ("Error")

}