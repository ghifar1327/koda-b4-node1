const moment = require("moment");

function generateDate(inputDate) {
  if (typeof inputDate !== "string") {
    console.log("Input harus berupa string.");
    return;
  }

  if (inputDate.length === 8 || inputDate.length === 10) {
    let parsedDate;

    if (inputDate.includes("-")) {
      parsedDate = moment(inputDate, "DD-MM-YYYY", true);
    } else {
      parsedDate = moment(inputDate, "DDMMYYYY", true);
    }

    if (!parsedDate.isValid()) {
      console.log(
        "Format tanggal tidak valid. Gunakan format DD-MM-YYYY atau DDMMYYYY (contoh: 24-01-2005 atau 24012005)."
      );
    } else {
      const convert = parsedDate.format("DD/MM/YYYY");
      console.log(`Tanggal setelah konversi: ${convert}`);
    }
  } else {
    console.log("Tanggal melebihi batas karakter (gunakan DDMMYYYY atau DD-MM-YYYY).");
  }
}

module.exports = {
  generateDate,
};
