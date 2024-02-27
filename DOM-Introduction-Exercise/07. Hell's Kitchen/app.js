function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let bestRestaurant = document.getElementById('bestRestaurant');
   let bestRestaurantName = bestRestaurant.querySelector('p');
   let workers = document.getElementById('workers');
   let allWorkers = workers.querySelector('p');

   function onClick() {

      let input = document.querySelector('textarea');
      let arrayOfRestaurants = JSON.parse(input.value);

      let restaurants = {}
      let averageSalaryRestaurant = {}
      let restaurantCounter = {}

      for (const restaurant of arrayOfRestaurants) {

         let [restaurantsName, allWorkers] = restaurant.split(' - ');
         let workersAndSalary = allWorkers.split(', ');

         for (let i = 0; i < workersAndSalary.length; i++) {

            let workerAndSalary = workersAndSalary[i].split(' ');
            let [worker, salary] = workerAndSalary;
            salary = Number(salary);
            if (!restaurants[restaurantsName]) {
               restaurants[restaurantsName] = { [worker]: salary };
               averageSalaryRestaurant[restaurantsName] = salary

               restaurantCounter[restaurantsName] = 1;

            } else {
               restaurants[restaurantsName][worker] = salary;
               averageSalaryRestaurant[restaurantsName] += salary
               restaurantCounter[restaurantsName] += 1;

            }
         }

         let sortedWorkers = Object.entries(restaurants[restaurantsName]).sort((a, b) => b[1] - a[1])
         restaurants[restaurantsName] = Object.fromEntries(sortedWorkers)
         averageSalaryRestaurant[restaurantsName] /= restaurantCounter[restaurantsName];
      }

      let bestRestaurant = '';
      let bestAverageSalaryRestaurant = 0;
      let bestWorkerSalary = [];
      let printAllWorkers = [];


      for (const key in averageSalaryRestaurant) {

         if (averageSalaryRestaurant[key] > bestAverageSalaryRestaurant) {
            bestAverageSalaryRestaurant = averageSalaryRestaurant[key];
            bestRestaurant = key;
         }
      }

      for (const restaurantName in restaurants) {

         if (restaurantName === bestRestaurant) {

            let workers = restaurants[restaurantName];

            for (const name in workers) {
               bestWorkerSalary.push(workers[name])

            }
            bestRestaurantName.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverageSalaryRestaurant.toFixed(2)} Best Salary: ${bestWorkerSalary[0].toFixed(2)}`
            for (const name in workers) {
               printAllWorkers.push(`Name: ${name} With Salary: ${workers[name]}`)
            }
            allWorkers.textContent = printAllWorkers.join(' ')
         }
      }
   }
}