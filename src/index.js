console.log("Webpack is working!");

import MovingObject from "./moving_object.js";
window.MovingObject = MovingObject;

import Asteroid from "./asteroid.js";
window.Asteroid = Asteroid;

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
window.ctx = ctx;