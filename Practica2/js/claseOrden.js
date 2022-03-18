

class Orden{
    static contadorOrdenes = 0;
    
    constructor(){
        this._computadoras= [];
        this._idOrden = ++Orden.contadorOrdenes;
    }

    get computadora(){
        return this._computadoras;
    }
    get orden(){
        return this._idOrden;
    }

    set computadora(computadora){
        this._computadoras = computadora;
    }
    set orden(orden){
        this._idOrden = orden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        console.log(`Orden: [idOrden: ${this._idOrden}, ${this._computadoras}]`);
        
    }
    toString(){
        return [this._idOrden, this._computadoras];
    }
}
