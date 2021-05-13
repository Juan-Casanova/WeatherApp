const getWeather = (lat,long) => {

    const url = `https://api.weatherapi.com/v1/current.json?key=5d948657eb02450cb4851307211105&q=${lat},${long}`

    return fetch(url,{method:'POST',headers: {'Content-Type':'application/json'}, mode: 'no-cors'}).then(res => res.json())

}

export default getWeather