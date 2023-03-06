import MovingObject from "./moving_object.js";
import {randomVec} from "./utils.js";
//import scale from "./utils.js";

//const MovingObject = require('./moving_objects.js');

class Asteroid extends MovingObject {
  static RADIUS = 25;
  static COLOR = "#3a4f45";
  constructor (args){
    const obj = {
      pos: args['pos'],
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      vel: randomVec(Math.random()*100)
    } 
    super(obj);   
  }
}

export default Asteroid;