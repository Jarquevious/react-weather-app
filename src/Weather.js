import { useState } from 'react'
import './Weather.css'
import DisplayWeather from './DisplayWeather'


function Weather() {
    const [ zip, SetZip ] = useState('')
    const [ data, setData ] = useState(null)

    async function getWeather() {
        try {
            const apikey = '99d7afef4025f501152e97275e4bd912'
            const path = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}`
            const res = await fetch(path) // stop !
            const json = await res.json() // stop !
            console.log(json)
            const temp = json.main.temp
            const desc = json.weather[0].description
            const name = json.name 
            setData( { temp, desc, name }  )
        }   catch(err) {
            console.log(err.message)
        }
    }

    return (
        <div className="Weather">
            <div>
               <h3> { data ? <DisplayWeather {...data}/>: null  }</h3>
            </div>

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