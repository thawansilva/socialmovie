export function formatDateToString(date) {
  if (!date) return;
  let splitedDate = date.split("-"),
    year = splitedDate[0],
    month = splitedDate[1],
    day = splitedDate[2];

  switch (month) {
    case "01":
      month = "January";
    case "02":
      month = "February";
    case "03":
      month = "March";
    case "04":
      month = "April";
    case "05":
      month = "May";
    case "06":
      month = "June";
    case "07":
      month = "July";
    case "08":
      month = "August";
    case "09":
      month = "Septembre";
    case "10":
      month = "October";
    case "11":
      month = "November";
    case "12":
      month = "December";
    default:
      break;
  }

  return month + " " + day + ", " + year;
}
export function getColorRating(rate) {
  if (rate == 0) {
    return "#eee";
  } else if (rate > 0 && rate <= 6) {
    return "#DCAF26";
  } else if (rate > 6 && rate <= 10) {
    return "#13CE66";
  }
}

export function decimalToPercentage(value) {
  let percentage = (value / 10) * 100;
  return percentage.toFixed(0);
}

export function convertRuntime(min) {
  if (min) {
    let hour = Math.floor(min / 60);
    let minutes = min % 60;
    hour = hour < 10 ? `0${hour}h` : `${h}h`;
    minutes = minutes < 10 ? `0${minutes}min` : `${minutes}min`;
    if (hour == "00h") hour = "";
    if (minutes == "00min") minutes = "";
    return `${hour} ${minutes}`;
  }
}

export function getMoney(value) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(value);
}

export function getImage(size, image) {
  if (!image) return false;
  return `https://image.tmdb.org/t/p/${size}${image}`;
}

export function getBirthday(date) {
  let moment = new Date();
  let splitedDate = date.split("-"),
    year = splitedDate[0],
    month = splitedDate[1],
    day = splitedDate[2];
  let age = moment.getFullYear() - year;

  if (month > moment.getMonth()) {
    age - 1;
  } else if (month == moment.getMonth()) {
    if (day > moment.getDay()) age - 1;
  }
  return `${month}/${day}/${year} (${age} years old)`;
}
