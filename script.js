var plus = document.getElementById("plus")
var less = document.getElementById("less")
var divisao = document.getElementById("bar")
var mult = document.getElementById("multi")

var input = document.getElementById("maininput")

var one = document.getElementById("um")


function limpar() {

    input.value = ""

    var c = document.getElementById("clear")

    c.style.animationName = "click"
    c.style.animationDuration = "0.1s"

}

   function num(n) {


    input.value += n;

    let todos = document.getElementsByTagName("button")

    switch(n) { 

        case '+': todos[0].style.animationName = "click"
                  todos[0].style.animationDuration = "0.1s"
        break;

        case '-': todos[1].style.animationName = "click"
                  todos[1].style.animationDuration = "0.1s"
        break;
        
        case '/': todos[2].style.animationName = "click"
                  todos[2].style.animationDuration = "0.1s"
        break;

        case '*': todos[3].style.animationName = "click"
                  todos[3].style.animationDuration = "0.1s"
        break;

        case 1:   todos[4].style.animationName = "click"
                  todos[4].style.animationDuration = "0.1s"
        break; 

        case 2:   todos[5].style.animationName = "click"
                  todos[5].style.animationDuration = "0.1s"
        break;

        case 3:   todos[6].style.animationName = "click"
                  todos[6].style.animationDuration = "0.1s"
        break; 

        case 4:   todos[7].style.animationName = "click"
                  todos[7].style.animationDuration = "0.1s"
        break; 

        case 5:   todos[8].style.animationName = "click"
                  todos[8].style.animationDuration = "0.1s"
        break;

        case 6:   todos[9].style.animationName = "click"
                  todos[9].style.animationDuration = "0.1s"
        break;

        case 7:   todos[10].style.animationName = "click"
                  todos[10].style.animationDuration = "0.1s"
        break;
        
        case 8:   todos[11].style.animationName = "click"
                  todos[11].style.animationDuration = "0.1s"
        break;

        case 9:   todos[12].style.animationName = "click"
                  todos[12].style.animationDuration = "0.1s"
        break; 

        case '=': todos[14].style.animationName = "click"
                  todos[14].style.animationDuration = "0.1s"
        break;

        case 0:   todos[15].style.animationName = "click"
                  todos[15].style.animationDuration = "0.1s"
        break;
    }

   }

   function calc() {

    if (input.value) {
    input.value = eval(input.value);}

    var calc = document.getElementById("result")

    calc.style.animationName = "click"
    calc.style.animationDuration = "0.1s"

   }

  function luzinha(algo) {
    let todos = document.getElementsByTagName("button")

    switch(algo) {

        case '+': todos[0].style.animationName = "piscar"
                  todos[0].style.animationDuration = "0.1s"
                  todos[0].style.animationFillMode = "forwards";
        break;

        case '-': todos[1].style.animationName = "piscar"
                  todos[1].style.animationDuration = "0.1s"
                  todos[1].style.animationFillMode = "forwards";
        break;
        
        case '/': todos[2].style.animationName = "piscar"
                  todos[2].style.animationDuration = "0.1s"
                  todos[2].style.animationFillMode = "forwards";
        break;

        case '*': todos[3].style.animationName = "piscar"
                  todos[3].style.animationDuration = "0.1s"
                  todos[3].style.animationFillMode = "forwards";
        break;

        case 1:   todos[4].style.animationName = "piscar"
                  todos[4].style.animationDuration = "0.1s"
                  todos[4].style.animationFillMode = "forwards";
        break; 

        case 2:   todos[5].style.animationName = "piscar"
                  todos[5].style.animationDuration = "0.1s"
                  todos[5].style.animationFillMode = "forwards";
        break;

        case 3:   todos[6].style.animationName = "piscar"
                  todos[6].style.animationDuration = "0.1s"
                  todos[6].style.animationFillMode = "forwards";
        break; 

        case 4:   todos[7].style.animationName = "piscar"
                  todos[7].style.animationDuration = "0.1s"
                  todos[7].style.animationFillMode = "forwards";
        break; 

        case 5:   todos[8].style.animationName = "piscar"
                  todos[8].style.animationDuration = "0.1s"
                  todos[8].style.animationFillMode = "forwards";
        break;

        case 6:   todos[9].style.animationName = "piscar"
                  todos[9].style.animationDuration = "0.1s"
                  todos[9].style.animationFillMode = "forwards";
        break;

        case 7:   todos[10].style.animationName = "piscar"
                  todos[10].style.animationDuration = "0.1s"
                  todos[10].style.animationFillMode = "forwards";
        break;
        
        case 8:   todos[11].style.animationName = "piscar"
                  todos[11].style.animationDuration = "0.1s"
                  todos[11].style.animationFillMode = "forwards";
        break;

        case 9:   todos[12].style.animationName = "piscar"
                  todos[12].style.animationDuration = "0.1s"
                  todos[12].style.animationFillMode = "forwards";
        break; 

        case 'c': todos[13].style.animationName = "piscar"
                  todos[13].style.animationDuration = "0.1s"
                  todos[13].style.animationFillMode = "forwards";
        break;

        case '=': todos[14].style.animationName = "piscar"
                  todos[14].style.animationDuration = "0.1s"
                  todos[14].style.animationFillMode = "forwards";
        break;

        case 0:   todos[15].style.animationName = "piscar"
                  todos[15].style.animationDuration = "0.1s"
                  todos[15].style.animationFillMode = "forwards";
        break;


    }


  }

  function luz2(arg) {

    let todos = document.getElementsByTagName("button")
    
    switch(arg) {

        case "+": todos[0].style.animationName = "voltar";
                  todos[0].style.animationDuration = "0.1s";
                  todos[0].style.animationFillMode = "forwards";
        break;

        case "-": todos[1].style.animationName = "voltar";
                  todos[1].style.animationDuration = "0.1s";
                  todos[1].style.animationFillMode = "forwards";
        break;

        case "/": todos[2].style.animationName = "voltar";
                  todos[2].style.animationDuration = "0.1s";
                  todos[2].style.animationFillMode = "forwards";
        break;

        case "*": todos[3].style.animationName = "voltar";
                  todos[3].style.animationDuration = "0.1s";
                  todos[3].style.animationFillMode = "forwards";
        break;

        case 1:   todos[4].style.animationName = "voltar";
                  todos[4].style.animationDuration = "0.1s";
                  todos[4].style.animationFillMode = "forwards";
        break; 

        case 2:   todos[5].style.animationName = "voltar"
                  todos[5].style.animationDuration = "0.1s"
                  todos[5].style.animationFillMode = "forwards";
        break; 

        case 3:   todos[6].style.animationName = "voltar"
                  todos[6].style.animationDuration = "0.1s"
                  todos[6].style.animationFillMode = "forwards";
        break; 

        case 4:   todos[7].style.animationName = "voltar"
                  todos[7].style.animationDuration = "0.1s"
                  todos[7].style.animationFillMode = "forwards";
        break; 

        case 5:   todos[8].style.animationName = "voltar"
                  todos[8].style.animationDuration = "0.1s"
                  todos[8].style.animationFillMode = "forwards";
        break;

        case 6:   todos[9].style.animationName = "voltar"
                  todos[9].style.animationDuration = "0.1s"
                  todos[9].style.animationFillMode = "forwards";
        break;

        case 7:   todos[10].style.animationName = "voltar"
                  todos[10].style.animationDuration = "0.1s"
                  todos[10].style.animationFillMode = "forwards";
        break;
        
        case 8:   todos[11].style.animationName = "voltar"
                  todos[11].style.animationDuration = "0.1s"
                  todos[11].style.animationFillMode = "forwards";
        break;

        case 9:   todos[12].style.animationName = "voltar"
                  todos[12].style.animationDuration = "0.1s"
                  todos[12].style.animationFillMode = "forwards";
        break;

        case 'c':   todos[13].style.animationName = "voltar"
                  todos[13].style.animationDuration = "0.1s"
                  todos[13].style.animationFillMode = "forwards";
        break;

        case '=':   todos[14].style.animationName = "voltar"
                  todos[14].style.animationDuration = "0.1s"
                  todos[14].style.animationFillMode = "forwards";
        break;

        case 0:   todos[15].style.animationName = "voltar"
                  todos[15].style.animationDuration = "0.1s"
                  todos[15].style.animationFillMode = "forwards";
        break;
    }

  }
 

