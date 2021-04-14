import { useState } from 'react'
import './Weather.css'

function Weather() {
    const [ zip, SetZip ] = useState('')
    const [ data, setData ] = useState(null)

    function getWeather() {
        setData({ temp: 70 })
    }

    return (
        <div className="Weather">
           {data ? <h1> { data.temp }</h1>  : null } 
           
            <form onSubmit={ e => {
                e.preventDefault()
                //...
            } }>
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