function converterManual(inputDate) {
  
  let dateArray = inputDate.split("-");
  inputDate = new Date(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`);
  if (!isNaN(inputDate)) {
    const newDate = `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
    console.log(newDate);
  } else {
    console.log("Format yang dimasukan salah");
  }
}


module.exports = {
  converterManual
};