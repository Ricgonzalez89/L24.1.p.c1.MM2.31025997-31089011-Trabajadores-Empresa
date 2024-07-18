export default class cl_empresa{
    constructor(){
        this.acumHorasExt = 0;
        this.menorSalario = 9999999;
        this.auxNombre = "";
    }

    procesarTrabajador(t){
        this.acumHorasExt += t.horasExtra;
        if (t.calcSalario() < this.menorSalario){
            this.menorSalario = t.calcSalario();
            this.auxNombre = t.nombre;
        }
    }

    calcMontoHorasExt(){
        return this.acumHorasExt * 25;
    }

    devolverNombreMenorSal(){
        return this.auxNombre;
    }

    devolverMenorSal(){
        return this.menorSalario;
    }
}