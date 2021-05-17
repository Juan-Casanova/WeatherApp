import React from 'react'
import { useEffect, useState } from 'react'
import Title from '../Components/Title'
import Icon from '../Components/Icon'
import ListRight from '../Components/ListRight'

import getWeather from '../services/getWeather'

const ContainerFather = () => {

    const [lat, setLat] = useState()
    const [long, setLong] = useState()
    /* const [urlIcon, setUrlIcon] =useState()
    const [col, setCol] = useState()
    const [country, setCountry] = useState()
    const [grade, setGadre] = useState()
    const [vel, setVel] = useState()
    const [description, setDescription] = useState()
    const [cloud, setCloud] = useState()
    const [pressure, setPressure] = useState()
    const [isCelcius, setIsCelcius] = useState(true) */

    const [data, setData] = useState()
    const [country, setCountry] = useState()

    let url = `https://api.weatherapi.com/v1/current.json?key=5d948657eb02450cb4851307211105&q=`

    
    useEffect(() => { 
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })
    },[])

    useEffect ( () => {

        console.log(url+lat+","+long)
        if (lat && long) {
            fetch(url+lat+","+long,{method:'POST',headers: {'Content-Type':'application/json'}})
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
        }
       
    },[lat,long])

    useEffect ( () => {

        if(data)console.log(data.location.country)
        //setCountry(data.location.country)
       
    },[data])

   /*  useEffect (()=> { 
       if(lat!==undefined) {
           if(long!==undefined) {
            getWeather(lat,long).then(data => {
                setCol(data.location.name)
                setCountry(data.location.country)
                setUrlIcon(data.current.condition.icon)
                setGadre(data.current.feelslike_c)
                setDescription(data.current.condition.text)
                setVel(data.current.gust_kph)
                setCloud(data.current.cloud)
                setPressure(data.current.pressure_mb)

            })
           }
       }
    },[lat,long])

    const changeGrade = () => {
        if(isCelcius===true) {
            let val = (grade*(9/5))+32

            setGadre(val.toFixed(1))
            setIsCelcius(false)
        }else {

            let val1 = (grade-32)*(5/9)
            setGadre(val1.toFixed(1))
            setIsCelcius(true)
        }
    } */

    return(
        <div id="containerFather">
            <div id="containerTitle">
                <h3></h3>
            </div>
            <div id="body">
                <div id="bodyLeft">
                    
                </div>
                <div id="bodyRight">
                    
                </div>
            </div>
            {/* <button onClick = {changeGrade}>CONVETIR</button> */}
        </div>
    )
}

export default ContainerFather;