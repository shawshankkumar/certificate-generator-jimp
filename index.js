const jimp = require("jimp");

const fs = require("fs");

const slugify = require("slugify");

const { participants } = require("./people");

const main = async () => {
  for (let i = 0; i < participants.length; i++) {
    const ele = participants[i];
    console.log(i, " : ", ele.name);

    setTimeout(function timer() {}, 2000);

    let imgObject = await jimp.read("thank-you-figma-community.png");

    jimp.loadFont("./font3/font1.fnt").then(async (eles) => {
      imgObject = await imgObject.print(
        eles,
        0,
        590,
        {
          text: ele.name,
          alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
          alignmentY: jimp.VERTICAL_ALIGN_CENTER,
        },
        1600,
        155
      );

      imgObject.write(
        "./certificates/" +
          slugify(ele.name, {
            replacement: "_",
            lower: true,
            trim: true, 
          }) +
          ".png"
      );
    });
  }
};

main();
