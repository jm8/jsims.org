let HOLIDAYS = [
	createDate(2019, 9, 2),
	createDate(2019, 11, 11),
	createDate(2019, 11, 27),
	createDate(2019, 11, 28),
createDate(2019, 11, 29),
	
]

function printDate(date)
{
  console.log((new Date(date)).toDateString())
}

function createDate(year, month, day)
{
  return (new Date(year, month-1, day)).getTime();
}

function isNotWeekend(date)
{
  let dayOfWeek = new Date(date).getDay();
  if (dayOfWeek == 0 || dayOfWeek == 6)
    return false;
  return true;
}

function isTt(date)
{
  let dayOfWeek = new Date(date).getDay();
  if (dayOfWeek == 2 || dayOfWeek == 4)
    return true;
  return false;
}

function isMwf(date)
{
  let dayOfWeek = new Date(date).getDay();
  if (dayOfWeek == 1 || dayOfWeek == 3 || dayOfWeek == 5)
    return true;
  return false;
}

function isNotHoliday(date)
{
  return !HOLIDAYS.includes(date);
}

function today()
{
  let now = new Date(); // new Date object with current time
  return now.setHours(0, 0, 0, 0); // we only care about the day
  // this returns a NUMBER, not a DATE!
}

function incrementDay(date)
{
  dateObj = new Date(date);
  return dateObj.setDate(dateObj.getDate() + 1);
}

function range(startDate, endDate)
{
  let result = [];
  let curr = startDate;
  while (curr <= endDate)
  {
    result.push(curr);
    curr = incrementDay(curr)
  }
  return result;
}

function allDays()
{
  return range(Math.max(today(), createDate(2019, 8, 26)), createDate(2019, 12, 7))
}

function daysLeftUnfiltered()
{
    return allDays().length;
}

function daysLeftFiltered(f)
{
    return allDays().filter(isNotHoliday).filter(f).length;
}


document.getElementById("big").textContent = daysLeftFiltered(isNotWeekend)
document.getElementById("tt").textContent = daysLeftFiltered(isTt)
document.getElementById("mwf").textContent = daysLeftFiltered(isMwf)
document.getElementById("we").textContent = daysLeftUnfiltered()
