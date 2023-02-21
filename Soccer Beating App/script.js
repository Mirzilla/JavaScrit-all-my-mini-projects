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
const [players1, players2] = [...game.players];
console.log(players1, players2);

// 2
const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Total = [...players1];

//5
const { team1, draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
const printGoals = function (...gamePlayers) {
  console.log(`${gamePlayers.length}`);
};
printGoals('f');

printGoals(...game.scored);

//7 
team1 < team2 && console.log(`${game.team1} is more likely to win.`);
team1 > team2 && console.log(`${game.team2} is more likely to win.`);