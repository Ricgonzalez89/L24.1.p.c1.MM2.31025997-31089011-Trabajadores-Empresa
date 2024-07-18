export default class Cl_trabajador{
    constructor(n, hR, hE){
        this.nombre = n;
        this.horasRegular = +hR;
        this.horasExtra = +hE;
    }

    set nombre(n){
        this._nombre = n;
    }

    set horasRegular(hR){
        this._horasRegular = +hR;
    }

    set horasExtra(hE){
        this._horasExtra = +hE;
    }

    get nombre(){
        return this._nombre;
    }

    get horasRegular(){
        return this._horasRegular;
    }

    get horasExtra(){
        return this._horasExtra;
    }

    calcSalario(){
        return (this.horasRegular * 10) + (this.horasExtra * 25);
    }
}