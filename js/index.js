const porcentaje = document.getElementById('porcentaje');
const valor = document.getElementById('valor');
const btnCalcular = document.getElementById('btnCalcular');
const total = document.getElementById('total');


btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();
    if(porcentaje.value >= 100){
        alert(`Ingresaste ${porcentaje.value}%, intentalo con un porcentaje mas bajo!`);
        porcentaje.value = '';
        return;
    }else if(porcentaje.value <= 0){
        alert(`Ingresaste ${porcentaje.value}%, intentalo con un porcentaje mas alto!`);
        porcentaje.value = '';
        return;
    }else if(valor.value <= 0){
        alert(`Ingresaste $${valor.value}, este valor no es correcto. Intenta con otro!`)
        return;
    }
    total.innerHTML = 
    `<p>Valor del producto ${valor.value} mas el ${porcentaje.value}% agregado</p>
    
    <h2>${porcentual()}</h2>`;
});

function porcentual() {
    return ((parseInt(porcentaje.value) * parseInt(valor.value)/100) + (parseInt(valor.value)));
   
};