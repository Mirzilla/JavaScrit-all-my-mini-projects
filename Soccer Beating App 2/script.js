const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

// 1
for (const scored of game.scored.entries()) {
  console.log(`Goal ${scored[0] + 1} - ${scored[1]}`);
}
// 2
const { team1, draw, team2 } = game.odds;
console.log((team1 + draw + team2) / 3);

// 3
console.log(`Rate for ${game.team1} victory ${game.odds.team1}`);
console.log(`Rate for ${Object.keys(game.odds)} victory ${game.odds.draw}`);
console.log(`Rate for ${game.team2} victory ${game.odds.team2}`);

// 4

const goalScored = {};
for (const player of game.scored) {
  goalScored[player] ? goalScored[player]++ : (goalScored[player] = 1);
}
