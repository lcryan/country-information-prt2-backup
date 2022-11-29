import axios from 'axios';

console.log("Hallo daar");

const countryCurrency = (currencies) => {
    let localC = "";
    for (let i = 0; i < currencies.length; i++) {
        if (i > 0) {
            localC += ' and ' + currencies[i].name + 's. ';
        } else {
            localC = currencies[i].name;
        }
    }
    console.log(localC);
    return localC
}


async function getCountryInformation() {
    const base = "https://restcountries.com/";
    const endpoint = "v2/name/";

    const searchField = document.getElementById('search-field');
    const searchFieldOutput = searchField.value
    searchField.value = '';

    try {
        const response = await axios.get(BASE + ENDPOINT + searchFieldOutput);
        let countryOutput = response.data

        const listOfCountries = document.getElementById('country-list')
        countryOutput.map(({ name, population, currencies, capital, region, flag: { png } }) =>
            listOfCountries.innerHTML = `<li class="list-items">
             <div class= "flag-item">
                <h3 class = "country-name">${country.name}</h3>
                <img src="${country.flags.png}" alt="${country.flag}" class="img-size"/>
</div>
<h6 class="text-one">${country.name} is situated in ${country.region}. It has a population of ${country.population}</h6>
<h6 class="text-two"> The capital city is ${country.capital} and you can pay with ${countryCurrency(country.currencies)}.</h6>
</li>`
        )

    } catch (err) {
        console.error(err)
    }

}

getCountryInformation();

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getCountryInformation);
