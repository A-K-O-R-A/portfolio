declare interface String {
  red(): string;
  green(): string;
  yellow(): string;
  blue(): string;
  purple(): string;
  teal(): string;
  white(): string;

  applyColors(): string;
}

// For Theme One Half Dark
const colorMap = {
  red: "#e06c75", // Rose
  green: "#98c379",
  yellow: "#e5c07b",
  blue: "#61afef",
  purple: "#c678dd", //Lavendar
  teal: "#56b6c2", // Aqua
  white: "#dcdfe4",
};

String.prototype.applyColors = function (this: string) {
  let redReg = /red\(([^()]+)\)/gm;
  let greenReg = /green\(([^()]+)\)/gm;
  let yellowReg = /yellow\(([^()]+)\)/gm;
  let blueReg = /blue\(([^()]+)\)/gm;
  let purpleReg = /purple\(([^()]+)\)/gm;
  let tealReg = /teal\(([^()]+)\)/gm;
  let whiteReg = /white\(([^()]+)\)/gm;

  return this.replace(redReg, `<font color="${colorMap.red}">$1</font>`)
    .replace(greenReg, `<font color="${colorMap.green}">$1</font>`)
    .replace(yellowReg, `<font color="${colorMap.yellow}">$1</font>`)
    .replace(blueReg, `<font color="${colorMap.blue}">$1</font>`)
    .replace(purpleReg, `<font color="${colorMap.purple}">$1</font>`)
    .replace(tealReg, `<font color="${colorMap.teal}">$1</font>`)
    .replace(whiteReg, `<font color="${colorMap.white}">$1</font>`);
};

String.prototype.red = function (this: string) {
  return `<font color="${colorMap.red}">${this}</font>`;
};

String.prototype.green = function (this: string) {
  return `<font color="${colorMap.green}">${this}</font>`;
};

String.prototype.yellow = function (this: string) {
  return `<font color="${colorMap.yellow}">${this}</font>`;
};

String.prototype.blue = function (this: string) {
  return `<font color="${colorMap.blue}">${this}</font>`;
};

String.prototype.purple = function (this: string) {
  return `<font color="${colorMap.purple}">${this}</font>`;
};

String.prototype.teal = function (this: string) {
  return `<font color="${colorMap.teal}">${this}</font>`;
};

String.prototype.white = function (this: string) {
  return `<font color="${colorMap.white}">${this}</font>`;
};
