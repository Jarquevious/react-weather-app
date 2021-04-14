import { useState } from 'react'
import './Weather.css'
import DisplayWeather from './DisplayWeather'


function Weather() {
    const [ zip, SetZip ] = useState('')
    const [ data, setData ] = useState(null)

    async function getWeather() {
        const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
        const path = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}`
        const res = await fetch(path) // stop !
        const json = await res.json // stop !
        console.log(json)
        setData({ temp: 64, desc: "Scattered clouds" })
    }

    return (
        <div className="Weather">
           { data ? <DisplayWeather {...data}/>: null  }
           
            <form 
            onSubmit={ e => {
                e.preventDefault()
                getWeather()
            } }
            >
                <input 
                value = {zip}
                onChange = { e => SetZip(e.target.value) }
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Weather