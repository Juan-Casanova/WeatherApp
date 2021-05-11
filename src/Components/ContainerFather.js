import { useEffect, useState } from 'react'

const ContainerFather = () => {

    const url = "http://api.weatherapi.com/v1/current.json?key=5d948657eb02450cb4851307211105&q="

    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [data, setData] = useState();

    const getLat = () => {
        navigator.geolocation.getCurrentPosition(position =>{
            setLat(position.coords.latitude)
        })                
    }

    const getLong = () => {
        navigator.geolocation.getCurrentPosition(position =>{
            setLong(position.coords.longitude)
        })                
    }

    useEffect (()=> { 
        getLat()
        getLong()
    },[])

    useEffect (()=> { 
        fetch(url+lat+","+long)
        .then(res => res.json())
        .then(actualData => {
            console.log(actualData.location.country)
            setData(actualData)
        })
    },[lat,long])

    return(
        <div id="containerFather">
            jajajaja
        </div>
    )
}

export default ContainerFather;