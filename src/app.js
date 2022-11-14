import axios from 'axios';

console.log("Hallo daar");

const countryCurrency = (currency) => {
    let localCurrency = "";
    for (let i = 0; i < currency.length; i++) {
        if (i > 0) {
            localCurrency += "and" + localCurrency[i].name + "s."
        } else {
            localCurrency = localCurrency[i].name;
        }
    }
    console.log(localCurrency);
    return localCurrency
}


async function getCountryInformation() {
    const BASE_URI = 'https://restcountries.com';
    const ENDPOINT = 'v2/all'

    const searchField = document.getElementById('search-field');
    const searchFieldOutput = searchField.value
    searchField.value = '';

    try {
        const response = await axios.get(BASE_URI + ENDPOINT);
        let countries = response.data

        const listOfCountries = document.getElementById('country-list')
            .map((country) =>
                listOfCountries.innerHTML = `<li class = "list-items">
             <div class = "flag-item">
                <h3 class = "country-name">${country.name}</h3>
                <img src="${country.flags.png}" alt="${country.flag}" class ="image-size"/>
</div>
<h6 class="text-one">${country.name} is situated in ${country.region}. It has a population of ${country.population}</h6>
<h6 class="text-two"> The capital city is ${country.capital} and you can pay with ${countryCurrency(country.currency)}</h6>
</li>`
            )

    } catch (error) {
        console.error(error)

    }

}
getCountryInformation();

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getCountryInformation)