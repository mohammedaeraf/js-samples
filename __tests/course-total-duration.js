class Car {
    constructor(brand, model, year, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }
}

// Create an array of at least 6 Car objects
let cars = [
    new Car("Honda", "Civic", 2020, 20000),
    new Car("Toyota", "Corolla", 2019, 18000),
    new Car("Ford", "Mustang", 2021, 30000),
    new Car("Honda", "Accord", 2018, 22000),
    new Car("Tesla", "Model 3", 2021, 35000),
    new Car("BMW", "X5", 2020, 45000)
];

// Calculate the average price of all cars
let totalPrice = cars.reduce((sum, car) => sum + car.price, 0);
let averagePrice = totalPrice / cars.length;
console.log(`Average Price of Cars: $${averagePrice.toFixed(2)}`);

// List all cars of a specific brand (for example "Honda")
let specificBrand = "Honda";
let carsOfSpecificBrand = cars.filter(car => car.brand === specificBrand);
console.log(`Cars of brand ${specificBrand}:`);
carsOfSpecificBrand.forEach(car => console.log(`${car.brand} ${car.model}, ${car.year}, $${car.price}`));