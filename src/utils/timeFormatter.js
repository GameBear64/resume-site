export const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'short',
});

export function formatDuration(seconds, maxUnit = 'second') {
  if (seconds == 0) return 'now';

  const addS = numb => (numb !== 1 ? 's' : '');

  const units = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
    ['second', 1],
  ];

  const unitOrder = units.map(u => u[0]);
  const maxIndex = unitOrder.indexOf(maxUnit);
  if (maxIndex === -1) throw new Error(`Invalid maxUnit: ${maxUnit}`);

  const rez = [];

  for (const [name, value] of units) {
    if (unitOrder.indexOf(name) > maxIndex) continue;
    const amount = Math.floor(seconds / value);
    if (amount > 0) {
      rez.push(`${amount} ${name}${addS(amount)}`);
      seconds -= amount * value;
    }
  }

  return rez.length ? rez.join(', ').replace(/, ([^,]*)$/, ' and $1') : 'now';
}

export default function formatDate(node) {
  node.innerText = dateFormatter.format(node.innerText);
}
