"use strict"

function A (){

    this.toString = function() {
        return "ttt";


    };


    //return {name: "TTT"};
}

function B (){

    this.toString = function() {
        return "ttt";


    };



    //return {name: "TTT"};

}

let a = new A();
let b = new B();

alert(a == b);