// const Robot = function(name,type){
//     this.name= name;
//     this.type = type;
// }

/* 
Inheritance allows reusing of codes without rewriting it
Composition allows the recreation of objects inside a class and using them directly without needing inheritance
*/
class Robot{
    
    constructor(name,type){
        this.name = name;
        this.type= type;
        this.greeting = function (){
            return "I'm " + this.name + "" + " I'm a/an " + this.type + ".";
        }
    }
}

// class BendingUnit extends Robot{

//     constructor(name,type){
//         super(name,type);
//     }
// }
//Creating a class that extends functiions from a parent class
class BendingUnit extends Robot{

    constructor(name,type){
        super(name,type);
    }
    primaryFunction(){

console.log(this.name + " bends things");
    }
}
