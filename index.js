// Your code here
let cat, dog, bird, bird2;
class Cat{
    constructor(name,gender){
        this.name = name
        this.gender =gender

    }
    speak(){
        return `${this.name} says meow!`
    }
}
class Dog{
constructor(name,gender){
    this.name = name
    this.gender = gender
}
speak(){
    return `${this.name} says woof!`
}
}
class Bird{
    constructor(name,gender){
        this.name =name
        this.gender = gender
    }
    speak(){
        if(this.gender === "male")
         return `It\'s me! ${this.name}, the parrot!`
        else if (this.gender === "female") {
              return `${this.name} says squawk!`
        } 
    }
}

cat = new Cat("Sasha", "female")
dog = new Dog("Rufio", "male")
bird = new Bird("Pablo", "male")
bird2 = new Bird("Mable", "female")