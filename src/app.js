import axios from 'axios';

console.log("Hallo daar");

const countryCurrency = (currency) => {
    let localCurrency = "";
    for(let i= 0; i< currency.length; i++) {
        if ( i > 0) {
            localCurrency += "and" + localCurrency[i].name + "s."
        }
        else {
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

    try{
        const response = await axios.get(BASE_URI + ENDPOINT);
        let countries = response.data

        const listOfCountries = document.getElementById('country-list')
            .map((country) =>
            listOfCountries.innerHTML = `<li class = "list-item">
             <div class = "flag-item">
                <h3 class = "country-name">${country.name}</h3>`

            )

    } catch (error) {

    }

}