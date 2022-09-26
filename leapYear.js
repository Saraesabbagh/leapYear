const leapYear = (year) => {
  if (year % 400 == 0) {
    return "true";
  }
};

module.exports = leapYear;

leapYear(2000);
