// Calculo y muestro por pantalla el //
//precio final de un producto despues//
// de aplicarle un descuento del 10% a //
//un precio inicial de $450,50//

let precioProducto: number = 450.5;
let porcentajeDescuento: number = 0.1;
let descuento: number = precioProducto * porcentajeDescuento;
let precioFinal: number = precioProducto - descuento;
console.log(precioFinal);
