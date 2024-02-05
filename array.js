// Fetch data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Task 1: Get all the countries from Asia continent/region using Filter function
    const asianCountries = data.filter((country) => country.region === "Asia");
    console.log("Asian Countries:", asianCountries);

    // Task 2: Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithLowPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log("Countries with Population < 2 lakhs:", countriesWithLowPopulation);

    // Task 3: Print name, capital, flag using forEach function
    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.svg);
    });

    // Task 4: Print the total population of countries using reduce function
    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total Population of Countries:", totalPopulation);

    // Task 5: Print the country which uses US Dollars as currency
    const usDollarCountries = data.filter((country) =>
      country.currencies.hasOwnProperty("USD")
    );
    console.log("Countries using US Dollars:", usDollarCountries);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
