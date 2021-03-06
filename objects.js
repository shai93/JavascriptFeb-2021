// oops

// mobile

var name = "Iphone";
var model = "XR";
var ram = 3;
var rom = 128;
var color = "black";
var screen = 6;

// console.log(screen)

var mobile = {
  name: "Iphone",
  model: "XR",
  ram: 3,
  rom: 128,
  screen: 6,
  config: function () {
    console.log("Mobile Configuration: - " + this.ram + "*" + this.rom);
  },
  dimension: function () {
    console.log("Mobile Dimenstion: - " + this.screen + "*" + this.screen);
  }
};

mobile.config();
mobile.dimension();
