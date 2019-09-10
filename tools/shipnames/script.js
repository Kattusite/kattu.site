var descs = [
  "Beached",
  "Bearded",
  "Black",
  "Briny",
  "Broken",
  "Deserted",
  "Dreadful",
  "Eastern",
  "Floating",
  "Flooded",
  "Flying",
  "Hardened",
  "Iron",
  "Ivory",
  "Jagged",
  "Jolly",
  "Lightning",
  "Mournful",
  "Painted",
  "Precious",
  "Queen",
  "Queen's",
  "Red",
  "Salty",
  "Sandy",
  "Sea",
  "Singing",
  "Western"
];

var nouns = [
  "Aurora",
  "Berg",
  "Brigate",
  "Cutlass",
  "Cutter",
  "Cuttlefish",
  "Defiance",
  "Dragon",
  "Eagle",
  "Gambit",
  "Gem",
  "Haven",
  "Jetsam",
  "Lady",
  "Minnow",
  "Orca",
  "Pearl",
  "Pharoah",
  "Pirate",
  "Roger",
  "Sawfish",
  "Shadow",
  "Siren",
  "Spirit",
  "Surprise",
  "Viper",
  "Whale",
  "Wind"
]

function randElem(ls) {
  return ls[Math.floor(Math.random() * ls.length)];
}

function shipName() {
  return randElem(descs) + " " + randElem(nouns);
}

function init() {
  let span = document.getElementById("shipname");
  span.innerHTML = shipName();
}
