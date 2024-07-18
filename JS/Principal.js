/* 10. TRABAJADORES EMPRESA
|* Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas
|* trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a
|* 10$. y la hora en tiempo extra se paga a 25$. Se desea que el programa genere monto total
|* pagado por horas extras y nombre del trabajador con el menor salario obtenido.
|* Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas
|* regular, números de horas extra) (Mary, 30, 10), (José, 35, 5), (Carlos, 35, 0), (Pedro, 25, 10)
|* Monto total pagado por horas extras: 625$
|* Nombre del trabajador con el menor salario obtenido: Carlos con un salario de 350$
*/
import Cl_trabajador from "./Cl_trabajador.js";
import cl_empresa from "./Cl_empresa.js";

let tra1 = new Cl_trabajador("Mary", 30, 10);
let tra2 = new Cl_trabajador("José", 35, 5);
let tra3 = new Cl_trabajador("Carlos", 35, 0);
let tra4 = new Cl_trabajador("Pedro", 25, 10);
let empresa = new cl_empresa();

empresa.procesarTrabajador(tra1);
empresa.procesarTrabajador(tra2);
empresa.procesarTrabajador(tra3);
empresa.procesarTrabajador(tra4);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Monto total pagado por horas extras: ${empresa.calcMontoHorasExt()}$
<br>Nombre del trabajador con el menor salario obtenido: ${empresa.devolverNombreMenorSal()} con un 
salario de ${empresa.devolverMenorSal()}$
`;