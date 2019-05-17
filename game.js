var fields = [
    new Road(),
    new Grass(),
    new Road(),
    new Wall()
];


var map = new Map(fields);
map.connectFields(fields[0], fields[1], 'north');
map.connectFields(fields[1], fields[2], 'north');
map.connectFields(fields[2], fields[3], 'north');
map.setSpawnPoint(fields[0]);

var player = new Player('john', map);