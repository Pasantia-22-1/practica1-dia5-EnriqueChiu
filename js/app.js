console.log('listen')

function sumar(){
    const forma = document.getElementById('forma');
    let opeIzq = forma['opeIzq'];
    let opeDer = forma['opeDer'];
    let result = parseInt(opeIzq.value)+parseInt(opeDer.value);
    if(isNaN(result)){
        result = 'Input is not Number';
    }
    document.getElementById('result').innerHTML = `Result: ${result}`
    console.log(`Result: ${result}`);
}
function restar(){
    const forma = document.getElementById('forma');
    let opeIzq = forma['opeIzq'];
    let opeDer = forma['opeDer'];

    
    let result = parseInt(opeIzq.value)-parseInt(opeDer.value);
    if(isNaN(result) || parseInt(opeIzq.value) < 0 || parseInt(opeDer.value) < 0){
        result = 'Input is not Number or Number is Negative';
    }
    document.getElementById('result').innerHTML = `Result: ${result}`
    console.log(`Result: ${result}`);
}
function div(){
    const forma = document.getElementById('forma');
    let opeIzq = forma['opeIzq'];
    let opeDer = forma['opeDer'];
    let result = parseInt(opeIzq.value)/parseInt(opeDer.value);
    if(isNaN(result)){
        result = 'Input is not Number';
    }
    document.getElementById('result').innerHTML = `Result: ${result}`
    console.log(`Result: ${result}`);
}
function mul(){
    const forma = document.getElementById('forma');
    let opeIzq = forma['opeIzq'];
    let opeDer = forma['opeDer'];
    let result = parseInt(opeIzq.value)*parseInt(opeDer.value);
    if(isNaN(result)){
        result = 'Input is not Number';
    }
    document.getElementById('result').innerHTML = `Result: ${result}`
    console.log(`Result: ${result}`);
}

function limpiar(){
    document.getElementById('opeIzq').value = "";
    document.getElementById('opeDer').value = "";
    document.getElementById('result').innerHTML = `Limpiando.......`
    console.log("limpiando....");
}