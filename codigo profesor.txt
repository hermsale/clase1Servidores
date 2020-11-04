class Figuras  {
    constructor(alto=0, ancho=0, color="negro"){
        this.alto = alto;
        this.ancho = ancho;
        this.color = color;
    }
    tomarAncho(pBase){
        return (this.ancho * pBase)
    }
    tomarColor(){
        return(this.color)
    }
}
class Circulo extends Figuras {
    constructor(alto, ancho, color, circunsferencia){
        super(alto, ancho, color);
        this.circunsferencia = circunsferencia;
    }
}
const circulo1 = new Circulo(40 /*, alto=40, ancho=20, color="verde"*/);
console.log(circulo1.color);
/*
console.log(typeof Figuras)
const figuras = new Figuras(10,20,"blanco");
console.log(figuras.tomarAncho(4));
console.log(figuras.tomarColor());
const rectangulo = new Figuras(5,30,"azul");
const cuadrado = new Figuras(5,5,"gris");
const triangulo = new Figuras(10,40,"rosa");
console.log(rectangulo.tomarColor());
console.log(figuras.tomarColor());
*/
/*
    get duplicarAncho(){
        let fijarAncho = this.ancho * 2;
        if()
        return(fijarAncho)
    }
*/