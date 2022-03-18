


class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }
    set idTeclado(idTeclado){
        this._idTeclado = idTeclado;
    }
    toString(){
        return [this._idTeclado, this._tipoEntrada, this._marca];
    }
}

