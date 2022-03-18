

console.log("listen");


var orden1 = new Orden();



function enviar(){
    
    const forma = document.getElementById('forma');
    let tecladotipo = forma['tecladotipo'];
    let tecladomarca = forma['tecladomarca'];

    let ratontipo = forma['ratontipo'];
    let ratonmarca = forma['ratonmarca'];

    let monitormarca = forma['monitormarca'];
    let monitorsize = forma['monitorsize'];

    let compunombre = forma['compunombre'];


    let teclado1 = new Teclado(tecladotipo.value, tecladomarca.value);
    let monitor1 = new Monitor(monitormarca.value, monitorsize.value);
    let raton1 = new Raton(ratontipo.value, ratonmarca.value)

    let computadora1 = new Computadora(compunombre.value, monitor1.toString(), teclado1.toString(), raton1.toString());

    orden1.agregarComputadora(computadora1.toString());
    let result = orden1.toString();
    let str = `<table class="table table-sm" colspan="3">\n`;
    str += `<th class="text-center table-success" colspan="3" scope="rowgroup">ORDEN</th>\n`;
    str += `<tr>\n<td>Orden</td>\n<td>idOrden</td>\n<td>${result[0]}</td>\n</tr>\n`;
    
    for (let index = 0; index < result[1].length; index++) {
        const element = result[1][index];
        str += `<th class="text-center table-dark" colspan="3" scope="rowgroup">COMPUTADORA NO.${index+1}</th>\n<tr></tr>`;
        str += `<th class="text-center table-success" colspan="3" scope="rowgroup">COMPUTADORA</th>`;
        str += `<tr>\n<td>Computadora</td>\n<td>idComputadora</td>\n<td>${element[0]}</td>\n</tr>\n`;
        str += `<tr>\n<td>Computadora</td>\n<td>Nombre</td>\n<td>${element[1]}</td>\n</tr>\n`;
        
        str += `<th class="text-center table-success" colspan="3" scope="rowgroup">MONITOR</th>`;
        str += `<tr>\n<td>Monitor</td>\n<td>idMonitor</td>\n<td>${element[2][0]}</td>\n</tr>\n`;
        str += `<tr>\n<td>Monitor</td>\n<td>Marca</td>\n<td>${element[2][1]}</td>\n</tr>\n`;
        str += `<tr>\n<td>Monitor</td>\n<td>Size</td>\n<td>${element[2][2]}</td>\n</tr>\n`;
        
        str += `<th class="text-center table-success" colspan="3" scope="rowgroup">TECLADO</th>`;
        str += `<tr>\n<td>Teclado</td>\n<td>idTeclado</td>\n<td>${element[3][0]}</td>\n</tr>\n`;
        str += `<tr>\n<td>Teclado</td>\n<td>TipoEntrada</td>\n<td>${element[3][1]}</td>\n</tr>\n`;
        str += `<tr>\n<td>Teclado</td>\n<td>Marca</td>\n<td>${element[3][2]}</td>\n</tr>\n`;
        
        str += `<th class="text-center table-success" colspan="3" scope="rowgroup">RATON</th>`;
        str += `<tr>\n<td>Raton</td>\n<td>idRaton</td>\n<td>${element[4][0]}</td>\n</tr>\n`;
        str += `<tr>\n<td>Raton</td>\n<td>TipoEntrada</td>\n<td>${element[4][1]}</td>\n</tr>\n`;
        str += `<tr>\n<td>Raton</td>\n<td>Marca</td>\n<td>${element[4][2]}</td>\n</tr>\n`;
    }
    str += `</table>\n`;
    
    document.getElementById('result').innerHTML = `${str}`;

} 
