const getWeather = (lat,long) => {

    const url = `http://api.weatherapi.com/v1/current.json?key=5d948657eb02450cb4851307211105&q=${lat},${long}`

    return fetch(url,{method:'GET'}).then(res => res.json())

}

export default getWeather