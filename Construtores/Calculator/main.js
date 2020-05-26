"use strict"

function Calculator(){
    this.valor1 = 0;
    this.valor2 = 0;
    this.read = function (){
        this.valor1 = +prompt();
        this.valor2 = +prompt();

    };

    this.sum = function (){
        return(+this.valor1 + this.valor2);
    };
};

let calc = new Calculator();

calc.read();
alert(calc.sum());