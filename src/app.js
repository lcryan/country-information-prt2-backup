import axios from 'axios';

console.log("Hallo daar");

/*
const localCurrency = (currencies) => {
    let local = "";
    for (let i = 0; i < currencies.length; i++) {
        if (i > 0) {
            local += ' and ' + localCurrency[i].name + 's. ';
        } else {
            local = localCurrency[i].name;
        }
    }
    console.log(local);
    return local;
}
*/


async function getCountryInformation() {
    const BASE = "https://restcountries.com/";
    const ENDPOINT = "v2/name/";

    const searchField = document.getElementById('search-field');
    const searchFieldOutput = searchField.value
    searchField.value = '';

    try {
        const response = await axios.get(BASE + ENDPOINT + searchFieldOutput);
        let countryOutput = response.data

        const listOfCountries = document.getElementById('country-list')
        countryOutput.map((country) =>
            listOfCountries.innerHTML = `<li class="list-items">
             <div class= "flag-item">
                <h3 class = "country-name">${country.name}</h3>
                <img src="${country.flags.png}" alt="${country.flag}" class="img-size"/>
</div>
<h6 class="text-one">${country.name} is situated in ${country.region}. It has a population of ${country.population}</h6>
<h6 class="text-two"> The capital city is ${country.capital}.</h6>
</li>`
        )

    } catch (err) {
        console.error(err)
    }

}

getCountryInformation();

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getCountryInformation);
