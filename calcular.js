
function mensagem(numero){
    var dados = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = dados + numero  
}
function calcular(){
    var resultado = document.getElementById('texto').innerHTML;
    if (resultado){
        document.getElementById('texto').innerHTML = eval(resultado)
    } else {
        document.getElementById('texto').innerHTML = ''
    }
}