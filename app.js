// const figuras ={
//     alto: 60,
//     ancho: 40,
//     color: "verde",
//     tomarAncho(){
//         return (figuras.ancho);
//     }
// }



class Figuras{
    constructor(alto, ancho, color){
        this.alto = alto;
        this.ancho = ancho;
        this.color = color;
    }
    tomarAncho(base){ // recibe el parametro 
        return (this.ancho*base); // retorna el valor del ancho 
    }

    tomarColor(){
        return (this.color);
    }

    //////////////// logica del objeto ////////////////
    // get es para resolver la logica de nuestro objeto 
    // get duplicarAncho(){
    //     let fijarAncho = this.ancho *2;
    //     return (fijarAncho);
    // }
}


// tenemos que instanciar al objeto para usarlo 
const figuras = new Figuras(60,40,"azul");

// una vez que se instancea, se pide cosas 
function tomarAncho(){
    console.log(figuras.ancho);
}

// le paso el parametro de la multiplicacion del ancho
console.log(figuras.tomarAncho(2));
console.log(figuras.tomarColor()); 

/////// creo otra instancia de Figuras 
const rectangulo = new Figuras(10,50,"verde");

// le paso el parametro de la multiplicacion del ancho
console.log(rectangulo.tomarAncho(4));
console.log(rectangulo.tomarColor());