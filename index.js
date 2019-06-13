// function Universe(universeProps) {
// let x = "some private variable"
// this.age = universeProps.age
// this.size = universeProps.size
// this.expand = function() {
//     return this.age * this.size

// }
// }

// Universe.prototype.expand = function () {
//     console.log('universe expand method works as well')
//     // return this.age * this.size
// }

// console.log(Universe.prototype)

// const universe1 = new Universe(200,1)
// const universe2 = new Universe(400,4)
// const universe3 = new Universe(10000000, 10)

class Universe {
  constructor(age, size) {
    this.age = age;
    this.size = size;
  }

  expand() {
    console.log("this expand ran! ---- ${this.age} ${this.size}");
  }
  anotherMethod() {
    console.log("another method ran!");
  }
}

const universe1 = new Universe("my age", "my size");

// console.log("universe1", universe1);

class Planet extends Universe {
  constructor(planetBaz, planetFooFoo) {
      super(planetBaz, planetFooFoo)
    this.planetBaz = planetBaz;
    this.planetFooFoo = planetFooFoo;
  }

  myplanetMethod() {
    console.log("my planet method works");
  }
}

// const planet1 = new Planet("myplanetBaz", "myPlanetFooFoo");
const planet1 = new Planet('1', '2','3', '4')
console.log(planet1);

// console.log(universe1, universe2, universe3)

// // const planetProps = {prop: 'prop', prop1: 'prop1'}
// function Planet(planetProps) {
// Universe.call(this, planetProps)
// this.prop = planetProps.prop
// this.prop1 = planetProps.prop1
// }

// Planet.prototype = Object.create(Universe.prototype)

// Planet.prototype.method1 = function() {
//     console.log('method1 works')
// }

// console.log(Planet.prototype)

// const planet1 = new Planet( {
//     age: 'age',
//     size: 'size',
//     prop: 'prop(3)',
//     prop1:  'prop1:)(4)'
// })

// console.log(planet1)

// console.log(universe1.x)
