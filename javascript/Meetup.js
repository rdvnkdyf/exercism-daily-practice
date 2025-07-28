//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const teens = [13, 14, 15, 16, 17, 18, 19];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weeks = ["first", "second", "third", "fourth"];
export const meetup = (year, month, description, day) =>  {
  const date = new Date(year, month, 0)
  switch (description) {
    case "teenth":
      for (let teen of teens) {
        date.setDate(teen);
        if (weekdays[date.getDay()] === day) {
          return date;
        }
      }
      break;
    case "last":
      for (let dayMonth =date.getDate(); dayMonth > 0; dayMonth--) {
        date.setDate(dayMonth);
        if (weekdays[date.getDay()] === day) {
          return date;
        }
      }
      break;
    default:
      for (let dayMonth = 1; dayMonth < 32; dayMonth++) {
        date.setDate(dayMonth);
        const week = 7 * weeks.indexOf(description);
        if (weekdays[date.getDay()] === day) {
          date.setDate(dayMonth + week);
          return date;
        }
      }
      break;
  }
}