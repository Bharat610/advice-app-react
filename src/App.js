import React from 'react'
import './App.css'
 
export default function App() {

    const [advice, setAdvice] = React.useState('')

    React.useEffect(() => {
        getData()
    }, [])

    function getData() {
        let ran = '';
        fetch('https://api.adviceslip.com/advice')
        .then(response =>  response.json())
        .then(val => setAdvice(val.slip.advice))
        }


    return(
        <div className = "app">
            <div className = "advice-box">
                <h1>{advice}</h1>
                <button onClick={getData}>GIVE ME ADVICE!</button>
            </div>
        </div>
    )
}