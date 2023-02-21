const events = new Map([
  [19, 'Goal'],
  [21, 'Subsititution'],
  [43, 'Goal'],
  [56, 'Subsititution'],
  [69, 'Yellow card'],
  [73, 'Subsititution'],
  [75, 'Yellow card'],
  [79, 'Subsititution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

//1
const gameEvents = [...new Set(events.values())];
console.log(gameEvents);

//2
events.delete(75);
console.log(events);

//3
let ser = 90 / events.size;
console.log(`On average, an event happened every ${ser} minutes`);

//4
for (const [key, value] of events) {
  const half = key <= 45 ? 'First' : 'Second';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
