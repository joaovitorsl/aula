function expressao(numero){
    document.getElementById("number1").value+=numero;
}

function res(){
    var res = (calc = eval(document.getElementById("number1").value));
    var n = parseInt(res);
    document.getElementById("number1").value = n;
}

function get_value(input, default_value) {
    return input === undefined || isNaN(input) ? default_value : input; }
