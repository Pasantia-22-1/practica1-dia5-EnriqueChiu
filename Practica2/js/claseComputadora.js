
class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get nombre(){
        return this._nombre
    }
    get monitor(){
        return this._monitor
    }
    get teclado(){
        return this._teclado
    }
    get raton(){
        return this._raton
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return [this._idComputadora, this._nombre, this._monitor, this._teclado, this._raton];
    }
}
