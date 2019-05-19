let fields = [
    new Road(),
    new Grass(),
    new Road(),
    new Wall()
];


let map = new Map(fields);
map.addField(0,0,Road);
map.addField(1,0,Road);
map.addField(2,0,Road);
map.addField(0,1,Grass);
map.addField(1,1,Wall);
map.addField(2,1,Wall);
map.addField(0,2,Road);
map.addField(1,2,Road);
map.addField(2,2,Road);
map.printFields();
map.setSpawnPoint(map.fields[0][0]);
let player = new Player('marc', map);


