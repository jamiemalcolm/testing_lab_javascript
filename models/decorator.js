const Decorator = function(name, ){
    this.name = name;
    this.paintStock = []; 
}

// function to multiply liters of paint by paints in list 
Decorator.prototype.getTotalPaint = function(paintStock){
    console.log(`Total paint in litres: ${litres}`)

}

module.exports = Decorator;