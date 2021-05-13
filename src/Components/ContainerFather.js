import React from 'react'
import { useEffect, useState } from 'react'
import Title from '../Components/Title'
import Icon from '../Components/Icon'
import ListRight from '../Components/ListRight'

import getWeather from '../services/getWeather'

const ContainerFather = () => {

    const [lat, setLat] = useState()
    const [long, setLong] = useState()
    const [urlIcon, setUrlIcon] =useState()
    const [col, setCol] = useState()
    const [country, setCountry] = useState()
    const [grade, setGadre] = useState()
    const [vel, setVel] = useState()
    const [description, setDescription] = useState()
    const [cloud, setCloud] = useState()
    const [pressure, setPressure] = useState()
    const [isCelcius, setIsCelcius] = useState(true)

    
    useEffect(() => { 
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })
    },[])

    useEffect (()=> { 
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
    }

    return(
        <div id="containerFather">
            <div id="containerTitle">
                <Title col = {col} country = {country}/>
            </div>
            <div id="body">
                <div id="bodyLeft">
                    <Icon urlIcon = {urlIcon} grade = {grade}/>
                </div>
                <div id="bodyRight">
                    <ListRight description = {description} vel = {vel} cloud = {cloud} pressure = {pressure}/>
                </div>
            </div>
            <button onClick = {changeGrade}>CONVETIR</button>
        </div>
    )
}

export default ContainerFather;