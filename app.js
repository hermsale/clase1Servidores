// const figuras ={
//     alto: 60,
//     ancho: 40,
//     color: "verde",
//     tomarAncho(){
//         return (figuras.ancho);
//     }
// }



class Figuras{
    constructor(alto=0, ancho=0, color="negro"){
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

console.log(typeof rectangulo.alto); // nos muestra el tipo 

// HERENCIA 
// creo una herencia de Figuras 
class Circulo extends Figuras{
    constructor(circunferencia){
        super(20,40,"azul"); // la propiedad super, trae las propiedades de Figuras 
        this.circunferencia = circunferencia;
    }
}

const circulo1 = new Circulo(40);

console.log(circulo1.circunferencia);

////////////////////////////////////////////////////////////////////////////////////
// ejercicio 2

class Mueble{
    constructor(material,patas,peso){
        this.material = material;
        this.patas = patas;
        this.peso = peso;
    }
   
    mostrarPatas(){
        // va this porque nos estamos refiriendo al mismo objeto que instanciamos 
        if(this.patas===0){
            // return(console.log("no tiene patas"));
            return ("no tiene patas");
        }else{
            // colocamos this porque nos referimos al mismo objeto instanciado 
            return (`tiene ${this.patas} patas`);
        }
    }

}

const mesa = new Mueble("pino",4,300);

console.log(mesa.mostrarPatas());