function katt() {
	window.alert('Katt')
    document.getElementById('fogomb').classList.toggle('fontos')

    if (document.getElementById('fogomb').classList.contains('fontos')){
        document.getElementById('fogomb').textContent = 'Ez egy fontos gomb';
    }else {
        document.getElementById('fogomb').textContent = "Ez egy sima gomb";
    }
}

function duppla() {
	window.alert('katt katt')
}

document.getElementById('fogomb').addEventListener('click', katt)
document.getElementById('fogomb').addEventListener('dblclick', duppla)

function folotte() {
	console.log('pointer')
}

document.getElementById('bekezdes').addEventListener('pointerover', folotte)

function szamol() {
	let egyikszam = document.getElementById('egyik').value;
	let masikszam = document.getElementById('masik').value;
	document.getElementById('ered').value = (parseFloat(egyikszam) + parseFloat(masikszam));

	document.getElementById('kivonas').textContent = (parseFloat(egyikszam) - parseFloat(masikszam));
}

function betuszin(e){
    let szin = e.currentTarget.value
    console.log(szin);
    document.body.style.color = szin;
}

function hatterszin(e) {
    let szin = e.currentTarget.value;
    console.log(szin);
    document.getElementById('szinezo').style.backgroundColor = szin;
}


function init() {
	document.getElementById('masik').addEventListener('change', szamol)
	document.getElementById('egyik').addEventListener('change', szamol)

	document.getElementById('hatter').addEventListener('input', hatterszin)
	document.getElementById('betu').addEventListener('input', betuszin)
	console.log('init')
}

document.addEventListener('DOMContentLoaded', init)
console.log('js vege')