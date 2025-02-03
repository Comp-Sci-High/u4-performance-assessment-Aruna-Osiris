const express = require("express");
const app = express();

let recipeData = [
    breakfast =
    {
      name: "",
      description: 57900000,
      ingredients : 4879,
      imagePath: "/Mercury.jpg",
      rating:
        "The smallest planet in our solar system and closest to the Sun.",
      timeConcuption: 88,
      allergies:"",
    },
    {
      name: "Venus",
      description: 108200000,
      ingredients: 12104,
      imagePath: "/Venus.png",
      rating:
        "A rocky planet known for its thick, toxic atmosphere and surface temperatures hot enough to melt lead.",
      timeConcuption: 225,
      allergies:"",
    },
    lunch =
    {
      name: "Earth",
      description: 149600000,
      ingredients: 12742,
      imagePath: "/Earth.jpg",
      rating:
        "The only planet known to support life, with vast oceans and diverse ecosystems.",
      orbital: 365,
      allergies:"",
    },
    {
      name: "Mars",
      distance: 227900000,
      diameter: 6779,
      imagePath: "/Mars.png",
      description:
        "Known as the 'Red Planet,' Mars has the tallest volcano and the largest canyon in the solar system.",
      orbital: 687,
      allergies:"",
    },
    dinner =
    {
      name: "Jupiter",
      distance: 778500000,
      diameter: 139820,
      imagePath: "/Jupiter.jpg",
      description:
        "The largest planet in the solar system, famous for its Great Red Spot and many moons.",
      orbital: 4333,
      allergies:"",
    },
    {
      name: "Saturn",
      distance: 1433000000,
      diameter: 116460,
      imagePath: "/Saturn.jpg",
      description:
        "Distinguished by its extensive ring system, Saturn is a gas giant with a stunning visual appearance.",
      orbital: 10759,
      allergies:"",
    },
    desserts =
    {
      name: "Uranus",
      distance: 2871000000,
      diameter: 50724,
      imagePath: "/Uranus.png",
      description:
        "An ice giant with a unique tilt, causing extreme seasonal changes during its orbit.",
      orbital: 30687,
      allergies:"",
    },
    {
      name: "Neptune",
      distance: 4495000000,
      diameter: 49244,
      imagePath: "/Neptune.png",
      description:
        "The furthest planet from the Sun, known for its deep blue color and strong winds.",
      orbital: 60190,
      allergies:"",
    },
  ];