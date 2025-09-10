const inputManual = require('./lib/converter');
const input = require('./lib/generatorDate');

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Masukkan tanggal (format: DD-MM-YYYY): ", (inputUser) => {
  // inputManual.converterManual(inputUser)
  input.generateDate(inputUser);
  rl.close();
});