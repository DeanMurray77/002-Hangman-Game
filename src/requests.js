//Async Await method
const getPuzzle = async (wordCount) => {
    const url = `//puzzle.mead.io/puzzle?wordCount=${wordCount}`; //make it easier to kick out the error

    const response = await fetch(url);
    if(response.status === 200) {
        const data = await response.json(); //returning the promise that results from .json()
        return data.puzzle;
    } else {
        throw new Error('An error has taken place. Bad or no response from api call to ' + url);
    }
}

const getCountry = async (countryCode) => {
    const countryAPIURL = '//restcountries.eu/rest/v2/all';

    const response = await fetch(countryAPIURL);
    if(response.status === 200) {
        const countries = await response.json();
        let country = countries.find(function(country) {
            return country.alpha2Code === countryCode;
        })
        return country;
    } else {
        throw new Error('API call to ' + countryAPIURL + 'has failed');
    }
}

const getLocation = async () => {
    const token = '425fe9be781677';
    const locationURL = '//ipinfo.io/json?token=';

    const response = await fetch(locationURL + token)
    if(response.status === 200) {
        return response.json();
    } else {
        throw new Error('Error, problem with api call to ' + locationURL);
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
    return getCountry(location.country);
}

export { getPuzzle };