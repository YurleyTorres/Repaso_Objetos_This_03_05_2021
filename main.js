

// const obj1 = {};
// const obj2 = new Object();
// const obj3 = Object.prototype.constructor();

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// const obj = {
//     edad: null,
//     saludar: function (){
//         return "Hola Como estas";
//     }
// };
// obj.nombre = null;
// obj.apellido = null;

// console.log(obj);
// console.log(obj.saludar.call(null));

// const data = {
//     nombre: "Miguel Angel Castro"
// };
// console.log(obj);
// let ejecutar = obj.saludar.bind(data);
// ejecutar();
// console.log(ejecutar());
// data.nombre = "Diego Ismael Florez Beltran";
// console.log(ejecutar());




const obj = {
    edad: 33,
    nombre: "Marly Yurley Torres Silva",
    saludar: function (){
        return `Hola Como ${this.nombre} comon estas`;
    },
};
obj.apellido = "Torres";
const inst = Object.create(obj);
inst.nombre = "Marly";
inst.setNombre = function (){ obj.nombre = inst.nombre };
inst.getNombre = function (){ return obj.nombre; };
console.log(obj);
console.log(inst);
console.log(inst.saludar());




