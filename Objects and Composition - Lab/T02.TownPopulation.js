function townPopulation(input) {

    let townPopulation = {};
    

    for (let i = 0; i < input.length; i++) {

        let [town, population] = input[i].split(' <->');
        population = Number(population);

        if (!townPopulation.hasOwnProperty(town)) {
            townPopulation[town] = population;
        } else {

            townPopulation[town] += population;
        }

    }

    Object.keys(townPopulation).forEach(x => {
        console.log(`${x} : ${townPopulation[x]}`);
    })
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);