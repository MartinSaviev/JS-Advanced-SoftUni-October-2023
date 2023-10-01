function carFactory(oldCarModel) {

    let newCarModel = {};

    newCarModel.model = oldCarModel.model;
    if (oldCarModel.power <= 90) {
        newCarModel.engine = { power: 90, volume: 1800 }

    } else if (oldCarModel.power <= 120) {
        newCarModel.engine = { power: 120, volume: 2400 }

    } else if (oldCarModel.power <= 200) {
        newCarModel.engine = { power: 200, volume: 3500 }
    }

    if (oldCarModel.carriage === 'hatchback') {
        newCarModel.carriage = { type: 'hatchback', color: oldCarModel.color };

    } else if (oldCarModel.carriage === 'coupe') {

        newCarModel.carriage = { type: 'coupe', color: oldCarModel.color };
    }

    if (oldCarModel.wheelsize % 2 == 0) {
        let addWheels = oldCarModel.wheelsize - 1;
        newCarModel.wheels = [addWheels, addWheels, addWheels, addWheels]
    }else {
        let addWheels = oldCarModel.wheelsize;
        newCarModel.wheels = [addWheels, addWheels, addWheels, addWheels]
    }
    
    return newCarModel;

}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })
