import './DisplayWeather.css'

function DisplayWeather(props) {
    const { temp, desc, name } = props
    return(
        <div className='DisplayWeather'>
            <h1>{temp}</h1>
            <p>{desc}</p>
            <small>{name}</small>
        </div>
    )
    
}

export default DisplayWeather