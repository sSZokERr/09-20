function katt(){
    window.alert('Katt')
}
function duppla(){
    window.alert('katt katt')
}
document.getElementById('fogomb').addEventListener('click', katt)
document.getElementById('fogomb').addEventListener('dblclick', duppla)