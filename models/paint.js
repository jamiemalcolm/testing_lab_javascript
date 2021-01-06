const Paint = function(color, liters){
    this.color = color;
    this.liters = liters;
    this.isEmpty = false;
}

Paint.prototype.checkIfEmpty = function() {
    if(this.liters > 0){
        this.isEmpty = false;
        console.log(`${this.color} has paint left`);
    }else {
        this.isEmpty = true;
        console.log(`${this.color} is empty`);
    }
}

Paint.prototype.emptyItself = function() {
    if(this.isEmpty === false){
        this.liters = 0
    }
}

module.exports = Paint;