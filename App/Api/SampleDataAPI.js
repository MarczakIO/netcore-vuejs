export default {
    getData: () => {
        return fetch('/api/SampleData/WeatherForecasts', {
            method: 'get'
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            return response;
        });
    }
}