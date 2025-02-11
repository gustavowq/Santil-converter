

const formulario = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

const valorRecebido = document.getElementById ('value-real');
const moedaSelecionada = document.getElementById ('currency');
const resultado = document.getElementById ('Resultado');

let conversao = 0

function handlesubmit (e) {   
    e.preventDefault () 
    
    

    if (!valorRecebido.value || valorRecebido <= 0){
        alert ("Não foi detectado nehum valor. insira um valor para conversão ser executada");
        

    } else if (!moedaSelecionada.value){
        alert('Nenhuma moeda selecionada. selecione uma moeda para conversão ser executada');

    };
    
    if (currency.value ==='Dol'){
        conversao = valorRecebido.value * 5.78;
        resultado.innerHTML = conversao.toFixed(2) + ('US$');

    } else if ( currency.value === 'Eur') {
        conversao = valorRecebido.value * 5.96 ;
        resultado.innerHTML = conversao.toFixed(2) + ('€') ;
    }

}


