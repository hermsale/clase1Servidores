// const figuras ={
//     alto: 60,
//     ancho: 40,
//     color: "verde",
//     tomarAncho(){
//         return (figuras.ancho);
//     }
// }



class Figuras{
    constructor(){
        this.alto = 60;
        this.ancho = 40;
        this.color = "verde";
    }
    tomarAncho(){
        return (this.ancho); // retorna el valor del ancho 
    }

    //////////////// logica del objeto ////////////////
    // get es para resolver la logica de nuestro objeto 
    get duplicarAncho(){
        let fijarAncho = this.ancho *2;
        return (fijarAncho);
    }
}


// tenemos que instanciar al objeto para usarlo 
const figuras = new Figuras();

// una vez que se instancea, se pide cosas 
function tomarAncho(){
    console.log(figuras.ancho);
}

