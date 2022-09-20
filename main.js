function katt(){
    window.alert('Katt')
}

function duppla(){
    window.alert('katt katt')
}

document.getElementById('fogomb').addEventListener('click', katt)
document.getElementById('fogomb').addEventListener('dblclick', duppla)

function folotte(){
    console.log('pointer')
}

document.getElementById('bekezdes').addEventListener('pointerover', folotte)

function szamol(){
    let egyikszam = document.getElementById('egyik').value;
    let masikszam = document.getElementById('masik').value;
    document.getElementById('ered').value = (parseFloat(egyikszam) + parseFloat(masikszam));

    document.getElementById('kivonas').textContent = (parseFloat(egyikszam) - parseFloat(masikszam));
}



function init(){
    document.getElementById('masik').addEventListener('change', szamol)
    document.getElementById('egyik').addEventListener('change', szamol)
    console.log('init')
}

document.addEventListener('DOMContentLoaded', init)
console.log('js vege')