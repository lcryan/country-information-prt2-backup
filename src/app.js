import axios from 'axios';

console.log('Hallo daar!');


async function getCountries() {
    let axiosResponse
    try {
        axiosResponse = await axios.get('https://restcountries.com/v2/all')
    } catch (e) {
        console.error(e);
    }
    console.log(axiosResponse)

    return axiosResponse.data
}

function getOneCountry(countryList, query) {
    const filteredCountries = countryList.filter((country) => {
        return country.name === query
    })
    console.log(filteredCountries)

    if (filteredCountries.length === 0) {
        return undefined
    }

    return filteredCountries[0]

}

function renderResults(country) {

    const container = document.createElement('div')
    const flagC = document.createElement('img');
    flagC.setAttribute('id', 'flag');
    flagC.setAttribute('src', country.flags.png);

    if (country) {

        container.textContent = country.name && country.flags


    } else {
        container.textContent = "ERROR"

    }

    return container && flagC;

}


async function pageLoad() {

    const countries = await getCountries()

    const button = document.getElementById('search-button')
    const resultContainer = document.getElementById('found-country')
    /*const resultContainerFlags = document.getElementById('found-flag')*/
    const textField = document.getElementById('search-field')
    button.addEventListener('click', () => {
        const foundCountry = getOneCountry(countries, textField.value)
        const snippet = renderResults(foundCountry)
        //append snippet to document //
        resultContainer.replaceChildren(snippet)
        /*resultContainerFlags.replaceChildren(snippet)*/


    })
}

{
}

pageLoad()