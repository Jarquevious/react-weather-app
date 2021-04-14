import './DisplayWeather.css'

function DisplayWeather(props) {
    return(
        <div className='DisplayWeather'>
            <h1>{props.temp}</h1>
            <p>{props.desc}</p>
        </div>
    )
    
}

export default DisplayWeather