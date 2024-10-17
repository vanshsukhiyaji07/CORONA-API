const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://disease.sh/v3/covid-19/countries/';

const countryInput = document.getElementById('country');
const cityInput = document.getElementById('city');
const submitButton = document.getElementById('submit');
const countryNameElement = document.getElementById('country-name');
const cityNameElement = document.getElementById('city-name');
const casesElement = document.getElementById('cases');
const activeElement = document.getElementById('active');
const recoveredElement = document.getElementById('recovered');
const deathsElement = document.getElementById('deaths');

submitButton.addEventListener('click', async () => {
    const country = countryInput.value.trim();
    const city = cityInput.value.trim();
    if (country && city) {
        try {
            const response = await fetch(`${apiUrl}${country}?appid=${apiKey}`);
            const data = await response.json();
            countryNameElement.textContent = data.country;
            cityNameElement.textContent = city;
            casesElement.textContent = `Cases: ${data.cases}`;
            activeElement.textContent = `Active: ${data.active}`;
            recoveredElement.textContent = `Recovered: ${data.recovered}`;
            deathsElement.textContent = `Deaths: ${data.deaths}`;
        } catch (error) {
            console.error(error);
        }
    }
});