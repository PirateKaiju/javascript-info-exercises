"use strict";

let calculator = {
    value1: 0,
    value2: 0,

    read(){
        this.value1 = prompt("Primeiro valor: ");
        this.value2 = prompt("Segundo valor: ");
    },

    sum(){
        return(Number(this.value1) + Number(this.value2));
    },

    mult (){
        return(Number(this.value1) * Number(this.value2));
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mult());