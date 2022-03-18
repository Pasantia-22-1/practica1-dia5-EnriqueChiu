


class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }
    set idRaton(idRaton){
        this._idRaton = idRaton;
    }
    toString(){
        return [this._idRaton, this._tipoEntrada, this._marca];
    }
}


//let raton1 = new Raton('wireless', 'genius');
//console.log(raton1);
//let raton2 = new Raton('Bluetooth', 'Dell');
//console.log(raton2);

