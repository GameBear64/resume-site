export const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'short',
});

export function formatDuration(seconds) {
  if (seconds == 0) return 'now';

  const addS = numb => (numb > 1 ? 's' : '');

  let rez = [];

  let year = Math.floor(seconds / 60 / 60 / 24 / 365);
  let month = Math.floor((seconds / 60 / 60 / 24 / 30) % 12);
  let day = Math.floor((seconds / 60 / 60 / 24) % 30);
  // not correctly calculating 30 and 31 day months
  let hour = Math.floor((seconds / 60 / 60) % 24);
  let min = Math.floor((seconds / 60) % 60);
  let sec = Math.floor(seconds % 60);

  if (year > 0) rez.push(`${year} year${addS(year)}`);
  if (month > 0) rez.push(`${month} month${addS(month)}`);
  if (day > 0) rez.push(`${day} day${addS(day)}`);
  if (hour > 0) rez.push(`${hour} hour${addS(hour)}`);
  if (min > 0) rez.push(`${min} minute${addS(min)}`);
  if (sec > 0) rez.push(`${sec} second${addS(sec)}`);

  return rez.join(', ').replace(/, ([^,]*)$/, ' and $1');
}

export default function formatDate(node) {
  node.innerText = dateFormatter.format(node.innerText);
}
