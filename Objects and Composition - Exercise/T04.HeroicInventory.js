function heroInventory(input) {
    let heroes = [];

    for (const heroInfo of input) {
        let [name, level, items] = heroInfo.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: []
        };

        if (items) {
            let split =  items.split(', ');
            hero.items = split;
        }

        heroes.push(hero);
    }

    console.log(heroes);
    debugger
    return JSON.stringify(heroes);
}

const result = heroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

console.log(result);