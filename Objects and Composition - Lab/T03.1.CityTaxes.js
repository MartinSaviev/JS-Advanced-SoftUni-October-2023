function cityTaxes(name, population, treasury) {

    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {

            let newPercentage = percentage / 100;
            this.population += (this.population * newPercentage);


        },
        applyRecession(percentage) {

            let newPercentage = percentage / 100;
            this.treasury -= (this.population* newPercentage);

        },
    }

    return city;
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);

const city1 = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
